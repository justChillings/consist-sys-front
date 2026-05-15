import { useState } from 'react';
import yojeongSymbol from '../images/yojeong_simbol.svg';
import signUpIcon from '../images/sign-up.svg';
import underphaseLogo from '../images/UNDERPHASE_reserved.svg';
import asset1 from '../images/Asset1.png';

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

  // Main
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 20px',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainLogo: {
    width: '52px',
    height: '52px',
    marginBottom: '16px',
    objectFit: 'contain',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '6px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#6b7280',
    marginBottom: '24px',
    textAlign: 'center',
  },

  // Tabs
  tabRow: {
    display: 'flex',
    width: '100%',
    borderBottom: '1px solid #e5e7eb',
    marginBottom: '24px',
  },
  tabBtn: {
    flex: 1,
    padding: '10px 0',
    fontSize: '14px',
    fontWeight: '500',
    color: '#9ca3af',
    background: 'none',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  tabBtnActive: {
    flex: 1,
    padding: '10px 0',
    fontSize: '14px',
    fontWeight: '600',
    color: '#2563eb',
    background: 'none',
    border: 'none',
    borderBottom: '2px solid #2563eb',
    cursor: 'pointer',
    transition: 'all 0.15s',
    marginBottom: '-1px',
  },

  // Form
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
  labelRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#374151',
  },
  optionalBadge: {
    fontSize: '11px',
    color: '#9ca3af',
    fontWeight: '400',
  },
  inputWrap: {
    display: 'flex',
    gap: '8px',
    alignItems: 'stretch',
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
  verifyBtn: {
    flexShrink: 0,
    padding: '0 16px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#2563eb',
    backgroundColor: '#eff6ff',
    border: '1px solid #bfdbfe',
    borderRadius: '8px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },

  // Agreements
  agreementBox: {
    width: '100%',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '-4px',
  },
  agreementItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '11px 14px',
    borderBottom: '1px solid #f3f4f6',
  },
  agreementItemLast: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '11px 14px',
  },
  agreementLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  agreementCheckbox: {
    width: '15px',
    height: '15px',
    accentColor: '#2563eb',
    cursor: 'pointer',
    flexShrink: 0,
  },
  agreementLabel: {
    fontSize: '13px',
    color: '#374151',
    cursor: 'pointer',
  },
  agreementRequired: {
    color: '#2563eb',
    fontWeight: '600',
  },
  agreementOptional: {
    color: '#9ca3af',
    fontWeight: '600',
  },
  agreementDetail: {
    fontSize: '12px',
    color: '#9ca3af',
    textDecoration: 'none',
    cursor: 'pointer',
    flexShrink: 0,
  },

  // Submit
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
    transition: 'background-color 0.15s',
  },

  // Footer
  footer: {
    borderTop: '1px solid #e5e7eb',
    backgroundColor: '#f9fafb',
    padding: '32px 0 24px',
  },
  footerInner: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '0 24px',
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
    gap: '16px',
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
  footerDivider: {
    borderTop: '1px solid #e5e7eb',
    marginTop: '20px',
    paddingTop: '20px',
  },
  footerReservedImg: {
    height: '16px',
    opacity: 0.5,
  },
};

export default function SignUp() {
  const [tab, setTab] = useState('owner');
  const [form, setForm] = useState({ name: '', phone: '', email: '', password: '', passwordConfirm: '' });
  const [agreements, setAgreements] = useState({ terms: false, privacy: false, marketing: false });
  const [focusedField, setFocusedField] = useState(null);

  const getInputStyle = (fieldName) => ({
    ...styles.input,
    borderColor: focusedField === fieldName ? '#2563eb' : '#d1d5db',
    boxShadow: focusedField === fieldName ? '0 0 0 3px rgba(37,99,235,0.1)' : 'none',
  });

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const handleAgreement = (key) => setAgreements({ ...agreements, [key]: !agreements[key] });

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

      {/* Main */}
      <main style={styles.main}>
        <div style={styles.card}>
          <img src={signUpIcon} alt="회원가입" style={styles.mainLogo} />
          <h1 style={styles.title}>회원가입</h1>
          <p style={styles.subtitle}>매장 대표님이신가요, 직원이신가요?</p>

          {/* 탭 */}
          <div style={styles.tabRow}>
            <button
              style={tab === 'owner' ? styles.tabBtnActive : styles.tabBtn}
              onClick={() => setTab('owner')}
            >
              매장 대표
            </button>
            <button
              style={tab === 'staff' ? styles.tabBtnActive : styles.tabBtn}
              onClick={() => setTab('staff')}
            >
              매장 직원
            </button>
          </div>

          {/* 폼 */}
          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>이름</label>
              <input
                type="text"
                placeholder="홍길동"
                value={form.name}
                onChange={handleChange('name')}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('name')}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>휴대폰 번호</label>
              <div style={styles.inputWrap}>
                <input
                  type="tel"
                  placeholder="-없이 숫자만 입력해주세요요"
                  value={form.phone}
                  onChange={handleChange('phone')}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle('phone')}
                />
                <button type="button" style={styles.verifyBtn}>인증</button>
              </div>
            </div>

            <div style={styles.fieldGroup}>
              <div style={styles.labelRow}>
                <label style={styles.label}>이메일</label>
                <span style={styles.optionalBadge}>(선택)</span>
              </div>
              <input
                type="email"
                placeholder="example@yo-joung.com"
                value={form.email}
                onChange={handleChange('email')}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('email')}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>비밀번호</label>
              <input
                type="password"
                placeholder="영문, 숫자 조합 8~20자"
                value={form.password}
                onChange={handleChange('password')}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('password')}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>비밀번호 확인</label>
              <input
                type="password"
                placeholder="비밀번호를 한 번 더 입력해 주세요"
                value={form.passwordConfirm}
                onChange={handleChange('passwordConfirm')}
                onFocus={() => setFocusedField('passwordConfirm')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('passwordConfirm')}
              />
            </div>

            {/* 전속 동의 */}
            <div style={styles.agreementBox}>
              <div style={styles.agreementItem}>
                <div style={styles.agreementLeft}>
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreements.terms}
                    onChange={() => handleAgreement('terms')}
                    style={styles.agreementCheckbox}
                  />
                  <label htmlFor="terms" style={styles.agreementLabel}>
                    <span style={styles.agreementRequired}>(필수) </span>이용약관 동의
                  </label>
                </div>
                <a href="#" style={styles.agreementDetail}>내용</a>
              </div>
              <div style={styles.agreementItem}>
                <div style={styles.agreementLeft}>
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={agreements.privacy}
                    onChange={() => handleAgreement('privacy')}
                    style={styles.agreementCheckbox}
                  />
                  <label htmlFor="privacy" style={styles.agreementLabel}>
                    <span style={styles.agreementRequired}>(필수) </span>개인정보 수집 동의
                  </label>
                </div>
                <a href="#" style={styles.agreementDetail}>내용</a>
              </div>
              <div style={styles.agreementItemLast}>
                <div style={styles.agreementLeft}>
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={agreements.marketing}
                    onChange={() => handleAgreement('marketing')}
                    style={styles.agreementCheckbox}
                  />
                  <label htmlFor="marketing" style={styles.agreementLabel}>
                    <span style={styles.agreementOptional}>(선택) </span>마케팅 수신 동의
                  </label>
                </div>
                <a href="#" style={styles.agreementDetail}>내용</a>
              </div>
            </div>

            <button
              type="submit"
              style={styles.submitBtn}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#2563eb')}
            >
              가입 완료
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
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
              <div style={styles.footerContactLine}>
                <span style={styles.footerContactLabel}>고객센터</span> 070-1234-5678 (평일)
              </div>
              <div style={styles.footerContactLine}>
                <span style={styles.footerContactLabel}>문의메일</span> help@yo-joung.com
              </div>
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
