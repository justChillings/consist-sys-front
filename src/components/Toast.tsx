import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  type: 'success' | 'error';
  message: string;
  onDismiss: () => void;
}

function ToastContent({ type, message, onDismiss }: Props) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 3000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  const isSuccess = type === 'success';

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-2 px-4 h-9 rounded-full pointer-events-none"
      style={{ backgroundColor: isSuccess ? '#dcfce7' : '#fee2e2' }}
    >
      {/* 아이콘 */}
      <span
        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-white text-[10px] font-bold"
        style={{ backgroundColor: isSuccess ? '#16a34a' : '#ef4444' }}
      >
        {isSuccess ? '✓' : '!'}
      </span>
      {/* 텍스트 */}
      <span
        className="text-base font-semibold whitespace-nowrap"
        style={{ color: isSuccess ? '#16a34a' : '#ef4444' }}
      >
        {message}
      </span>
    </div>
  );
}

export default function Toast(props: Props) {
  return createPortal(<ToastContent {...props} />, document.body);
}