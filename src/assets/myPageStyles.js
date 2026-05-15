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
  header: { height: '60px', borderBottom: '1px solid #e5e7eb', backgroundColor: '#ffffff' },
  headerInner: {
    maxWidth: '1100px', margin: '0 auto', padding: '0 24px',
    height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '32px' },
  logo: {
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
    padding: '0px 12px 0px 0px', isolation: 'isolate', width: '82px', height: '40px',
    flex: 'none', order: 0, flexGrow: 0, zIndex: 0, justifyContent: 'center',
  },
  logoInner: { display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', textDecoration: 'none' },
  logoText: { fontSize: '18px', fontWeight: '700', color: '#1a1a1a', letterSpacing: '-0.3px' },
  nav: { display: 'flex', alignItems: 'center', gap: '28px' },
  navLink: { fontSize: '14px', fontWeight: '500', color: '#374151', textDecoration: 'none', cursor: 'pointer' },
  headerRight: { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', position: 'relative' },
  headerMyStore: { fontSize: '14px', fontWeight: '500', color: '#374151' },
  headerAvatar: {
    width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e5e7eb',
    display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
  },

  // Main
  main: { flex: 1, padding: '40px 20px 80px' },
  inner: { maxWidth: '560px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  pageTitle: { fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '20px', textAlign: 'center' },

  // Tabs
  tabRow: { display: 'flex', width: '100%', borderBottom: '1px solid #e5e7eb', marginBottom: '28px' },
  tabBtn: {
    flex: 1, padding: '10px 0', fontSize: '14px', fontWeight: '500', color: '#9ca3af',
    background: 'none', border: 'none', borderBottom: '2px solid transparent', cursor: 'pointer', transition: 'all 0.15s',
  },
  tabBtnActive: {
    flex: 1, padding: '10px 0', fontSize: '14px', fontWeight: '600', color: '#2563eb',
    background: 'none', border: 'none', borderBottom: '2px solid #2563eb', cursor: 'pointer', marginBottom: '-1px',
  },

  // Profile
  profileWrap: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '28px', gap: '10px' },
  profileImg: { width: '72px', height: '72px', objectFit: 'cover', borderRadius: '50%', cursor: 'pointer', transition: 'opacity 0.15s' },
  profileName: { fontSize: '15px', fontWeight: '600', color: '#111827' },

  // Form
  form: { width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' },
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  labelRow: { display: 'flex', alignItems: 'center', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '700', color: '#374151' },
  optionalBadge: { fontSize: '11px', color: '#9ca3af', fontWeight: '400' },
  inputBase: {
    width: '100%', padding: '11px 14px', fontSize: '14px', color: '#111827',
    border: '1px solid #e5e7eb', borderRadius: '8px', outline: 'none',
    boxSizing: 'border-box', backgroundColor: '#f9fafb', transition: 'border-color 0.15s',
  },
  inputEditable: {
    width: '100%', padding: '11px 14px', fontSize: '14px', color: '#111827',
    border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none',
    boxSizing: 'border-box', backgroundColor: '#ffffff', transition: 'border-color 0.15s',
  },
  inputInlineWrap: { position: 'relative', width: '100%' },
  inlineActionBtn: {
    position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
    fontSize: '13px', fontWeight: '600', color: '#2563eb', background: 'none',
    border: 'none', padding: '0', cursor: 'pointer', whiteSpace: 'nowrap',
  },
  birthRow: { display: 'flex', alignItems: 'center', gap: '8px', width: '100%' },
  birthSelect: {
    flex: 1, minWidth: 0, padding: '0 10px', height: '42px', fontSize: '14px', color: '#111827',
    border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none', boxSizing: 'border-box',
    backgroundColor: '#ffffff', transition: 'border-color 0.15s', cursor: 'pointer',
    appearance: 'none', WebkitAppearance: 'none', textAlignLast: 'center',
  },

  // 수신설정
  receiveRow: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '11px 14px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#f9fafb',
  },
  receiveLeft: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#374151' },
  moreLink: { fontSize: '12px', color: '#9ca3af', textDecoration: 'none', cursor: 'pointer' },

  // 에러
  errorText: { fontSize: '12px', color: '#ef4444', marginTop: '4px' },

  // Modal (공통)
  modalOverlay: {
    position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
  },
  modalBox: {
    backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px 28px 24px',
    width: '100%', maxWidth: '300px', display: 'flex', flexDirection: 'column',
    alignItems: 'center', gap: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  },
  modalTitle: { fontSize: '17px', fontWeight: '700', color: '#111827', textAlign: 'center' },
  modalBtn: {
    width: '100%', padding: '12px', fontSize: '15px', fontWeight: '600',
    color: '#ffffff', backgroundColor: '#2563eb', border: 'none', borderRadius: '8px',
    cursor: 'pointer', marginTop: '4px',
  },

  // Submit / Withdraw
  submitBtn: {
    width: '100%', padding: '13px', fontSize: '15px', fontWeight: '600',
    color: '#ffffff', backgroundColor: '#2563eb', border: 'none', borderRadius: '8px',
    cursor: 'pointer', marginTop: '4px', transition: 'background-color 0.15s',
  },
  withdrawLink: { marginTop: '12px', fontSize: '13px', color: '#9ca3af', textDecoration: 'none', cursor: 'pointer', textAlign: 'center' },

  // Footer
  footer: { borderTop: '1px solid #e5e7eb', backgroundColor: '#f9fafb', padding: '32px 0 24px' },
  footerInner: { maxWidth: '860px', margin: '0 auto', padding: '0 24px' },
  footerTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' },
  footerLeft: { display: 'flex', flexDirection: 'column', gap: '12px' },
  footerLogoRow: { display: 'flex', alignItems: 'center', gap: '16px' },
  footerNavLink: { fontSize: '12px', color: '#6b7280', textDecoration: 'none', cursor: 'pointer' },
  footerCompanyInfo: { fontSize: '12px', color: '#9ca3af', lineHeight: '1.8' },
  footerRight: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' },
  footerContactLine: { fontSize: '12px', color: '#6b7280', textAlign: 'right' },
  footerContactLabel: { fontWeight: '600', color: '#374151' },
  footerDivider: { borderTop: '1px solid #e5e7eb', marginTop: '20px', paddingTop: '20px' },
  footerReservedImg: { height: '16px', opacity: 0.5 },

  // 결제내역 탭
  paySection: { width: '100%', marginBottom: '24px' },
  paySectionTitle: { fontSize: '15px', fontWeight: '700', color: '#111827', marginBottom: '12px' },
  emptyBox: {
    padding: '14px 16px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb',
    borderRadius: '8px', fontSize: '13px', color: '#9ca3af', textAlign: 'center',
  },
  subscriptionCard: {
    padding: '14px 16px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb',
    borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px',
  },
  subCardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  subCardLeft: { display: 'flex', alignItems: 'center', gap: '8px' },
  subName: { fontSize: '14px', fontWeight: '600', color: '#111827' },
  planBadge: { fontSize: '11px', fontWeight: '700', color: '#ffffff', padding: '2px 8px', borderRadius: '20px' },
  manageBtn: { fontSize: '13px', color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer', padding: 0 },
  subCardInfo: { display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '12px', color: '#6b7280' },
  tableWrap: { border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' },
  tableHeader: {
    display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: '#f9fafb',
    borderBottom: '1px solid #e5e7eb', fontSize: '12px', fontWeight: '600', color: '#6b7280',
  },
  tableRow: { display: 'flex', alignItems: 'center', padding: '11px 14px', borderBottom: '1px solid #f3f4f6', fontSize: '13px', color: '#374151' },
  detailLink: { fontSize: '12px', color: '#2563eb', textDecoration: 'none', cursor: 'pointer' },
  pagination: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', marginTop: '16px' },
  pageBtn: {
    width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '13px', color: '#374151', backgroundColor: 'transparent', border: 'none', outline: 'none', borderRadius: '6px', cursor: 'pointer',
  },
  pageBtnActive: { backgroundColor: '#2563eb', color: '#ffffff', fontWeight: '600' },
  pageBtnNav: {
    width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '13px', color: '#6b7280', backgroundColor: 'transparent', border: 'none', outline: 'none', borderRadius: '6px', cursor: 'pointer',
  },

  // 결제내역 상세 모달
  payDetailBox: {
    backgroundColor: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '300px',
    display: 'flex', flexDirection: 'column', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', overflow: 'hidden',
  },
  payDetailContent: { padding: '20px 20px 16px' },
  payDetailHeader: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' },
  payDetailTitle: { fontSize: '16px', fontWeight: '700', color: '#111827' },
  payDetailBadge: { fontSize: '11px', fontWeight: '600', color: '#2563eb', backgroundColor: '#eff6ff', padding: '2px 8px', borderRadius: '20px' },
  payDetailClose: { marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  payDetailOrderNo: { fontSize: '12px', color: '#9ca3af', marginBottom: '14px' },
  payDetailDivider: { height: '1px', backgroundColor: '#e5e7eb', margin: '0 -20px 16px' },
  payDetailGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 8px' },
  payDetailCell: { display: 'flex', flexDirection: 'column', gap: '3px' },
  payDetailCellFull: { gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '3px' },
  payDetailLabel: { fontSize: '11px', color: '#9ca3af' },
  payDetailValue: { fontSize: '13px', fontWeight: '500', color: '#111827' },
  receiptBtn: {
    width: '100%', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '6px', fontSize: '13px', fontWeight: '500', color: '#6b7280', backgroundColor: '#f9fafb',
    border: 'none', borderTop: '1px solid #e5e7eb', cursor: 'pointer',
  },

  // 결제수단 탭
  cardListWrap: { border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'visible', width: '100%', marginBottom: '12px' },
  cardRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 14px', backgroundColor: '#ffffff' },
  cardRowLeft: { display: 'flex', alignItems: 'center', gap: '8px' },
  defaultTag: { fontSize: '11px', fontWeight: '600', color: '#2563eb', backgroundColor: '#eff6ff', padding: '2px 8px', borderRadius: '20px' },
  cardName: { fontSize: '14px', color: '#374151' },
  cardMenuBtn: { background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  addCardBtn: { width: '100%', padding: '13px', fontSize: '15px', fontWeight: '600', color: '#ffffff', backgroundColor: '#2563eb', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.15s' },
  cardMenuDropdown: {
    position: 'absolute', right: 0, top: '28px', backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    zIndex: 100, minWidth: '160px', overflow: 'hidden',
  },
  cardMenuOption: { padding: '12px 16px', fontSize: '13px', color: '#374151', cursor: 'pointer' },
  cardMenuOptionDisabled: { padding: '12px 16px', fontSize: '13px', color: '#d1d5db', cursor: 'default' },
  cardMenuOptionDelete: { padding: '12px 16px', fontSize: '13px', color: '#ef4444', cursor: 'pointer' },

  // 확인 모달 (카드 관련)
  confirmModal: { backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px 24px 16px', width: '100%', maxWidth: '280px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' },
  confirmTitle: { fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '8px', lineHeight: '1.4' },
  confirmDesc: { fontSize: '13px', color: '#6b7280', lineHeight: '1.6', marginBottom: '20px' },
  confirmBtnRow: { display: 'flex', justifyContent: 'flex-end', gap: '20px' },
  confirmCancelBtn: { fontSize: '14px', fontWeight: '500', color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', padding: 0 },
  confirmActionBtn: { fontSize: '14px', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', padding: 0 },

  // Profile dropdown
  profileDropdown: {
    position: 'absolute', top: 'calc(100% + 8px)', right: 0,
    backgroundColor: '#ffffff', borderRadius: '12px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.12)', border: '1px solid #f3f4f6',
    width: '210px', zIndex: 100, overflow: 'hidden',
  },
  profileDropHead: { display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 16px 14px' },
  profileDropAvatar: {
    width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e5e7eb',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden',
  },
  profileDropName: { fontSize: '14px', fontWeight: '600', color: '#111827' },
  profileDropPhone: { fontSize: '12px', color: '#6b7280', marginTop: '2px' },
  profileDropDivider: { height: '1px', backgroundColor: '#f3f4f6' },
  profileDropItem: {
    display: 'block', padding: '13px 16px', fontSize: '14px', color: '#374151',
    cursor: 'pointer', textDecoration: 'none', backgroundColor: 'transparent',
    border: 'none', width: '100%', textAlign: 'left', boxSizing: 'border-box',
  },

  // 토스트
  toastItem: { display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 18px', borderRadius: '999px', fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' },
  toastSuccess: { backgroundColor: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0' },
  toastError: { backgroundColor: '#fff1f2', color: '#be123c', border: '1px solid #fecdd3' },
};

export default styles;
