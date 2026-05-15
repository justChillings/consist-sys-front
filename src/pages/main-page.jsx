import yojeongSymbol from '../images/yojeong_simbol.svg';

export default function MainPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif",
      gap: '20px',
    }}>
      <img src={yojeongSymbol} alt="요정" style={{ width: 72, height: 72, objectFit: 'contain' }} />
      <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111827' }}>환영합니다!</h1>
    </div>
  );
}
