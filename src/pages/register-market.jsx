import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import yojeongSymbol  from '../images/yojeong_simbol.svg';
import personalIcon   from '../images/personal.svg';
import underphaseLogo from '../images/UNDERPHASE_reserved.svg';
import asset1         from '../images/Asset1.png';
import marketIcon     from '../images/market.svg';
import styles from '../assets/registerMarketStyles';

export default function RegisterMarket() {
  const navigate = useNavigate();

  const [code, setCode] = useState('');
  const [focused, setFocused] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버 연결 후 실제 등록 처리
    navigate('/my-market');
  };

  return (
    <div style={styles.page}>

      {/* ── Header ──────────────────────────────────────── */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.headerLeft}>
            <div style={styles.logo}>
              <a href="/main" style={styles.logoInner}>
                <img src={yojeongSymbol} alt="요정" style={{ width: 26, height: 26, objectFit: 'contain' }} />
                <span style={styles.logoText}>요정</span>
              </a>
            </div>
            <nav style={styles.nav}>
              <a href="#" style={styles.navLink}>서비스 소개</a>
              <a href="#" style={styles.navLink}>이용요금</a>
              <a href="#" style={styles.navLink}>고객지원</a>
            </nav>
          </div>
          <div style={styles.headerRight}>
            <span style={styles.headerMyStore}>내매장</span>
            <div style={styles.headerAvatar} onClick={() => setShowProfile(v => !v)}>
              <img src={personalIcon} alt="프로필" style={{ width: 20, height: 20, objectFit: 'contain' }} />
            </div>
            {showProfile && (
              <>
                <div style={{ position: 'fixed', inset: 0, zIndex: 99 }} onClick={() => setShowProfile(false)} />
                <div style={styles.profileDropdown}>
                  <div style={styles.profileDropHead}>
                    <div style={styles.profileDropAvatar}>
                      <img src={personalIcon} alt="프로필" style={{ width: 22, height: 22, objectFit: 'contain' }} />
                    </div>
                    <div>
                      <div style={styles.profileDropName}>홍길동</div>
                      <div style={styles.profileDropPhone}>010-1234-5678</div>
                    </div>
                  </div>
                  <div style={styles.profileDropDivider} />
                  <a href="/my-page" style={styles.profileDropItem}>마이페이지</a>
                  <div style={styles.profileDropDivider} />
                  <button style={styles.profileDropItem} onClick={() => {}}>로그아웃</button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ── Main ────────────────────────────────────────── */}
      <main style={styles.main}>
        <div style={styles.card}>

          {/* 아이콘 */}
          <div style={styles.iconWrap}>
            <img src={marketIcon} alt="매장" style={{ width: 64, height: 64, objectFit: 'contain' }} />
            <div style={styles.iconBadge}>+</div>
          </div>

          <h1 style={styles.title}>매장등록</h1>
          <p style={styles.subtitle}>소속 매장의 코드를 입력해주세요</p>

          <form style={styles.form} onSubmit={handleSubmit}>

            {/* 매장 코드 */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>매장 코드</label>
              <div style={styles.inputInlineWrap}>
                <input
                  type="text"
                  placeholder="매장 코드를 입력해 주세요"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  style={{
                    ...styles.input,
                    paddingRight: '56px',
                    borderColor: focused ? '#2563eb' : '#d1d5db',
                    boxShadow:   focused ? '0 0 0 3px rgba(37,99,235,0.1)' : 'none',
                  }}
                />
                <button type="button" style={styles.inlineBtn}>인증</button>
              </div>
            </div>

            <button
              type="submit"
              style={styles.submitBtn}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
            >
              등록
            </button>

          </form>
        </div>
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerTop}>
            <div style={styles.footerLeft}>
              <div style={styles.footerLogoRow}>
                <img src={asset1} alt="UNDER PHASE" style={{ height: 20, objectFit: 'contain' }} />
                <a href="#" style={styles.footerNavLink}>이용약관</a>
                <a href="#" style={styles.footerNavLink}>개인정보처리방침</a>
                <a href="#" style={styles.footerNavLink}>사업자정보확인</a>
              </div>
              <div style={styles.footerCompanyInfo}>
                <div style={{ fontWeight: '700', color: '#374151' }}>언더페이즈</div>
                <div>대표 김도현</div>
                <div>주소 (47430) 부산광역시 부산진구 엄광로176, 23번번 307호</div>
              </div>
            </div>
            <div style={styles.footerRight}>
              <div style={styles.footerContactLine}><span style={styles.footerContactLabel}>고객센터</span> 070-1234-5678 (평일)</div>
              <div style={styles.footerContactLine}><span style={styles.footerContactLabel}>문의메일</span> help@yo-joung.com</div>
            </div>
          </div>
          <div style={styles.footerDivider}>
            <img src={underphaseLogo} alt="UNDERPHASE" style={styles.footerReservedImg} />
          </div>
        </div>
      </footer>

    </div>
  );
}
