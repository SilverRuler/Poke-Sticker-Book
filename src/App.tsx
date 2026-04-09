import { useState, useEffect, useRef } from "react";
import "./App.css";
import { pokemonData } from "./data/pokemonData";
import type { PokemonEntry, PokemonForm } from "./data/pokemonData";

type CollectionMap = { [key: string]: number };

interface ModalConfig {
  type: "alert" | "confirm" | "prompt" | "choice";
  message: string;
  placeholder?: string;
  choices?: { label: string; value: any }[];
  onConfirm: (value?: any) => void;
  onCancel?: () => void;
  inputType?: "text" | "password";
}

interface PokemonDetail {
  id: number;
  name: string;
  classification: string;
  height: number;
  weight: number;
  gender: string;
  flavorTexts: { version: string; text: string }[];
  abilities: { name: string; description: string }[];
}

const versionMap: { [key: string]: string } = {
  red: "레드", blue: "블루", yellow: "피카츄", gold: "금", silver: "은", crystal: "크리스탈",
  ruby: "루비", sapphire: "사파이어", emerald: "에메랄드", firered: "파이어레드", leafgreen: "리프그린",
  diamond: "디아루가", pearl: "펄기아", platinum: "기라티나", heartgold: "하트골드", soulsilver: "소울실버",
  black: "블랙", white: "화이트", "black-2": "블랙 2", "white-2": "화이트 2", x: "X", y: "Y",
  "omega-ruby": "오메가루비", "alpha-sapphire": "알파사파이어", sun: "썬", moon: "문",
  "ultra-sun": "울트라썬", "ultra-moon": "울트라문", "lets-go-pikachu": "레츠고! 피카츄",
  "lets-go-eevee": "레츠고! 이브이", sword: "소드", shield: "실드", "scarlet": "스칼렛", "violet": "바이올렛",
  "legends-arceus": "레전즈 아르세우스"
};

function App() {
  const [collection, setCollection] = useState<CollectionMap>({});
  const [pendingCollection, setPendingCollection] = useState<CollectionMap>({});
  const [anniversaryCollection, setAnniversaryCollection] = useState<string[]>([]);
  const [todayCollection, setTodayCollection] = useState<string[]>([]);
  const [visitorStats, setVisitorStats] = useState({ total: 0, today: 0 });
  const [serverDate, setServerDate] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"main" | "pending">("main");
  
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  
  // BGM State
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);
  const isBgmMutedManually = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Detail Modal State
  const [detailKey, setDetailKey] = useState<string | null>(null);
  const [detailData, setDetailData] = useState<PokemonDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [activeFlavorIndex, setActiveFlavorIndex] = useState(0);
  const [abilityModal, setAbilityModal] = useState<{ name: string; description: string } | null>(null);

  // Custom Modal State
  const [modal, setModal] = useState<ModalConfig | null>(null);
  const [modalInput, setModalInput] = useState("");

  const showAlert = (message: string) => {
    return new Promise((resolve) => {
      setModal({ type: "alert", message, onConfirm: () => { setModal(null); resolve(true); } });
    });
  };

  const showConfirm = (message: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setModal({ 
        type: "confirm", 
        message, 
        onConfirm: () => { setModal(null); resolve(true); },
        onCancel: () => { setModal(null); resolve(false); }
      });
    });
  };

  const showPrompt = (message: string, placeholder = "", inputType: "text" | "password" = "text"): Promise<string | null> => {
    return new Promise((resolve) => {
      setModalInput("");
      setModal({ 
        type: "prompt", 
        message, 
        placeholder,
        inputType,
        onConfirm: (val) => { setModal(null); resolve(val); },
        onCancel: () => { setModal(null); resolve(null); }
      });
    });
  };

  const showChoice = (message: string, choices: { label: string; value: any }[]): Promise<any | null> => {
    return new Promise((resolve) => {
      setModal({
        type: "choice",
        message,
        choices,
        onConfirm: (val) => { setModal(null); resolve(val); },
        onCancel: () => { setModal(null); resolve(null); }
      });
    });
  };

  const fetchCollections = async () => {
    try {
      const response = await fetch("/api/collection");
      const data = await response.json();
      setCollection(data.collection || {});
      setPendingCollection(data.pending_collection || {});
      setAnniversaryCollection(data.anniversary_collection || []);
      setTodayCollection(data.today_collection || []);
      setVisitorStats(data.visitor_stats);
      setServerDate(data.server_date);
    } catch (error) {
      console.error("Failed to fetch collection:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleBgm = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (audioRef.current) {
      if (isBgmPlaying) {
        audioRef.current.pause();
        setIsBgmPlaying(false);
        isBgmMutedManually.current = true;
      } else {
        audioRef.current.play().then(() => {
          setIsBgmPlaying(true);
          isBgmMutedManually.current = false;
        }).catch(() => {});
      }
    }
  };

  // Initial load and listeners
  useEffect(() => {
    fetchCollections();
    const auth = localStorage.getItem("is-logged-in");
    if (auth === "true") setIsLoggedIn(true);

    const handleFirstInteraction = () => {
      // Only play if not already playing and not manually muted
      if (audioRef.current && !audioRef.current.paused) return; // Already playing
      
      if (audioRef.current && !isBgmMutedManually.current) {
        audioRef.current.play().then(() => {
          setIsBgmPlaying(true);
        }).catch(() => {});
      }
      window.removeEventListener("click", handleFirstInteraction);
    };
    window.addEventListener("click", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
    };
  }, []);

  // Separate Effect for Keyboard listener to use latest state
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'm') {
        if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName || "")) return;
        toggleBgm();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isBgmPlaying]);

  const fetchPokemonDetail = async (key: string) => {
    const [idStr] = key.split("-");
    const id = parseInt(idStr);
    
    if (id > 1025) return; // No detailed info for special stickers

    setDetailLoading(true);
    try {
      const [pokemonRes, speciesRes] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      ]);
      
      const pokemon = await pokemonRes.json();
      const species = await speciesRes.json();

      const classification = species.genera.find((g: any) => g.language.name === "ko")?.genus || "???";

      let gender = "수컷, 암컷";
      if (species.gender_rate === -1) gender = "성별없음";
      else if (species.gender_rate === 0) gender = "수컷";
      else if (species.gender_rate === 8) gender = "암컷";

      const flavorTexts = species.flavor_text_entries
        .filter((f: any) => f.language.name === "ko")
        .map((f: any) => ({
          version: versionMap[f.version.name] || f.version.name,
          text: f.flavor_text.replace(/\f|\n|\r/g, " ")
        }));

      const abilities = await Promise.all(pokemon.abilities.map(async (a: any) => {
        const res = await fetch(a.ability.url);
        const data = await res.json();
        const koName = data.names.find((n: any) => n.language.name === "ko")?.name || a.ability.name;
        const koDesc = data.flavor_text_entries.find((f: any) => f.language.name === "ko")?.flavor_text || "설명이 없습니다.";
        return { name: koName, description: koDesc };
      }));

      setDetailData({
        id,
        name: pokemonData.find(p => p.id === id)?.name || pokemon.name,
        classification,
        height: pokemon.height / 10,
        weight: pokemon.weight / 10,
        gender,
        flavorTexts,
        abilities
      });
      setActiveFlavorIndex(0);
    } catch (error) {
      console.error("Failed to fetch pokemon detail:", error);
      showAlert("상세 정보를 가져오는 데 실패했습니다.");
    } finally {
      setDetailLoading(false);
    }
  };

  const handleCardClick = (key: string) => {
    setDetailKey(key);
    fetchPokemonDetail(key);
  };

  const closeDetail = () => {
    setDetailKey(null);
    setDetailData(null);
  };

  const toggleAnniversary = async (key: string) => {
    try {
      const response = await fetch("/api/anniversary/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });
      const data = await response.json();
      setAnniversaryCollection(data.anniversary_collection);
    } catch (error) {
      showAlert("30주년 설정 업데이트 실패");
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: loginId, pw: loginPw }),
      });
      if (response.ok) {
        setIsLoggedIn(true);
        localStorage.setItem("is-logged-in", "true");
        setShowLoginForm(false);
        setLoginId("");
        setLoginPw("");
        showAlert("로그인 성공!");
      } else {
        showAlert("아이디 또는 비밀번호가 틀렸습니다.");
      }
    } catch (error) {
      showAlert("로그인 서버 오류");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("is-logged-in");
    showAlert("로그아웃 되었습니다.");
  };

  const findPokemonEntries = (input: string): PokemonEntry[] => {
    const id = parseInt(input);
    if (!isNaN(id)) {
      const found = pokemonData.find(p => p.id === id);
      return found ? [found] : [];
    }
    const search = input.trim().toLowerCase();
    return pokemonData.filter(p => 
      p.name.toLowerCase().includes(search) || 
      p.forms.some(f => f.name.toLowerCase().includes(search))
    );
  };

  const selectForm = async (entry: PokemonEntry): Promise<PokemonForm | null> => {
    if (entry.forms.length === 1) return entry.forms[0];
    const choices = entry.forms.map((f) => ({ label: f.name, value: f }));
    return await showChoice(`${entry.name}의 어떤 형태를 등록하시겠습니까?`, choices);
  };

  const registerPokemon = async (key: string, isPending: boolean, pokemonName: string) => {
    if (!isPending && !isLoggedIn) {
      showAlert("등록 권한이 없습니다. 로그인해주세요.");
      return;
    }
    
    const endpoint = isPending ? "/api/pending/add" : "/api/collection/add";
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, count: 1 }),
      });
      const data = await response.json();
      if (isPending) setPendingCollection(data.pending_collection);
      else {
        setCollection(data.collection);
        await fetch("/api/today/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key }),
        });
        const updatedRes = await fetch("/api/collection");
        const updatedData = await updatedRes.json();
        setTodayCollection(updatedData.today_collection);
      }
      
      const count = isPending ? data.pending_collection[key] : data.collection[key];
      showAlert(`${pokemonName} ${count}개 입니다. (오늘의 획득 목록에 추가됨)`);
    } catch (error) {
      showAlert("등록에 실패했습니다.");
    }
  };

  const deletePokemon = async (key: string, isPending: boolean, pokemonName: string) => {
    if (!isPending && !isLoggedIn) {
      showAlert("삭제 권한이 없습니다. 로그인해주세요.");
      return;
    }
    const target = isPending ? pendingCollection : collection;
    const currentCount = target[key] || 0;
    
    let deleteCount: number | null = 1;
    
    if (currentCount > 1) {
      const input = await showPrompt(`${pokemonName}을(를) 몇 개 삭제하시겠습니까? (현재 보유: ${currentCount}개, 전체 삭제하려면 'all' 입력)`);
      if (input === null) return;
      if (input.toLowerCase() === 'all') {
        deleteCount = null;
      } else {
        deleteCount = parseInt(input);
        if (isNaN(deleteCount) || deleteCount < 1) {
          showAlert("올바른 개수를 입력하세요.");
          return;
        }
      }
    } else {
      if (!(await showConfirm(`${pokemonName}을(를) 삭제하시겠습니까?`))) return;
    }

    const endpoint = isPending ? "/api/pending/remove" : "/api/collection/remove";
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, count: deleteCount }),
      });
      const data = await response.json();
      if (isPending) setPendingCollection(data.pending_collection);
      else {
        setCollection(data.collection);
        setAnniversaryCollection(data.anniversary_collection);
      }
    } catch (error) {
      showAlert("삭제에 실패했습니다.");
    }
  };

  const removeTodayPokemon = async (key: string) => {
    if (!isLoggedIn) return;
    try {
      const response = await fetch("/api/today/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });
      const data = await response.json();
      setTodayCollection(data.today_collection);
    } catch (error) {
      showAlert("오늘의 획득에서 삭제 실패");
    }
  };

  const clearTodayCollection = async () => {
    if (!isLoggedIn) return;
    if (!(await showConfirm("오늘의 획득 목록을 초기화하시겠습니까?"))) return;
    try {
      const response = await fetch("/api/today/clear", { method: "POST" });
      const data = await response.json();
      setTodayCollection(data.today_collection);
    } catch (error) {
      showAlert("초기화 실패");
    }
  };

  const handleRegisterClick = async (isPending: boolean) => {
    const input = await showPrompt(`${isPending ? "예정 " : ""}등록할 포켓몬 번호 또는 이름 또는 '특별'을 입력하세요:`);
    if (!input) return;

    if (input.trim() === "특별") {
      const choice = await showChoice("특별 스티커 선택", [
        { label: "피카츄로 변신한 메타몽", value: "1" },
        { label: "기타", value: "2" }
      ]);
      if (choice === "1") {
        registerPokemon("9999-01", isPending, "피카츄로 변신한 메타몽");
      } else if (choice === "2") {
        registerPokemon("9998-01", isPending, "기타");
      }
      return;
    }

    const entries = findPokemonEntries(input);
    if (entries.length === 0) {
      showAlert("검색 결과가 없습니다.");
      return;
    }

    let entry = entries[0];
    if (entries.length > 1) {
      const choices = entries.map(e => ({ label: e.name, value: e }));
      const selectedEntry = await showChoice("여러 포켓몬이 검색되었습니다. 선택하세요", choices);
      if (!selectedEntry) return;
      entry = selectedEntry;
    }

    const form = await selectForm(entry);
    if (form) {
      registerPokemon(`${entry.id}-${form.formId}`, isPending, form.name);
    }
  };

  const checkDuplicate = async (isPending: boolean) => {
    const input = await showPrompt(`${isPending ? "예정 " : ""}중복 확인을 할 포켓몬 번호 또는 이름을 입력하세요:`);
    if (!input) return;
    const entries = findPokemonEntries(input);
    if (entries.length === 0) {
      showAlert("검색 결과가 없습니다.");
      return;
    }
    
    let foundAny = false;
    entries.forEach(entry => {
      entry.forms.forEach(form => {
        const key = `${entry.id}-${form.formId}`;
        const target = isPending ? pendingCollection : collection;
        const count = target[key] || 0;
        if (count > 0) {
          showAlert(`[중복] ${form.name}은(는) ${count}개 있습니다!`);
          foundAny = true;
        }
      });
    });
    if (!foundAny) {
      showAlert("아직 보유 중이 아닙니다.");
    }
  };

  const searchPokemon = async (isPending: boolean) => {
    const input = await showPrompt(`${isPending ? "예정 " : ""}검색할 포켓몬 번호 또는 이름을 입력하세요:`);
    if (!input) return;
    const entries = findPokemonEntries(input);
    if (entries.length === 0) {
      showAlert("검색 결과가 없습니다.");
      return;
    }
    
    const results: string[] = [];
    entries.forEach(entry => {
      entry.forms.forEach(form => {
        const key = `${entry.id}-${form.formId}`;
        const target = isPending ? pendingCollection : collection;
        const status = target[key] > 0 ? "획득한 포켓몬 입니다." : "미획득 포켓몬 입니다.";
        results.push(`${form.name}: ${status}`);
      });
    });
    setSearchResult(results.join("\n"));
  };

  const getPokemonByKey = (key: string): { name: string, image: string, types: string[] } | null => {
    const [idStr, formId] = key.split("-");
    const id = parseInt(idStr);
    const entry = pokemonData.find(p => p.id === id);
    if (!entry) return null;
    const form = entry.forms.find(f => f.formId === formId);
    return form ? { name: form.name, image: form.image, types: form.types || [] } : null;
  };

  const renderGrid = (target: CollectionMap, isPending: boolean) => {
    const keys = Object.keys(target).sort((a, b) => {
      const [aId, aForm] = a.split("-").map(Number);
      const [bId, bForm] = b.split("-").map(Number);
      if (aId !== bId) return aId - bId;
      return aForm - bForm;
    });
    
    if (keys.length === 0) {
      return (
        <div className="empty-state">
          <p>아직 {isPending ? "예정 " : ""}수집된 포켓몬이 없습니다.</p>
        </div>
      );
    }
    
    return (
      <div className="pokemon-grid">
        {keys.map((key) => {
          const pokemon = getPokemonByKey(key);
          if (!pokemon) return null;
          const count = target[key];
          const isAnniversary = anniversaryCollection.includes(key);
          return (
            <div key={key} className="pokemon-card" onClick={() => handleCardClick(key)}>
              <div className="card-header">
                <span className="pokemon-no">No.{key.split("-")[0].padStart(4, "0")}</span>
                {(isPending || isLoggedIn) && (
                  <button
                    className="delete-btn"
                    onClick={(e) => { e.stopPropagation(); deletePokemon(key, isPending, pokemon.name); }}
                    title="삭제"
                  >
                    &times;
                  </button>
                )}
              </div>
              <div className="image-wrapper">
                <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
                {isAnniversary && (
                  <div className="anniversary-badge">
                    Pokémon <span className="red">30</span>th<br/>Anniversary
                  </div>
                )}
              </div>
              <div className="pokemon-name">{pokemon.name}</div>
              <div className="pokemon-types">
                {pokemon.types.map((t, i) => (
                  <span key={i} className={`type-badge type-${t}`}>{t}</span>
                ))}
              </div>
              <div className="pokemon-count">보유: {count}개</div>
            </div>
          );
        })}
      </div>
    );
  };

  if (loading) {
    return <div className="loading">데이터를 불러오는 중...</div>;
  }

  return (
    <div className="app-container">
      <audio ref={audioRef} src="/bgm.mp3" loop />
      
      {/* Custom Modal */}
      {modal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p className="modal-message">{modal.message}</p>
            {modal.type === "prompt" && (
              <input 
                className="modal-input"
                type={modal.inputType || "text"}
                value={modalInput}
                onChange={(e) => setModalInput(e.target.value)}
                placeholder={modal.placeholder}
                autoFocus
              />
            )}
            {modal.type === "choice" && (
              <div className="modal-choices">
                {modal.choices?.map((c, i) => (
                  <button key={i} className="btn modal-choice-btn" onClick={() => modal.onConfirm(c.value)}>
                    {c.label}
                  </button>
                ))}
              </div>
            )}
            <div className="modal-actions">
              {modal.type !== "choice" && (
                <button className="btn btn-primary" onClick={() => modal.onConfirm(modalInput)}>
                  확인
                </button>
              )}
              {(modal.type === "confirm" || modal.type === "prompt" || modal.type === "choice") && (
                <button className="btn btn-cancel" onClick={modal.onCancel}>
                  취소
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pokemon Detail Modal */}
      {detailKey && (
        <div className="modal-overlay" onClick={closeDetail}>
          <div className="detail-modal" onClick={e => e.stopPropagation()}>
            <button className="close-detail-btn" onClick={closeDetail}>&times;</button>
            {detailLoading ? (
              <div className="detail-loading">정보를 불러오는 중...</div>
            ) : detailData ? (
              <div className="detail-layout">
                <div className="detail-left">
                  <div className="detail-img-box">
                    <img src={getPokemonByKey(detailKey)?.image} alt={detailData.name} />
                    <div className="anniversary-toggle">
                      <label>
                        <input 
                          type="checkbox" 
                          checked={anniversaryCollection.includes(detailKey)}
                          onChange={() => toggleAnniversary(detailKey)}
                        /> <span className="red">30</span>th
                      </label>
                    </div>
                  </div>
                  <div className="detail-form-info">
                    {getPokemonByKey(detailKey)?.name}
                  </div>
                </div>
                <div className="detail-right">
                  <div className="detail-flavor-box">
                    <div className="version-tabs">
                      {detailData.flavorTexts.slice(0, 6).map((f, i) => (
                        <button 
                          key={i} 
                          className={`version-tab ${activeFlavorIndex === i ? "active" : ""}`}
                          onClick={() => setActiveFlavorIndex(i)}
                        >
                          {f.version}
                        </button>
                      ))}
                    </div>
                    <p className="flavor-text">
                      {detailData.flavorTexts[activeFlavorIndex]?.text || "설명이 없습니다."}
                    </p>
                  </div>
                  <table className="detail-table">
                    <tbody>
                      <tr>
                        <th>타입</th>
                        <td>
                          <div className="detail-types">
                            {getPokemonByKey(detailKey)?.types.map((t, i) => (
                              <span key={i} className={`type-badge type-${t}`}>{t}</span>
                            ))}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>키 / 몸무게</th>
                        <td>{detailData.height}m / {detailData.weight}kg</td>
                      </tr>
                      <tr>
                        <th>분류</th>
                        <td>{detailData.classification}</td>
                      </tr>
                      <tr>
                        <th>성별</th>
                        <td>{detailData.gender}</td>
                      </tr>
                      <tr>
                        <th>특성</th>
                        <td>
                          <div className="detail-abilities">
                            {detailData.abilities.map((a, i) => (
                              <button key={i} className="ability-btn" onClick={() => setAbilityModal(a)}>
                                {a.name}
                              </button>
                            ))}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="detail-error">정보가 없습니다. (특별 스티커는 상세 정보를 지원하지 않습니다.)</div>
            )}
          </div>
        </div>
      )}

      {/* Ability Description Modal */}
      {abilityModal && (
        <div className="modal-overlay" style={{ zIndex: 1100 }} onClick={() => setAbilityModal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{abilityModal.name}</h3>
            <p style={{ margin: "20px 0", lineHeight: "1.6" }}>{abilityModal.description}</p>
            <button className="btn btn-primary" onClick={() => setAbilityModal(null)}>닫기</button>
          </div>
        </div>
      )}

      <header className="header">
        <div className="visitor-count">
          Today: <span>{visitorStats.today}</span> | Total: <span>{visitorStats.total}</span>
        </div>
        
        <h1>포켓몬 띠부씰 도감</h1>
        
        <div className="auth-bar-center">
          <button onClick={toggleBgm} className="btn-link bgm-btn">
            BGM {isBgmPlaying ? "OFF" : "ON"} 🎵
          </button>
          {isLoggedIn ? (
            <button onClick={logout} className="btn-link">로그아웃</button>
          ) : (
            <>
              {showLoginForm ? (
                <form className="login-form" onSubmit={handleLoginSubmit}>
                  <input type="text" placeholder="아이디" value={loginId} onChange={(e) => setLoginId(e.target.value)} required />
                  <input type="password" placeholder="비밀번호" value={loginPw} onChange={(e) => setLoginPw(e.target.value)} required />
                  <button type="submit" className="btn btn-mini">로그인</button>
                  <button type="button" className="btn btn-mini btn-cancel" onClick={() => setShowLoginForm(false)}>취소</button>
                </form>
              ) : (
                <button onClick={() => setShowLoginForm(true)} className="btn-link">관리자 로그인</button>
              )}
            </>
          )}
        </div>

        <p className="subtitle">
          나만의 띠부띠부씰 수집 현황을 <br className="mobile-only" /> 관리해보세요!
        </p>
      </header>

      <section className="today-catch-section">
        <div className="today-catch-header">
          <div className="today-catch-title-box">
            <span className="today-date">{serverDate}</span>
            <h2>오늘의 획득 포켓몬 🔥</h2>
          </div>
          {isLoggedIn && <button className="btn btn-mini btn-cancel btn-reset-today" onClick={clearTodayCollection}>초기화</button>}
        </div>
        {todayCollection.length === 0 ? (
          <div className="today-empty">오늘의 획득이 아직 없습니다.</div>
        ) : (
          <div className="today-list">
            {todayCollection.map(key => {
              const pokemon = getPokemonByKey(key);
              if (!pokemon) return null;
              return (
                <div key={key} className="today-item" onClick={() => handleCardClick(key)}>
                  <div className="today-img-box">
                    <img src={pokemon.image} alt={pokemon.name} />
                    {isLoggedIn && <button className="today-remove-btn" onClick={(e) => { e.stopPropagation(); removeTodayPokemon(key); }}>&times;</button>}
                  </div>
                  <span>{pokemon.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <div className="tab-menu">
        <button className={`tab-btn ${activeTab === "main" ? "active" : ""}`} onClick={() => setActiveTab("main")}>포켓몬 도감</button>
        <button className={`tab-btn ${activeTab === "pending" ? "active" : ""}`} onClick={() => setActiveTab("pending")}>포켓몬 예정 도감</button>
      </div>

      <nav className="nav-bar">
        <button onClick={() => handleRegisterClick(activeTab === "pending")} className="btn btn-primary">포켓몬 등록</button>
        <button onClick={() => checkDuplicate(activeTab === "pending")} className="btn btn-secondary">중복 확인</button>
        <button onClick={() => searchPokemon(activeTab === "pending")} className="btn btn-info">도감 검색</button>
      </nav>

      <main className="content">
        {searchResult && (
          <div className="search-result-box" style={{ whiteSpace: "pre-line" }}>
            <p>{searchResult}</p>
            <button onClick={() => setSearchResult(null)}>닫기</button>
          </div>
        )}
        <div className="stats">
          {activeTab === "main" ? "현재 수집(종류)" : "예정 수집(종류)"}: 
          <strong> {activeTab === "main" ? Object.keys(collection).length : Object.keys(pendingCollection).length}</strong> / 1025
        </div>
        {activeTab === "main" ? renderGrid(collection, false) : renderGrid(pendingCollection, true)}
      </main>

      <footer className="footer">
        <p>© 2026 Pokemon Sticker Collector. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
