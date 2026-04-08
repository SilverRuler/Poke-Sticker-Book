import { useState, useEffect } from "react";
import "./App.css";
import { pokemonData } from "./data/pokemonData";

type CollectionMap = { [id: number]: number };

function App() {
  const [collection, setCollection] = useState<CollectionMap>({});
  const [pendingCollection, setPendingCollection] = useState<CollectionMap>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"main" | "pending">("main");
  
  // Login form state
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Load collections from Backend
  const fetchCollections = async () => {
    try {
      const response = await fetch("/api/collection");
      const data = await response.json();
      setCollection(data.collection || {});
      setPendingCollection(data.pending_collection || {});
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

  const findPokemonId = (input: string): number | null => {
    const id = parseInt(input);
    if (!isNaN(id)) {
      return (id >= 1 && id <= 1025) ? id : null;
    }
    const found = pokemonData.find(p => p.name === input.trim());
    return found ? found.id : null;
  };

  const registerPokemon = async (id: number, isPending: boolean) => {
    if (!isPending && !isLoggedIn) {
      alert("등록 권한이 없습니다. 로그인해주세요.");
      return;
    }
    
    const endpoint = isPending ? "/api/pending/add" : "/api/collection/add";
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, count: 1 }),
      });
      const data = await response.json();
      if (isPending) setPendingCollection(data.pending_collection);
      else setCollection(data.collection);
      
      const count = isPending ? data.pending_collection[id] : data.collection[id];
      const pokemonName = pokemonData[id - 1].name;
      alert(`${pokemonName} ${count}개 입니다.`);
    } catch (error) {
      alert("등록에 실패했습니다.");
    }
  };

  const deletePokemon = async (id: number, isPending: boolean) => {
    if (!isPending && !isLoggedIn) {
      alert("삭제 권한이 없습니다. 로그인해주세요.");
      return;
    }
    const target = isPending ? pendingCollection : collection;
    const currentCount = target[id] || 0;
    const pokemonName = pokemonData[id - 1].name;
    
    let deleteCount: number | null = 1;
    
    if (currentCount > 1) {
      const input = prompt(`${pokemonName}을(를) 몇 개 삭제하시겠습니까? (현재 보유: ${currentCount}개, 전체 삭제하려면 'all' 입력)`);
      if (input === null) return;
      if (input.toLowerCase() === 'all') {
        deleteCount = null; // all
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
        body: JSON.stringify({ id, count: deleteCount }),
      });
      const data = await response.json();
      if (isPending) setPendingCollection(data.pending_collection);
      else setCollection(data.collection);
    } catch (error) {
      alert("삭제에 실패했습니다.");
    }
  };

  const checkDuplicate = (isPending: boolean) => {
    const input = prompt(`${isPending ? "예정 " : ""}중복 확인을 할 포켓몬 번호 또는 이름을 입력하세요:`);
    if (!input) return;
    const id = findPokemonId(input);
    if (!id) {
      alert("올바른 번호(1-1025) 또는 이름을 입력하세요.");
      return;
    }
    const target = isPending ? pendingCollection : collection;
    const count = target[id] || 0;
    if (count > 0) {
      alert(`[중복] ${id}번 ${pokemonData[id - 1].name}은(는) ${count}개 있습니다!`);
    } else {
      alert(`${id}번 ${pokemonData[id - 1].name}은(는) 아직 없습니다.`);
    }
  };

  const searchPokemon = (isPending: boolean) => {
    const input = prompt(`${isPending ? "예정 " : ""}검색할 포켓몬 번호 또는 이름을 입력하세요:`);
    if (!input) return;
    const id = findPokemonId(input);
    if (!id) {
      alert("올바른 번호(1-1025) 또는 이름을 입력하세요.");
      return;
    }
    const target = isPending ? pendingCollection : collection;
    if (target[id] > 0) {
      setSearchResult(`${id}번 ${pokemonData[id - 1].name}: 획득한 포켓몬 입니다.`);
    } else {
      setSearchResult(`${id}번 ${pokemonData[id - 1].name}: 미획득 포켓몬 입니다.`);
    }
  };

  const handleRegisterClick = (isPending: boolean) => {
    const input = prompt(`${isPending ? "예정 " : ""}등록할 포켓몬 번호 또는 이름을 입력하세요:`);
    if (!input) return;
    const id = findPokemonId(input);
    if (id) {
      registerPokemon(id, isPending);
    } else {
      alert("올바른 번호(1-1025) 또는 이름을 입력하세요.");
    }
  };

  const renderGrid = (target: CollectionMap, isPending: boolean) => {
    const ids = Object.keys(target).map(Number).sort((a, b) => a - b);
    if (ids.length === 0) {
      return (
        <div className="empty-state">
          <p>아직 {isPending ? "예정 " : ""}수집된 포켓몬이 없습니다.</p>
        </div>
      );
    }
    return (
      <div className="pokemon-grid">
        {ids.map((id) => {
          const pokemon = pokemonData[id - 1];
          const count = target[id];
          return (
            <div key={id} className="pokemon-card">
              <div className="card-header">
                <span className="pokemon-no">No.{id.toString().padStart(4, "0")}</span>
                {(isPending || isLoggedIn) && (
                  <button
                    className="delete-btn"
                    onClick={() => deletePokemon(id, isPending)}
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
                  <input 
                    type="text" 
                    placeholder="아이디" 
                    value={loginId} 
                    onChange={(e) => setLoginId(e.target.value)}
                    required
                  />
                  <input 
                    type="password" 
                    placeholder="비밀번호" 
                    value={loginPw} 
                    onChange={(e) => setLoginPw(e.target.value)}
                    required
                  />
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

      <div className="tab-menu">
        <button 
          className={`tab-btn ${activeTab === "main" ? "active" : ""}`}
          onClick={() => setActiveTab("main")}
        >
          포켓몬 도감
        </button>
        <button 
          className={`tab-btn ${activeTab === "pending" ? "active" : ""}`}
          onClick={() => setActiveTab("pending")}
        >
          포켓몬 예정 도감
        </button>
      </div>

      <nav className="nav-bar">
        <button onClick={() => handleRegisterClick(activeTab === "pending")} className="btn btn-primary">
          포켓몬  등록
        </button>
        <button onClick={() => checkDuplicate(activeTab === "pending")} className="btn btn-secondary">
          중복 확인
        </button>
        <button onClick={() => searchPokemon(activeTab === "pending")} className="btn btn-info">
          도감 검색
        </button>
      </nav>

      <main className="content">
        {searchResult && (
          <div className="search-result-box">
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
