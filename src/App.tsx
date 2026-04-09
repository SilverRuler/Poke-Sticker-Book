import { useState, useEffect } from "react";
import "./App.css";
import { pokemonData } from "./data/pokemonData";
import type { PokemonEntry, PokemonForm } from "./data/pokemonData";

type CollectionMap = { [key: string]: number };

function App() {
  const [collection, setCollection] = useState<CollectionMap>({});
  const [pendingCollection, setPendingCollection] = useState<CollectionMap>({});
  const [todayCollection, setTodayCollection] = useState<string[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"main" | "pending">("main");
  
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  const fetchCollections = async () => {
    try {
      const response = await fetch("/api/collection");
      const data = await response.json();
      setCollection(data.collection || {});
      setPendingCollection(data.pending_collection || {});
      setTodayCollection(data.today_collection || []);
    } catch (error) {
      console.error("Failed to fetch collection:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
    const auth = localStorage.getItem("is-logged-in");
    if (auth === "true") setIsLoggedIn(true);
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId === "tyeun7" && loginPw === "dmswk123") {
      setIsLoggedIn(true);
      localStorage.setItem("is-logged-in", "true");
      setShowLoginForm(false);
      setLoginId("");
      setLoginPw("");
      alert("로그인 성공!");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("is-logged-in");
    alert("로그아웃 되었습니다.");
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

  const selectForm = (entry: PokemonEntry): PokemonForm | null => {
    if (entry.forms.length === 1) return entry.forms[0];
    
    let message = `${entry.name}의 어떤 형태를 등록하시겠습니까?\n`;
    entry.forms.forEach((f, idx) => {
      message += `${idx + 1}. ${f.name}\n`;
    });
    
    const choice = prompt(message);
    if (!choice) return null;
    const idx = parseInt(choice) - 1;
    if (idx >= 0 && idx < entry.forms.length) {
      return entry.forms[idx];
    }
    alert("올바른 번호를 선택하세요.");
    return null;
  };

  const registerPokemon = async (key: string, isPending: boolean, pokemonName: string) => {
    if (!isPending && !isLoggedIn) {
      alert("등록 권한이 없습니다. 로그인해주세요.");
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
        const updatedToday = await (await fetch("/api/collection")).json();
        setTodayCollection(updatedToday.today_collection);
      }
      
      const count = isPending ? data.pending_collection[key] : data.collection[key];
      alert(`${pokemonName} ${count}개 입니다. (오늘의 획득 목록에 추가됨)`);
    } catch (error) {
      alert("등록에 실패했습니다.");
    }
  };

  const deletePokemon = async (key: string, isPending: boolean, pokemonName: string) => {
    if (!isPending && !isLoggedIn) {
      alert("삭제 권한이 없습니다. 로그인해주세요.");
      return;
    }
    const target = isPending ? pendingCollection : collection;
    const currentCount = target[key] || 0;
    
    let deleteCount: number | null = 1;
    
    if (currentCount > 1) {
      const input = prompt(`${pokemonName}을(를) 몇 개 삭제하시겠습니까? (현재 보유: ${currentCount}개, 전체 삭제하려면 'all' 입력)`);
      if (input === null) return;
      if (input.toLowerCase() === 'all') {
        deleteCount = null;
      } else {
        deleteCount = parseInt(input);
        if (isNaN(deleteCount) || deleteCount < 1) {
          alert("올바른 개수를 입력하세요.");
          return;
        }
      }
    } else {
      if (!window.confirm(`${pokemonName}을(를) 삭제하시겠습니까?`)) return;
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
      else setCollection(data.collection);
    } catch (error) {
      alert("삭제에 실패했습니다.");
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
      alert("오늘의 획득에서 삭제 실패");
    }
  };

  const clearTodayCollection = async () => {
    if (!isLoggedIn) return;
    if (!window.confirm("오늘의 획득 목록을 초기화하시겠습니까?")) return;
    try {
      const response = await fetch("/api/today/clear", { method: "POST" });
      const data = await response.json();
      setTodayCollection(data.today_collection);
    } catch (error) {
      alert("초기화 실패");
    }
  };

  const handleRegisterClick = async (isPending: boolean) => {
    const input = prompt(`${isPending ? "예정 " : ""}등록할 포켓몬 번호 또는 이름 또는 '특별'을 입력하세요:`);
    if (!input) return;

    if (input.trim() === "특별") {
      const choice = prompt("특별 스티커 선택:\n1. 피카츄로 변신한 메타몽\n2. 기타");
      if (choice === "1") {
        registerPokemon("9999-01", isPending, "피카츄로 변신한 메타몽");
      } else if (choice === "2") {
        registerPokemon("9998-01", isPending, "기타");
      }
      return;
    }

    const entries = findPokemonEntries(input);
    if (entries.length === 0) {
      alert("검색 결과가 없습니다.");
      return;
    }

    let entry = entries[0];
    if (entries.length > 1) {
      let msg = "여러 포켓몬이 검색되었습니다. 선택하세요:\n";
      entries.forEach((e, i) => msg += `${i + 1}. ${e.name}\n`);
      const c = prompt(msg);
      if (!c) return;
      entry = entries[parseInt(c) - 1];
    }

    if (!entry) return;
    const form = selectForm(entry);
    if (form) {
      registerPokemon(`${entry.id}-${form.formId}`, isPending, form.name);
    }
  };

  const checkDuplicate = (isPending: boolean) => {
    const input = prompt(`${isPending ? "예정 " : ""}중복 확인을 할 포켓몬 번호 또는 이름을 입력하세요:`);
    if (!input) return;
    const entries = findPokemonEntries(input);
    if (entries.length === 0) {
      alert("검색 결과가 없습니다.");
      return;
    }
    
    entries.forEach(entry => {
      entry.forms.forEach(form => {
        const key = `${entry.id}-${form.formId}`;
        const target = isPending ? pendingCollection : collection;
        const count = target[key] || 0;
        if (count > 0) {
          alert(`[중복] ${form.name}은(는) ${count}개 있습니다!`);
        }
      });
    });
  };

  const searchPokemon = (isPending: boolean) => {
    const input = prompt(`${isPending ? "예정 " : ""}검색할 포켓몬 번호 또는 이름을 입력하세요:`);
    if (!input) return;
    const entries = findPokemonEntries(input);
    if (entries.length === 0) {
      alert("검색 결과가 없습니다.");
      return;
    }
    
    // For simplicity, just show status of the first match or prompt for form if needed
    // But user wants "획득한 포켓몬 입니다" or "미획득 포켓몬 입니다"
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

  const getPokemonByKey = (key: string): { name: string, image: string } | null => {
    const [idStr, formId] = key.split("-");
    const id = parseInt(idStr);
    const entry = pokemonData.find(p => p.id === id);
    if (!entry) return null;
    const form = entry.forms.find(f => f.formId === formId);
    return form ? { name: form.name, image: form.image } : null;
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
          return (
            <div key={key} className="pokemon-card">
              <div className="card-header">
                <span className="pokemon-no">No.{key.split("-")[0].padStart(4, "0")}</span>
                {(isPending || isLoggedIn) && (
                  <button
                    className="delete-btn"
                    onClick={() => deletePokemon(key, isPending, pokemon.name)}
                    title="삭제"
                  >
                    &times;
                  </button>
                )}
              </div>
              <div className="image-wrapper">
                <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
              </div>
              <div className="pokemon-name">{pokemon.name}</div>
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
      <header className="header">
        <div className="auth-bar">
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
        <h1>포켓몬 띠부씰 도감</h1>
        <p>나만의 띠부띠부씰 수집 현황을 관리해보세요!</p>
      </header>

      <section className="today-catch-section">
        <div className="today-catch-header">
          <h2>오늘의 획득 포켓몬 🔥</h2>
          {isLoggedIn && <button className="btn btn-mini btn-cancel" onClick={clearTodayCollection}>초기화</button>}
        </div>
        {todayCollection.length === 0 ? (
          <div className="today-empty">오늘의 획득이 아직 없습니다.</div>
        ) : (
          <div className="today-list">
            {todayCollection.map(key => {
              const pokemon = getPokemonByKey(key);
              if (!pokemon) return null;
              return (
                <div key={key} className="today-item">
                  <div className="today-img-box">
                    <img src={pokemon.image} alt={pokemon.name} />
                    {isLoggedIn && <button className="today-remove-btn" onClick={() => removeTodayPokemon(key)}>&times;</button>}
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
