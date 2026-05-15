import { useState } from 'react';
import yojeongSymbol from '../images/yojeong_simbol.svg';
import passwordIcon from '../images/find_password.svg';
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
    padding: '60px 20px',
  },
  card: {
    width: '100%',
    maxWidth: '380px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainIcon: {
    width: '64px',
    height: '64px',
    marginBottom: '20px',
    objectFit: 'contain',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '8px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '32px',
    textAlign: 'center',
    lineHeight: '1.6',
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
  label: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#374151',
  },
  inputWrap: {
    display: 'flex',
    gap: '8px',
    alignItems: 'stretch',
  },
  inputInlineWrap: {
    position: 'relative',
    width: '100%',
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
  inlineVerifyBtn: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '13px',
    fontWeight: '600',
    background: 'none',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  actionBtn: {
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
  helperText: {
    fontSize: '12px',
    color: '#6b7280',
    marginTop: '2px',
  },
  timerText: {
    fontSize: '12px',
    color: '#ef4444',
    marginTop: '2px',
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
    transition: 'background-color 0.15s',
    marginTop: '4px',
  },
  backLink: {
    marginTop: '16px',
    fontSize: '13px',
    color: '#9ca3af',
    textDecoration: 'none',
    cursor: 'pointer',
    textAlign: 'center',
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

// 단계별 콘텐츠 설정
const STEP_CONFIG = {
  1: {
    title: '본인 확인이 필요해요',
    subtitle: '확인 후 새 비밀번호를 설정할 수 있어요',
  },
  2: {
    title: '인증번호를 입력해주세요',
    subtitle: '휴대폰으로 전송된\n6자리 인증번호를 입력해주세요',
  },
  3: {
    title: '새 비밀번호를 설정해요',
    subtitle: '안전한 비밀번호로\n계정을 보호하세요',
  },
};

export default function FindPassword() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const [codeSent, setCodeSent] = useState(false);

  const getInputStyle = (fieldName) => ({
    ...styles.input,
    borderColor: focusedField === fieldName ? '#2563eb' : '#d1d5db',
    boxShadow: focusedField === fieldName ? '0 0 0 3px rgba(37,99,235,0.1)' : 'none',
  });

  const handleSendCode = () => {
    if (!phone) return;
    setCodeSent(true);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (step === 1 && codeSent) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) {
      // 비밀번호 변경 완료 처리
      alert('비밀번호가 변경되었어요!');
    }
  };

  const config = STEP_CONFIG[step];

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
          <img src={passwordIcon} alt="비밀번호 찾기" style={styles.mainIcon} />
          <h1 style={styles.title}>{config.title}</h1>
          <p style={styles.subtitle}>{config.subtitle}</p>

          <form style={styles.form} onSubmit={handleVerify}>

            {/* Step 1: 휴대폰 번호 입력 */}
            {step === 1 && (
              <div style={styles.fieldGroup}>
                <label style={styles.label}>휴대폰 번호</label>
                <div style={styles.inputInlineWrap}>
                  <input
                    type="tel"
                    placeholder="열 자리 숫자만 입력해주세요"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...getInputStyle('phone'),
                      paddingRight: '56px',
                    }}
                    maxLength={11}
                  />
                  <button
                    type="button"
                    style={{
                      ...styles.inlineVerifyBtn,
                      color: phone.length >= 10 ? '#2563eb' : '#d1d5db',
                      cursor: phone.length >= 10 ? 'pointer' : 'default',
                    }}
                    onClick={handleSendCode}
                    disabled={phone.length < 10}
                  >
                    {codeSent ? '재전송' : '인증'}
                  </button>
                </div>
                {codeSent && (
                  <span style={styles.helperText}>인증번호가 전송되었어요.</span>
                )}
              </div>
            )}

            {/* Step 2: 인증번호 입력 */}
            {step === 2 && (
              <div style={styles.fieldGroup}>
                <label style={styles.label}>인증번호</label>
                <div style={styles.inputWrap}>
                  <input
                    type="text"
                    placeholder="6자리 인증번호 입력"
                    value={verifyCode}
                    onChange={(e) => setVerifyCode(e.target.value)}
                    onFocus={() => setFocusedField('code')}
                    onBlur={() => setFocusedField(null)}
                    style={getInputStyle('code')}
                    maxLength={6}
                  />
                  <button
                    type="button"
                    style={styles.actionBtn}
                    onClick={() => setCodeSent(true)}
                  >
                    재전송
                  </button>
                </div>
                <span style={styles.timerText}>03:00 내에 입력해주세요</span>
              </div>
            )}

            {/* Step 3: 새 비밀번호 설정 */}
            {step === 3 && (
              <>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>새 비밀번호</label>
                  <input
                    type="password"
                    placeholder="영문, 숫자 조합 8~20자"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    onFocus={() => setFocusedField('newPassword')}
                    onBlur={() => setFocusedField(null)}
                    style={getInputStyle('newPassword')}
                  />
                </div>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>새 비밀번호 확인</label>
                  <input
                    type="password"
                    placeholder="비밀번호를 한 번 더 입력해 주세요"
                    value={newPasswordConfirm}
                    onChange={(e) => setNewPasswordConfirm(e.target.value)}
                    onFocus={() => setFocusedField('newPasswordConfirm')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...getInputStyle('newPasswordConfirm'),
                      borderColor:
                        newPasswordConfirm && newPassword !== newPasswordConfirm
                          ? '#ef4444'
                          : focusedField === 'newPasswordConfirm'
                          ? '#2563eb'
                          : '#d1d5db',
                    }}
                  />
                  {newPasswordConfirm && newPassword !== newPasswordConfirm && (
                    <span style={{ fontSize: '12px', color: '#ef4444' }}>
                      비밀번호가 일치하지 않아요
                    </span>
                  )}
                </div>
              </>
            )}

            {step > 1 && (
              <button
                type="submit"
                style={styles.submitBtn}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#2563eb')}
              >
                {step === 2 ? '인증 확인' : '비밀번호 변경'}
              </button>
            )}
          </form>

          <a
            href="#"
            style={styles.backLink}
            onClick={(e) => {
              e.preventDefault();
              if (step > 1) setStep(step - 1);
            }}
          >
            {step > 1 ? '이전으로' : '로그인으로 돌아가기'}
          </a>
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
