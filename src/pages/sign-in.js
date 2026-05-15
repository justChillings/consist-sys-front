import { useState } from 'react';

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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    height: '60px',
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#ffffff',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px 12px 0px 0px',
    isolation: 'isolate',
    margin: '0 auto 0 0',
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
    gap: '32px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
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

  // Main
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
  },
  card: {
    width: '100%',
    maxWidth: '380px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainLogo: {
    width: '52px',
    height: '52px',
    marginBottom: '20px',
  },
  greeting: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '6px',
    textAlign: 'center',
  },
  subGreeting: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '32px',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#374151',
  },
  input: {
    width: '100%',
    padding: '11px 14px',
    fontSize: '14px',
    color: '#111827',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    transition: 'border-color 0.15s',
  },
  optionsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '-4px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: '#6b7280',
    cursor: 'pointer',
  },
  checkbox: {
    width: '15px',
    height: '15px',
    accentColor: '#2563eb',
    cursor: 'pointer',
  },
  forgotLink: {
    fontSize: '13px',
    color: '#6b7280',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  submitBtn: {
    width: '100%',
    padding: '13px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#2563eb',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '4px',
    transition: 'background-color 0.15s',
  },
  signupRow: {
    marginTop: '20px',
    fontSize: '13px',
    color: '#9ca3af',
    textAlign: 'center',
  },
  signupLink: {
    color: '#2563eb',
    fontWeight: '500',
    textDecoration: 'none',
    cursor: 'pointer',
  },

  // Footer
  footer: {
    borderTop: '1px solid #e5e7eb',
    backgroundColor: '#f9fafb',
    padding: '32px 60px 24px',
  },
  footerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  footerLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  footerLogoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  footerLogoText: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#374151',
    letterSpacing: '0.5px',
  },
  footerNav: {
    display: 'flex',
    gap: '20px',
  },
  footerNavLink: {
    fontSize: '12px',
    color: '#6b7280',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  footerCompanyInfo: {
    fontSize: '12px',
    color: '#9ca3af',
    lineHeight: '1.8',
  },
  footerRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '6px',
  },
  footerContactLine: {
    fontSize: '12px',
    color: '#6b7280',
    textAlign: 'right',
  },
  footerContactLabel: {
    fontWeight: '600',
    color: '#374151',
  },
  footerBottom: {
    borderTop: '1px solid #e5e7eb',
    paddingTop: '16px',
    fontSize: '12px',
    color: '#9ca3af',
    textAlign: 'center',
  },
};

// 요정 로고 아이콘 SVG (파란 원형 아이콘)
function LogoIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#2563eb" strokeWidth="3" fill="none" />
      <circle cx="16" cy="16" r="7" stroke="#2563eb" strokeWidth="2.5" fill="none" />
      <circle cx="16" cy="16" r="2.5" fill="#2563eb" />
    </svg>
  );
}

// 언더페이즈 푸터 로고
function FooterLogoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#374151" strokeWidth="3" fill="none" />
      <circle cx="16" cy="16" r="7" stroke="#374151" strokeWidth="2.5" fill="none" />
      <circle cx="16" cy="16" r="2.5" fill="#374151" />
    </svg>
  );
}

export default function SignIn() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [keepLogin, setKeepLogin] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const getInputStyle = (fieldName) => ({
    ...styles.input,
    borderColor: focusedField === fieldName ? '#2563eb' : '#d1d5db',
    boxShadow: focusedField === fieldName ? '0 0 0 3px rgba(37,99,235,0.1)' : 'none',
  });

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <a href="/" style={styles.logoInner}>
            <LogoIcon size={26} />
            <span style={styles.logoText}>요정</span>
          </a>
        </div>

        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>서비스 소개</a>
          <a href="#" style={styles.navLink}>이용요금</a>
          <a href="#" style={styles.navLink}>고객지원</a>
        </nav>

        <div style={styles.headerRight}>
          <button style={styles.loginTextBtn}>로그인</button>
          <button style={styles.ctaBtn}>무료로 도입하기</button>
        </div>
      </header>

      {/* Main */}
      <main style={styles.main}>
        <div style={styles.card}>
          <div style={styles.mainLogo}>
            <LogoIcon size={52} />
          </div>

          <h1 style={styles.greeting}>반가워요!</h1>
          <p style={styles.subGreeting}>핸드폰 상담이 훨씬 쉬워질 거예요</p>

          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>휴대폰 번호</label>
              <input
                type="tel"
                placeholder="-없이 숫자만 입력해주세요"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('phone')}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>비밀번호</label>
              <input
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('password')}
              />
            </div>

            <div style={styles.optionsRow}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={keepLogin}
                  onChange={(e) => setKeepLogin(e.target.checked)}
                  style={styles.checkbox}
                />
                로그인 상태 유지
              </label>
              <a href="#" style={styles.forgotLink}>비밀번호를 잊으셨나요?</a>
            </div>

            <button
              type="submit"
              style={styles.submitBtn}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#2563eb')}
            >
              로그인
            </button>
          </form>

          <p style={styles.signupRow}>
            아직 요정 회원이 아니신가요?{' '}
            <a href="#" style={styles.signupLink}>지금 가입하기</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerTop}>
          <div style={styles.footerLeft}>
            <div style={styles.footerLogoRow}>
              <FooterLogoIcon />
              <span style={styles.footerLogoText}>UNDER PHASE</span>
            </div>
            <div style={styles.footerNav}>
              <a href="#" style={styles.footerNavLink}>이용약관</a>
              <a href="#" style={styles.footerNavLink}>개인정보처리방침</a>
              <a href="#" style={styles.footerNavLink}>청소년정보보호책임</a>
              <a href="#" style={styles.footerNavLink}>사업자정보확인</a>
            </div>
            <div style={styles.footerCompanyInfo}>
              <div>언더페이즈</div>
              <div>대표 김도현</div>
              <div>주소 147343 부산광역시 부산진구 중앙대로176,2관 387호</div>
            </div>
          </div>

          <div style={styles.footerRight}>
            <div style={styles.footerContactLine}>
              <span style={styles.footerContactLabel}>고객센터</span> 070-1234-5678 (평일)
            </div>
            <div style={styles.footerContactLine}>
              <span style={styles.footerContactLabel}>문의메일</span> help@yo-joung.com
            </div>
          </div>
        </div>

        <div style={styles.footerBottom}>
          © 2026 UNDERPHASE All rights reserved.
        </div>
      </footer>
    </div>
  );
}
