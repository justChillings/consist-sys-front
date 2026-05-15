const styles = {
  page: {
    minHeight: '100vh', display: 'flex', flexDirection: 'column',
    backgroundColor: '#ffffff', color: '#1a1a1a',
    fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif",
  },

  // Header
  header: { height: '60px', borderBottom: '1px solid #e5e7eb', backgroundColor: '#ffffff' },
  headerInner: {
    maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
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
  main: {
    flex: 1, display: 'flex', flexDirection: 'column',
    alignItems: 'center', padding: '48px 20px 80px',
  },
  card: { width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' },

  // 아이콘 + 타이틀
  iconWrap: { position: 'relative', width: '64px', height: '64px', marginBottom: '16px' },
  iconBox: {
    width: '64px', height: '64px', borderRadius: '16px', backgroundColor: '#2563eb',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  iconBadge: {
    position: 'absolute', top: '-4px', right: '-4px',
    width: '20px', height: '20px', borderRadius: '50%',
    backgroundColor: '#2563eb', border: '2.5px solid #ffffff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: 1,
  },
  title: { fontSize: '22px', fontWeight: '700', color: '#111827', marginBottom: '6px', textAlign: 'center' },
  subtitle: { fontSize: '14px', color: '#6b7280', marginBottom: '28px', textAlign: 'center' },

  // Form
  form: { width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' },
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  labelRow: { display: 'flex', alignItems: 'center', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '700', color: '#374151' },
  optionalBadge: { fontSize: '11px', color: '#9ca3af', fontWeight: '400' },
  input: {
    width: '100%', padding: '11px 14px', fontSize: '14px', color: '#111827',
    border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none',
    boxSizing: 'border-box', backgroundColor: '#ffffff', transition: 'border-color 0.15s',
  },
  inputInlineWrap: { position: 'relative', width: '100%' },
  inlineBtn: {
    position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
    fontSize: '13px', fontWeight: '600', color: '#2563eb',
    background: 'none', border: 'none', padding: 0, cursor: 'pointer', whiteSpace: 'nowrap',
  },

  // 주소 행
  addressRow: { display: 'flex', gap: '8px' },
  postalInput: {
    flex: 1, padding: '11px 14px', fontSize: '14px', color: '#111827',
    border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none',
    boxSizing: 'border-box', backgroundColor: '#ffffff', transition: 'border-color 0.15s',
  },
  searchBtn: {
    padding: '11px 16px', fontSize: '14px', fontWeight: '600',
    color: '#ffffff', backgroundColor: '#2563eb', border: 'none',
    borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background-color 0.15s',
  },

  // 등록 버튼
  submitBtn: {
    width: '100%', padding: '13px', fontSize: '15px', fontWeight: '600',
    color: '#ffffff', backgroundColor: '#2563eb', border: 'none',
    borderRadius: '8px', cursor: 'pointer', marginTop: '4px', transition: 'background-color 0.15s',
  },

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
};

export default styles;
