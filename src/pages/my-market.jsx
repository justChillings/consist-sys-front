import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import yojeongSymbol  from '../images/yojeong_simbol.svg';
import personalIcon   from '../images/personal.svg';
import underphaseLogo from '../images/UNDERPHASE_reserved.svg';
import asset1         from '../images/Asset1.png';
import styles from '../assets/myMarketStyles';

// ── 플랜별 배지 색상 ──────────────────────────────────────
const PLAN_COLOR = { Pro: '#2563eb', Basic: '#0891b2', Free: '#9ca3af' };

// ── 목 데이터 (서버 연결 시 교체) ─────────────────────────
const MOCK_STORES = [
  { id: 1, name: '최저가 휴대폰 가야 동의대점', plan: 'Pro',   rep: '대표명', storePhone: '매장전화번호', personalPhone: '개인 전화번호' },
  { id: 2, name: '최저가 휴대폰 가야 동의대점', plan: 'Basic', rep: '대표명', storePhone: '매장전화번호', personalPhone: '개인 전화번호' },
  { id: 3, name: '최저가 휴대폰 가야 동의대점', plan: 'Free',  rep: '대표명', storePhone: '매장전화번호', personalPhone: '개인 전화번호' },
];

// ── 썸네일 이미지 플레이스홀더 아이콘 ────────────────────
function ThumbnailPlaceholder() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

// ── 빈 상태 아이콘 ────────────────────────────────────────
function StoreEmptyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h18v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9z" />
      <path d="M5 9L6.5 4h11L19 9" />
      <path d="M6 13v6h12v-6" />
    </svg>
  );
}

// ────────────────────────────────────────────────────────────
export default function MyMarket() {
  const navigate = useNavigate();
  const [stores] = useState(MOCK_STORES);
  const [showProfile, setShowProfile] = useState(false);

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
        <div style={styles.inner}>

          {/* 타이틀 */}
          <div style={styles.titleRow}>
            <h1 style={styles.pageTitle}>내 매장</h1>
            <button style={styles.addBtn} onClick={() => navigate('/register-market')}>+</button>
          </div>

          {/* ── 매장 없음 ─────────────────────────────── */}
          {stores.length === 0 && (
            <div style={styles.emptyWrap}>
              <div style={styles.emptyPopup}>
                <StoreEmptyIcon />
                <p style={styles.emptyTitle}>등록된 매장이 없어요</p>
                <p style={styles.emptyDesc}>매장을 등록하고 요정을 이용해 보세요</p>
                <button
                  style={styles.emptyBtn}
                  onClick={() => navigate('/register-market')}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
                >
                  + 매장 등록하기
                </button>
              </div>
            </div>
          )}

          {/* ── 매장 목록 ─────────────────────────────── */}
          {stores.length > 0 && (
            <div style={styles.storeList}>
              {stores.map((store, i) => (
                <div key={store.id} style={styles.storeItem}>
                  {/* 번호 */}
                  <span style={styles.storeNum}>{i + 1}</span>

                  {/* 썸네일 */}
                  <div style={styles.storeThumbnail}>
                    <ThumbnailPlaceholder />
                  </div>

                  {/* 정보 */}
                  <div style={styles.storeInfo}>
                    <div style={styles.storeNameRow}>
                      <span style={styles.storeName}>{store.name}</span>
                      <span style={{ ...styles.planBadge, backgroundColor: PLAN_COLOR[store.plan] ?? '#9ca3af' }}>
                        {store.plan}
                      </span>
                    </div>
                    <p style={styles.storeSubInfo}>
                      {store.rep} / {store.storePhone} / {store.personalPhone}
                    </p>
                  </div>

                  {/* 버튼 */}
                  <button
                    style={styles.visitBtn}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
                  >
                    상담 시스템 이동
                  </button>
                </div>
              ))}
            </div>
          )}

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
