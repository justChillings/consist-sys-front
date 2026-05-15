import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import yojeongSymbol from '../images/yojeong_simbol.svg';
import completePasswordIcon from '../images/complete_password.svg';
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
  errorText: {
    fontSize: '12px',
    color: '#ef4444',
    marginTop: '2px',
  },
  // Modal
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalBox: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '32px 28px 24px',
    width: '100%',
    maxWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  },
  modalTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
  },
  modalDesc: {
    fontSize: '13px',
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: '1.6',
    marginBottom: '4px',
  },
  modalBtn: {
    width: '100%',
    padding: '12px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#2563eb',
    border: 'none',
    borderRadius: '8px',
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

export default function CompleteFindPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getInputStyle = (fieldName) => ({
    ...styles.input,
    borderColor: focusedField === fieldName ? '#2563eb' : '#d1d5db',
    boxShadow: focusedField === fieldName ? '0 0 0 3px rgba(37,99,235,0.1)' : 'none',
  });

  const passwordMismatch = newPasswordConfirm.length > 0 && newPassword !== newPasswordConfirm;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || passwordMismatch) return;
    setShowModal(true);
  };

  return (
    <div style={styles.page}>
      {/* 비밀번호 변경 완료 모달 */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <p style={styles.modalTitle}>비밀번호 변경 완료</p>
            <p style={styles.modalDesc}>비밀번호가 변경되었습니다.</p>
            <button
              style={styles.modalBtn}
              onClick={() => navigate('/main')}
            >
              확인
            </button>
          </div>
        </div>
      )}
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
          <img src={completePasswordIcon} alt="새 비밀번호 설정" style={styles.mainIcon} />
          <h1 style={styles.title}>새 비밀번호 설정</h1>
          <p style={styles.subtitle}>새 비밀번호를 입력해주세요</p>

          <form style={styles.form} onSubmit={handleSubmit}>
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
                  borderColor: passwordMismatch ? '#ef4444' : focusedField === 'newPasswordConfirm' ? '#2563eb' : '#d1d5db',
                  boxShadow: passwordMismatch ? '0 0 0 3px rgba(239,68,68,0.1)' : focusedField === 'newPasswordConfirm' ? '0 0 0 3px rgba(37,99,235,0.1)' : 'none',
                }}
              />
              {passwordMismatch && (
                <span style={styles.errorText}>비밀번호가 일치하지 않아요</span>
              )}
            </div>

            <button
              type="submit"
              style={{
                ...styles.submitBtn,
                opacity: !newPassword || passwordMismatch ? 0.5 : 1,
                cursor: !newPassword || passwordMismatch ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={(e) => {
                if (newPassword && !passwordMismatch) e.target.style.backgroundColor = '#1d4ed8';
              }}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#2563eb')}
            >
              비밀번호 변경
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
