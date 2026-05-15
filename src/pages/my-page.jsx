import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import yojeongSymbol  from '../images/yojeong_simbol.svg';
import personalIcon   from '../images/personal.svg';
import personal2Icon  from '../images/personal2.svg';
import underphaseLogo from '../images/UNDERPHASE_reserved.svg';
import asset1         from '../images/Asset1.png';

import styles from '../assets/myPageStyles';
import {
  SUBSCRIPTIONS, ALL_PAYMENTS, ITEMS_PER_PAGE, TOTAL_PAGES,
  YEARS, MONTHS, getMaxDays, INITIAL_CARDS,
} from '../assets/myPageData';

// ────────────────────────────────────────────────────────────
export default function MyPage() {
  const navigate = useNavigate();

  // ── 탭 ──────────────────────────────────────────────────
  const [tab, setTab] = useState('info');

  // ── 정보수정 폼 ─────────────────────────────────────────
  const [form, setForm] = useState({
    name: '홍길동', phone: '', password: '',
    birthYear: '', birthMonth: '', birthDay: '',
    email: '', referralCode: 'DEGFE1', marketing: true,
  });
  const [focusedField, setFocusedField]   = useState(null);
  const [phoneError,   setPhoneError]     = useState('');
  const [phoneModal,   setPhoneModal]     = useState(false);
  const [infoModal,    setInfoModal]      = useState(false);

  // ── 프로필 사진 ─────────────────────────────────────────
  const [profileHovered, setProfileHovered] = useState(false);
  const [profileImage,   setProfileImage]   = useState(null);
  const fileInputRef = useRef(null);

  // ── 결제내역 탭 ─────────────────────────────────────────
  const [payPage,          setPayPage]         = useState(1);
  const [selectedPayment,  setSelectedPayment] = useState(null);

  // ── 결제수단 탭 ─────────────────────────────────────────
  const [cards,             setCards]            = useState(INITIAL_CARDS);
  const [openMenuId,        setOpenMenuId]       = useState(null);
  const [showProfile,       setShowProfile]      = useState(false);
  const [changeDefaultModal,setChangeDefaultModal] = useState(null);
  const [deleteModal,       setDeleteModal]      = useState(null);
  const [toast,             setToast]            = useState(null);

  // ── 헬퍼 ────────────────────────────────────────────────
  const handleChange     = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const handleCopy       = () => navigator.clipboard.writeText(form.referralCode);
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };
  const getInputStyle = (fieldName) => ({
    ...styles.inputEditable,
    borderColor: focusedField === fieldName ? '#2563eb' : '#d1d5db',
    boxShadow:   focusedField === fieldName ? '0 0 0 3px rgba(37,99,235,0.1)' : 'none',
  });

  const maxDays = getMaxDays(Number(form.birthYear) || null, Number(form.birthMonth) || null);
  const DAYS    = Array.from({ length: maxDays }, (_, i) => i + 1);

  const currentPayments = ALL_PAYMENTS.slice((payPage - 1) * ITEMS_PER_PAGE, payPage * ITEMS_PER_PAGE);

  // ── 결제수단 핸들러 ─────────────────────────────────────
  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };
  const handleSetDefault  = (card) => { setOpenMenuId(null); setChangeDefaultModal(card); };
  const handleDeleteCard  = (card) => { setOpenMenuId(null); setDeleteModal(card); };
  const confirmSetDefault = () => {
    setCards(prev => prev.map(c => ({
      ...c,
      isDefault:    c.id === changeDefaultModal.id,
      isSubscribed: c.id === changeDefaultModal.id,
    })));
    setChangeDefaultModal(null);
  };
  const confirmDelete = () => {
    if (deleteModal.isSubscribed) {
      setDeleteModal(null);
      showToast('정기결제 중인 카드는 삭제 불가합니다', 'error');
    } else {
      setCards(prev => prev.filter(c => c.id !== deleteModal.id));
      setDeleteModal(null);
      showToast('카드가 정상적으로 삭제되었습니다', 'success');
    }
  };

  // ────────────────────────────────────────────────────────
  return (
    <div style={styles.page}>

      {/* ── 오버레이 / 모달 / 토스트 ─────────────────────── */}

      {phoneModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <p style={styles.modalTitle}>변경 완료</p>
            <button style={styles.modalBtn} onClick={() => setPhoneModal(false)}>확인</button>
          </div>
        </div>
      )}

      {infoModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <p style={styles.modalTitle}>수정이 완료되었습니다.</p>
            <button style={styles.modalBtn} onClick={() => { setInfoModal(false); navigate('/main'); }}>완료</button>
          </div>
        </div>
      )}

      {openMenuId !== null && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50 }} onClick={() => setOpenMenuId(null)} />
      )}

      {toast && (
        <div style={{ position: 'fixed', top: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 2000 }}>
          <div style={{ ...styles.toastItem, ...(toast.type === 'success' ? styles.toastSuccess : styles.toastError) }}>
            {toast.type === 'success' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#22c55e" />
                <polyline points="8 12 11 15 16 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#ef4444" />
                <line x1="12" y1="8" x2="12" y2="13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="16.5" r="1" fill="#ffffff" />
              </svg>
            )}
            {toast.message}
          </div>
        </div>
      )}

      {changeDefaultModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.confirmModal}>
            <p style={styles.confirmTitle}>기본 결제카드를 변경할까요?</p>
            <p style={styles.confirmDesc}>정기결제에 등록된 카드는 별도로 결제수단을 변경해 주세요.</p>
            <div style={styles.confirmBtnRow}>
              <button style={styles.confirmCancelBtn} onClick={() => setChangeDefaultModal(null)}>취소</button>
              <button style={{ ...styles.confirmActionBtn, color: '#2563eb' }} onClick={confirmSetDefault}>등록</button>
            </div>
          </div>
        </div>
      )}

      {deleteModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.confirmModal}>
            <p style={styles.confirmTitle}>카드를 삭제할까요?</p>
            <p style={styles.confirmDesc}>정기결제에 등록된 카드는 삭제 전 정기결제를 해지해주세요.</p>
            <div style={styles.confirmBtnRow}>
              <button style={styles.confirmCancelBtn} onClick={() => setDeleteModal(null)}>취소</button>
              <button style={{ ...styles.confirmActionBtn, color: '#ef4444' }} onClick={confirmDelete}>삭제</button>
            </div>
          </div>
        </div>
      )}

      {selectedPayment && (
        <div style={styles.modalOverlay} onClick={() => setSelectedPayment(null)}>
          <div style={styles.payDetailBox} onClick={(e) => e.stopPropagation()}>
            <div style={styles.payDetailContent}>
              <div style={styles.payDetailHeader}>
                <span style={styles.payDetailTitle}>결제내역</span>
                <span style={styles.payDetailBadge}>{selectedPayment.status}</span>
                <button style={styles.payDetailClose} onClick={() => setSelectedPayment(null)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <p style={styles.payDetailOrderNo}>({selectedPayment.orderNo})</p>
              <div style={styles.payDetailDivider} />
              <div style={styles.payDetailGrid}>
                <div style={styles.payDetailCell}><span style={styles.payDetailLabel}>결제일</span><span style={styles.payDetailValue}>{selectedPayment.date}</span></div>
                <div style={styles.payDetailCell}><span style={styles.payDetailLabel}>상품명</span><span style={styles.payDetailValue}>{selectedPayment.planName}</span></div>
                <div style={styles.payDetailCell}><span style={styles.payDetailLabel}>결제금액</span><span style={styles.payDetailValue}>{selectedPayment.amountFull}</span></div>
                <div style={styles.payDetailCell}><span style={styles.payDetailLabel}>할부개월</span><span style={styles.payDetailValue}>{selectedPayment.installment}</span></div>
                <div style={styles.payDetailCellFull}><span style={styles.payDetailLabel}>결제카드</span><span style={styles.payDetailValue}>{selectedPayment.card}</span></div>
              </div>
            </div>
            <button style={styles.receiptBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              카드 영수증 보기
            </button>
          </div>
        </div>
      )}

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
                      <div style={styles.profileDropName}>{form.name}</div>
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
          <h1 style={styles.pageTitle}>마이페이지</h1>

          {/* 탭 */}
          <div style={styles.tabRow}>
            <button style={tab === 'info'    ? styles.tabBtnActive : styles.tabBtn} onClick={() => setTab('info')}>정보수정</button>
            <button style={tab === 'payment' ? styles.tabBtnActive : styles.tabBtn} onClick={() => setTab('payment')}>결제내역</button>
            <button style={tab === 'method'  ? styles.tabBtnActive : styles.tabBtn} onClick={() => setTab('method')}>결제수단</button>
          </div>

          {/* ── 정보수정 탭 ─────────────────────────────── */}
          {tab === 'info' && (
            <>
              <div style={styles.profileWrap}>
                <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleProfileChange} />
                <img
                  src={profileImage ? profileImage : profileHovered ? personal2Icon : personalIcon}
                  alt="프로필"
                  style={{ ...styles.profileImg, opacity: profileHovered ? 0.85 : 1 }}
                  onMouseEnter={() => setProfileHovered(true)}
                  onMouseLeave={() => setProfileHovered(false)}
                  onClick={() => fileInputRef.current.click()}
                />
                <span style={styles.profileName}>{form.name}</span>
              </div>

              <form style={styles.form} onSubmit={(e) => e.preventDefault()}>

                <div style={styles.fieldGroup}>
                  <label style={styles.label}>이름</label>
                  <input type="text" value={form.name} readOnly style={styles.inputBase} />
                </div>

                <div style={styles.fieldGroup}>
                  <label style={styles.label}>휴대폰 번호</label>
                  <div style={styles.inputInlineWrap}>
                    <input
                      type="tel"
                      placeholder="010-1234-5678"
                      value={form.phone}
                      onChange={(e) => {
                        const val = e.target.value;
                        setForm({ ...form, phone: val });
                        setPhoneError(/[^0-9\-]/.test(val) ? '올바르지 않은 형식입니다.' : '');
                      }}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...getInputStyle('phone'),
                        paddingRight: '56px',
                        borderColor: phoneError ? '#ef4444' : focusedField === 'phone' ? '#2563eb' : '#d1d5db',
                        boxShadow:   phoneError ? '0 0 0 3px rgba(239,68,68,0.1)' : focusedField === 'phone' ? '0 0 0 3px rgba(37,99,235,0.1)' : 'none',
                      }}
                    />
                    <button
                      type="button"
                      style={{ ...styles.inlineActionBtn, color: phoneError ? '#d1d5db' : '#2563eb', cursor: phoneError ? 'default' : 'pointer' }}
                      disabled={!!phoneError}
                      onClick={() => { if (!phoneError) setPhoneModal(true); }}
                    >수정</button>
                  </div>
                  {phoneError && <span style={styles.errorText}>{phoneError}</span>}
                </div>

                <div style={styles.fieldGroup}>
                  <label style={styles.label}>비밀번호</label>
                  <div style={styles.inputInlineWrap}>
                    <input
                      type="password"
                      placeholder="새 비밀번호를 입력해주세요"
                      value={form.password}
                      onChange={handleChange('password')}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      style={{ ...getInputStyle('password'), paddingRight: '56px' }}
                    />
                    <button type="button" style={styles.inlineActionBtn} onClick={() => navigate('/complete-find-password')}>변경</button>
                  </div>
                </div>

                <div style={styles.fieldGroup}>
                  <div style={styles.labelRow}>
                    <label style={styles.label}>생년월일</label>
                    <span style={styles.optionalBadge}>(선택)</span>
                  </div>
                  <div style={styles.birthRow}>
                    <select value={form.birthYear}  onChange={(e) => setForm({ ...form, birthYear:  e.target.value, birthDay: '' })} style={{ ...styles.birthSelect, borderColor: form.birthYear  ? '#2563eb' : '#d1d5db', color: form.birthYear  ? '#111827' : '#9ca3af' }}>
                      <option value="">YYYY</option>
                      {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                    <select value={form.birthMonth} onChange={(e) => setForm({ ...form, birthMonth: e.target.value, birthDay: '' })} style={{ ...styles.birthSelect, borderColor: form.birthMonth ? '#2563eb' : '#d1d5db', color: form.birthMonth ? '#111827' : '#9ca3af' }}>
                      <option value="">MM</option>
                      {MONTHS.map(m => <option key={m} value={m}>{String(m).padStart(2, '0')}</option>)}
                    </select>
                    <select value={form.birthDay}   onChange={(e) => setForm({ ...form, birthDay:   e.target.value })}               style={{ ...styles.birthSelect, borderColor: form.birthDay   ? '#2563eb' : '#d1d5db', color: form.birthDay   ? '#111827' : '#9ca3af' }}>
                      <option value="">DD</option>
                      {DAYS.map(d => <option key={d} value={d}>{String(d).padStart(2, '0')}</option>)}
                    </select>
                  </div>
                </div>

                <div style={styles.fieldGroup}>
                  <div style={styles.labelRow}>
                    <label style={styles.label}>이메일</label>
                    <span style={styles.optionalBadge}>(선택)</span>
                  </div>
                  <input type="email" placeholder="example@yo-joung.com" value={form.email} onChange={handleChange('email')} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} style={getInputStyle('email')} />
                </div>

                <div style={styles.fieldGroup}>
                  <label style={styles.label}>추천인 코드</label>
                  <div style={styles.inputInlineWrap}>
                    <input type="text" value={form.referralCode} readOnly style={{ ...styles.inputBase, paddingRight: '44px', color: '#9ca3af' }} />
                    <button type="button" style={styles.inlineActionBtn} onClick={handleCopy} title="복사">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div style={styles.fieldGroup}>
                  <label style={styles.label}>수신설정</label>
                  <div style={{ ...styles.receiveRow, cursor: 'pointer' }} onClick={() => setForm({ ...form, marketing: !form.marketing })}>
                    <div style={styles.receiveLeft}>
                      {form.marketing ? (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                      )}
                      <span style={{ color: form.marketing ? '#374151' : '#9ca3af' }}>
                        (선택) 마케팅{' '}
                        <span style={{ fontWeight: '600', color: form.marketing ? '#2563eb' : '#9ca3af' }}>
                          {form.marketing ? '수신동의' : '수신비동의'}
                        </span>
                      </span>
                    </div>
                    <a href="#" style={styles.moreLink} onClick={(e) => e.stopPropagation()}>더보기</a>
                  </div>
                </div>

                <button
                  type="submit"
                  style={styles.submitBtn}
                  onClick={() => setInfoModal(true)}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#2563eb')}
                >정보수정</button>
              </form>

              <a href="#" style={styles.withdrawLink}>회원탈퇴</a>
            </>
          )}

          {/* ── 결제내역 탭 ─────────────────────────────── */}
          {tab === 'payment' && (
            <div style={{ width: '100%' }}>
              <div style={styles.paySection}>
                <h2 style={styles.paySectionTitle}>정기결제</h2>
                {SUBSCRIPTIONS.length === 0 ? (
                  <div style={styles.emptyBox}>예정된 정기결제가 없습니다</div>
                ) : (
                  SUBSCRIPTIONS.map((sub, i) => (
                    <div key={i} style={styles.subscriptionCard}>
                      <div style={styles.subCardTop}>
                        <div style={styles.subCardLeft}>
                          <span style={styles.subName}>{sub.name}</span>
                          <span style={{ ...styles.planBadge, backgroundColor: sub.plan === 'Pro' ? '#2563eb' : '#7c3aed' }}>{sub.plan}</span>
                        </div>
                        <button style={styles.manageBtn}>결제 관리 &gt;</button>
                      </div>
                      <div style={styles.subCardInfo}>
                        <span>결제 진보 {sub.card}</span>
                        <span>다음 결제일 {sub.nextDate} ({sub.amount})</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div style={styles.paySection}>
                <h2 style={styles.paySectionTitle}>결제내역</h2>
                {ALL_PAYMENTS.length === 0 ? (
                  <div style={styles.emptyBox}>결제내역이 없어요.</div>
                ) : (
                  <>
                    <div style={styles.tableWrap}>
                      <div style={styles.tableHeader}>
                        <span style={{ flex: '0 0 88px' }}>결제일</span>
                        <span style={{ flex: 1 }}>상품명</span>
                        <span style={{ flex: '0 0 80px', textAlign: 'right' }}>금액</span>
                        <span style={{ flex: '0 0 36px' }} />
                      </div>
                      {currentPayments.map((p) => (
                        <div key={p.id} style={styles.tableRow}>
                          <span style={{ flex: '0 0 88px', color: '#6b7280' }}>{p.date}</span>
                          <span style={{ flex: 1 }}>{p.product}</span>
                          <span style={{ flex: '0 0 80px', textAlign: 'right' }}>{p.amount}</span>
                          <span style={{ flex: '0 0 36px', textAlign: 'right' }}>
                            <a href="#" style={styles.detailLink} onClick={(e) => { e.preventDefault(); setSelectedPayment(p); }}>상세</a>
                          </span>
                        </div>
                      ))}
                    </div>
                    {TOTAL_PAGES > 1 && (
                      <div style={styles.pagination}>
                        <button style={{ ...styles.pageBtnNav, opacity: payPage === 1 ? 0.3 : 1 }} onClick={() => setPayPage(p => Math.max(1, p - 1))} disabled={payPage === 1}>&lt;</button>
                        {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(n => (
                          <button key={n} style={{ ...styles.pageBtn, ...(payPage === n ? styles.pageBtnActive : {}) }} onClick={() => setPayPage(n)}>{n}</button>
                        ))}
                        <button style={{ ...styles.pageBtnNav, opacity: payPage === TOTAL_PAGES ? 0.3 : 1 }} onClick={() => setPayPage(p => Math.min(TOTAL_PAGES, p + 1))} disabled={payPage === TOTAL_PAGES}>&gt;</button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* ── 결제수단 탭 ─────────────────────────────── */}
          {tab === 'method' && (
            <div style={{ width: '100%' }}>
              <h2 style={styles.paySectionTitle}>결제수단 관리</h2>
              {cards.length === 0 ? (
                <div style={{ ...styles.emptyBox, marginBottom: '12px' }}>등록된 결제수단이 없습니다</div>
              ) : (
                <div style={styles.cardListWrap}>
                  {cards.map((card, i) => (
                    <div key={card.id} style={{
                      ...styles.cardRow,
                      borderBottom: i < cards.length - 1 ? '1px solid #e5e7eb' : 'none',
                      borderRadius: i === 0 && cards.length === 1 ? '10px'
                        : i === 0 ? '10px 10px 0 0'
                        : i === cards.length - 1 ? '0 0 10px 10px'
                        : 0,
                    }}>
                      <div style={styles.cardRowLeft}>
                        {card.isDefault && <span style={styles.defaultTag}>기본</span>}
                        <span style={styles.cardName}>{card.name}</span>
                      </div>
                      <div style={{ position: 'relative' }}>
                        <button style={styles.cardMenuBtn} onClick={() => setOpenMenuId(openMenuId === card.id ? null : card.id)}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ca3af">
                            <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
                          </svg>
                        </button>
                        {openMenuId === card.id && (
                          <div style={styles.cardMenuDropdown}>
                            <div style={{ ...(card.isDefault ? styles.cardMenuOptionDisabled : styles.cardMenuOption), borderBottom: '1px solid #f3f4f6' }} onClick={() => { if (!card.isDefault) handleSetDefault(card); }}>
                              기본 결제카드로 변경
                            </div>
                            <div style={styles.cardMenuOptionDelete} onClick={() => handleDeleteCard(card)}>카드 삭제</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button style={styles.addCardBtn} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}>
                + 카드 등록
              </button>
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
