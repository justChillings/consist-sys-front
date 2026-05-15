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
  main: { flex: 1, padding: '32px 0 80px' },
  inner: { maxWidth: '900px', margin: '0 auto', padding: '0 24px' },

  // Title row
  titleRow: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' },
  pageTitle: { fontSize: '20px', fontWeight: '700', color: '#111827' },
  addBtn: {
    width: '28px', height: '28px', borderRadius: '50%', border: '1.5px solid #d1d5db',
    backgroundColor: '#ffffff', fontSize: '18px', color: '#374151', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1,
  },

  // Store list
  storeList: { display: 'flex', flexDirection: 'column' },
  storeItem: {
    display: 'flex', alignItems: 'center', gap: '16px',
    padding: '20px 0', borderBottom: '1px solid #f3f4f6',
  },
  storeNum: { fontSize: '13px', color: '#9ca3af', width: '18px', flexShrink: 0, textAlign: 'center' },
  storeThumbnail: {
    width: '120px', height: '80px', borderRadius: '8px', backgroundColor: '#f3f4f6',
    flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden',
  },
  storeInfo: { flex: 1, minWidth: 0 },
  storeNameRow: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' },
  storeName: { fontSize: '15px', fontWeight: '600', color: '#111827' },
  planBadge: {
    fontSize: '11px', fontWeight: '700', color: '#ffffff',
    padding: '2px 8px', borderRadius: '20px',
  },
  storeSubInfo: { fontSize: '12px', color: '#9ca3af', lineHeight: '1.6' },
  visitBtn: {
    flexShrink: 0, padding: '10px 18px', fontSize: '14px', fontWeight: '600',
    color: '#ffffff', backgroundColor: '#2563eb', border: 'none', borderRadius: '8px',
    cursor: 'pointer', transition: 'background-color 0.15s', whiteSpace: 'nowrap',
  },

  // Empty state
  emptyWrap: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '380px',
  },
  emptyPopup: {
    backgroundColor: '#ffffff', borderRadius: '20px', padding: '36px 32px',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
    boxShadow: '0 8px 40px rgba(0,0,0,0.10)', width: '100%', maxWidth: '320px',
  },
  emptyTitle: { fontSize: '18px', fontWeight: '700', color: '#111827', marginTop: '8px' },
  emptyDesc: { fontSize: '13px', color: '#9ca3af', textAlign: 'center', lineHeight: '1.6', marginBottom: '8px' },
  emptyBtn: {
    width: '100%', padding: '13px', fontSize: '15px', fontWeight: '600',
    color: '#ffffff', backgroundColor: '#2563eb', border: 'none', borderRadius: '10px',
    cursor: 'pointer', transition: 'background-color 0.15s',
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
