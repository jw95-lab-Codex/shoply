import { useState } from 'react';
import './App.css';

const quickCategories = [
  { title: '패션', sub: '트렌드 의류' },
  { title: '뷰티', sub: '스킨케어' },
  { title: '디지털', sub: '가전/IT' },
  { title: '리빙', sub: '홈/키친' },
  { title: '식품', sub: '신선/간편' },
  { title: '취미', sub: '여가/스포츠' },
  { title: '도서', sub: '베스트셀러' },
  { title: '키즈', sub: '유아/완구' }
];

const deals = [
  { title: '오늘만 특가 데님', price: '29,000원', badge: '오늘특가' },
  { title: '무선 이어버드', price: '59,000원', badge: '핫딜' },
  { title: '프리미엄 원두', price: '12,900원', badge: '재입고' },
  { title: '에어프라이어', price: '89,000원', badge: '베스트' }
];

const bestItems = [
  { title: '미니멀 백팩', price: '38,000원', rank: '1' },
  { title: '슬림 텀블러', price: '18,000원', rank: '2' },
  { title: '데일리 스니커', price: '64,000원', rank: '3' },
  { title: '우드 트레이', price: '22,000원', rank: '4' },
  { title: '포근 이불', price: '49,000원', rank: '5' }
];

const collections = [
  { title: '스마트 라이프', desc: '생활을 바꾸는 디지털' },
  { title: '집꾸미기', desc: '감성 리빙 셀렉션' },
  { title: '건강식단', desc: '영양 밸런스 푸드' }
];

function HomePage() {
  return (
    <main>
      <section className="hero-grid">
        <div className="hero-main">
          <div className="hero-copy">
            <span className="chip">브랜드 픽</span>
            <h1>오늘의 쇼핑을 더 똑똑하게.</h1>
            <p>
              한눈에 보는 특가, 인기 상품, 큐레이션까지. 지금 가장 핫한 상품을
              빠르게 찾아보세요.
            </p>
            <div className="hero-actions">
              <button className="primary">오늘특가 보기</button>
              <button className="ghost">기획전 모아보기</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card">
              <span>한정 프로모션</span>
              <strong>봄 맞이 홈리빙 30%</strong>
              <p>4월 30일까지</p>
            </div>
            <div className="visual-card alt">
              <span>빠른 배송</span>
              <strong>내일 도착 베스트</strong>
              <p>오전 11시 이전 주문</p>
            </div>
          </div>
        </div>
        <div className="hero-side">
          <div className="side-card">
            <h3>오늘의 라이브</h3>
            <p>18:00 주방 인기템 라이브 특가</p>
            <button className="ghost">알림 받기</button>
          </div>
          <div className="side-card dark">
            <h3>멤버 혜택</h3>
            <p>첫 구매 10% + 무료반품 쿠폰</p>
            <button className="light">지금 받기</button>
          </div>
        </div>
      </section>

      <section className="quick-categories">
        {quickCategories.map((item) => (
          <div key={item.title} className="quick-card">
            <div className="icon" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.sub}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="section-block">
        <div className="section-head">
          <h2>오늘의 특가</h2>
          <button className="link-btn">전체 보기</button>
        </div>
        <div className="deal-grid">
          {deals.map((deal) => (
            <div key={deal.title} className="deal-card">
              <div className="badge">{deal.badge}</div>
              <div className="deal-thumb" />
              <h4>{deal.title}</h4>
              <p>{deal.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <h2>베스트 랭킹</h2>
          <button className="link-btn">랭킹 더보기</button>
        </div>
        <div className="best-list">
          {bestItems.map((item) => (
            <div key={item.title} className="best-row">
              <span className="rank">{item.rank}</span>
              <div className="best-thumb" />
              <div className="best-info">
                <strong>{item.title}</strong>
                <p>{item.price}</p>
              </div>
              <button className="ghost">담기</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block collections">
        <div className="section-head">
          <h2>기획전</h2>
          <button className="link-btn">전체 기획전</button>
        </div>
        <div className="collection-grid">
          {collections.map((col) => (
            <div key={col.title} className="collection-card">
              <div className="collection-thumb" />
              <h4>{col.title}</h4>
              <p>{col.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function SignupPage() {
  return (
    <main className="signup-main">
      <section className="signup-hero">
        <div>
          <span className="chip">회원가입</span>
          <h1>딱 필요한 정보로 빠르게 시작하세요.</h1>
          <p>
            아이디, 비밀번호, 이메일만 입력하면 가입 완료. 빠른 배송과 맞춤 추천을
            바로 이용할 수 있어요.
          </p>
        </div>
        <div className="signup-side">
          <h3>가입 혜택</h3>
          <ul>
            <li>첫 주문 10% 할인 쿠폰</li>
            <li>관심 상품 저장</li>
            <li>배송지 빠른 관리</li>
          </ul>
        </div>
      </section>

      <section className="signup-card">
        <h2>회원정보 입력</h2>
        <form className="signup-form">
          <label className="form-field">
            <span>아이디</span>
            <input type="text" placeholder="영문/숫자 4~16자" />
          </label>
          <label className="form-field">
            <span>비밀번호</span>
            <input type="password" placeholder="8자 이상, 특수문자 포함" />
          </label>
          <label className="form-field">
            <span>비밀번호 확인</span>
            <input type="password" placeholder="비밀번호 재입력" />
          </label>
          <label className="form-field">
            <span>이메일</span>
            <input type="email" placeholder="example@shoply.com" />
          </label>
          <div className="form-actions">
            <button type="submit" className="primary">
              가입 완료
            </button>
            <button type="button" className="ghost">
              다음에 하기
            </button>
          </div>
        </form>
        <p className="form-note">가입 완료 시 약관과 개인정보 처리방침에 동의한 것으로 간주됩니다.</p>
      </section>
    </main>
  );
}

function LoginPage({ onSignup }) {
  return (
    <main className="login-main">
      <section className="login-card">
        <div className="login-copy">
          <span className="chip">로그인</span>
          <h1>다시 만나 반가워요.</h1>
          <p>아이디와 비밀번호로 빠르게 로그인하세요.</p>
        </div>
        <form className="login-form">
          <label className="form-field">
            <span>아이디</span>
            <input type="text" placeholder="아이디 입력" />
          </label>
          <label className="form-field">
            <span>비밀번호</span>
            <input type="password" placeholder="비밀번호 입력" />
          </label>
          <div className="login-actions">
            <button type="submit" className="primary">
              로그인
            </button>
            <button type="button" className="ghost" onClick={onSignup}>
              회원가입
            </button>
          </div>
          <div className="login-help">
            <button type="button" className="link-btn">
              아이디 찾기
            </button>
            <span className="divider">|</span>
            <button type="button" className="link-btn">
              비밀번호 찾기
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

function App() {
  const [page, setPage] = useState('home');
  const isSignup = page === 'signup';
  const isLogin = page === 'login';

  return (
    <div className="store-page">
      <header className="store-header">
        <div className="top-bar">
          <button className="brand-btn" onClick={() => setPage('home')}>
            Shoply
          </button>
          <div className="search-wrap">
            <input
              className="search-input"
              type="search"
              placeholder="검색어를 입력하세요"
              aria-label="검색"
            />
            <button className="search-btn">검색</button>
          </div>
          <div className="top-actions">
            <button
              className={`link-btn ${isLogin ? 'active' : ''}`}
              onClick={() => setPage('login')}
            >
              로그인
            </button>
            <button
              className={`link-btn ${isSignup ? 'active' : ''}`}
              onClick={() => setPage('signup')}
            >
              회원가입
            </button>
            <button className="cart-btn">장바구니</button>
          </div>
        </div>

        <nav className="category-nav">
          <button className="menu-btn" onClick={() => setPage('home')}>
            전체 카테고리
          </button>
          <div className="category-links">
            <button className="nav-link" onClick={() => setPage('home')}>
              베스트
            </button>
            <button className="nav-link" onClick={() => setPage('home')}>
              오늘특가
            </button>
            <button className="nav-link" onClick={() => setPage('home')}>
              브랜드관
            </button>
            <button className="nav-link" onClick={() => setPage('home')}>
              선물샵
            </button>
            <button className="nav-link" onClick={() => setPage('home')}>
              라이브
            </button>
            <button className="nav-link" onClick={() => setPage('home')}>
              쿠폰
            </button>
          </div>
        </nav>
      </header>

      {isSignup ? (
        <SignupPage />
      ) : isLogin ? (
        <LoginPage onSignup={() => setPage('signup')} />
      ) : (
        <HomePage />
      )}

      <footer className="store-footer">
        <div>
          <strong>Shoply</strong>
          <p>네이버 스토어 스타일의 빠른 쇼핑 경험</p>
        </div>
        <div className="footer-links">
          <button className="link-btn">회사소개</button>
          <button className="link-btn">이용약관</button>
          <button className="link-btn">개인정보 처리방침</button>
          <button className="link-btn">고객센터</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
