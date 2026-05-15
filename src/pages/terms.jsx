import yojeongSymbol from '../images/yojeong_simbol.svg';

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif",
  },

  // Header
  header: {
    height: '60px',
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#ffffff',
  },
  headerInner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px 12px 0px 0px',
    isolation: 'isolate',
    width: '82px',
    height: '40px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    zIndex: 0,
    justifyContent: 'center',
  },
  logoInner: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  logoText: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1a1a',
    letterSpacing: '-0.3px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  },
  navLink: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  loginTextBtn: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px 12px',
  },
  ctaBtn: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#2563eb',
    border: 'none',
    borderRadius: '8px',
    padding: '9px 16px',
    cursor: 'pointer',
  },

  // Content
  main: {
    flex: 1,
    padding: '48px 0 80px',
  },
  inner: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '0 24px',
  },
  pageTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '20px',
  },
  intro: {
    fontSize: '13px',
    color: '#374151',
    lineHeight: '1.8',
    marginBottom: '32px',
  },
  section: {
    marginBottom: '28px',
  },
  sectionTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '12px',
  },
  paragraph: {
    fontSize: '13px',
    color: '#374151',
    lineHeight: '1.8',
    marginBottom: '10px',
  },
  ol: {
    paddingLeft: '20px',
    margin: '0 0 10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  li: {
    fontSize: '13px',
    color: '#374151',
    lineHeight: '1.8',
  },
  subOl: {
    paddingLeft: '20px',
    marginTop: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
};

export default function Terms() {
  return (
    <div style={styles.page}>
      {/* Header */}
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
            <button style={styles.loginTextBtn}>로그인</button>
            <button style={styles.ctaBtn}>무료로 도입하기</button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={styles.main}>
        <div style={styles.inner}>
          <h1 style={styles.pageTitle}>약관 제목</h1>

          <p style={styles.intro}>
            (주)아임웹(이하 '아임웹')은 이용자의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.<br />
            이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>제1조(제목)</h2>
            <ol style={styles.ol}>
              <li style={styles.li}>1항에 대한 내용</li>
              <li style={styles.li}>2항에 대한 내용</li>
              <li style={styles.li}>3항에 대한 내용</li>
            </ol>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>제2조(제목)</h2>
            <p style={styles.paragraph}>
              서울함으로 나영게 하면 됩니다. 서울함으로 나영할 때 이랑게 하면 됩니다. 서울함으로 나영할 때 이랑하게 하면 됩니다. 서울함으로 나영할 때 이랑게 하면 됩니다. 서울함으로 나영할 때 이랑하게 하면 됩니다. 서울함으로 나영할 때 이랑게 하면 됩니다. 서울함으로 나영할 때 이랗게 하면 됩니다. 서울함으로 나영할 때 이랗게 하면 됩니다. 서울함으로 나영할 때 이랗게 하면 됩니다. 서울함으로 나영할 때 이랑게 하면 됩니다. 서울함으로 나영할 때 이렇게 하면 됩니다. 서울함으로 나영할 때 이렇게 하면 됩니다. 서울함으로 나영할 때 이렇게 하면 됩니다. 서울함으로 나영할 때 이렇게 하면 됩니다.
            </p>
            <ol style={styles.ol}>
              <li style={styles.li}>
                안녕하세요
              </li>
              <li style={styles.li}>
                저는 김도현입니다
                <ol style={styles.subOl}>
                  <li style={styles.li}>안녕하세요</li>
                  <li style={styles.li}>저는 김도현입니다.</li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
