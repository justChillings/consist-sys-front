import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface PaymentDetail {
  orderId: string;
  date: string;
  product: string;
  amount: string;
  months: string;
  card: string;
}

interface Props {
  detail: PaymentDetail;
  onClose: () => void;
}

function PaymentDetailModalContent({ detail, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[500] flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="w-[400px] bg-white rounded-xl p-5 flex flex-col shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-text-dark">결제내역</h2>
            <span className="text-[13px] text-green-600 bg-green-100 rounded px-2 py-0.5">완료</span>
          </div>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center text-text-muted bg-transparent border-none cursor-pointer text-lg hover:text-text-dark"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <p className="text-[13px] text-text-muted mb-5">{detail.orderId}</p>

        {/* 정보 그리드 */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-5">
          <div>
            <p className="text-[15px] text-text-gray">결제일</p>
            <p className="text-[15px] font-medium text-text-dark">{detail.date}</p>
          </div>
          <div>
            <p className="text-[15px] text-text-gray">상품명</p>
            <p className="text-[15px] font-medium text-text-dark">{detail.product}</p>
          </div>
          <div>
            <p className="text-[15px] text-text-gray">결제금액</p>
            <p className="text-[15px] font-medium text-text-dark">{detail.amount}</p>
          </div>
          <div>
            <p className="text-[15px] text-text-gray">할부개월</p>
            <p className="text-[15px] font-medium text-text-dark">{detail.months}</p>
          </div>
          <div className="col-span-2">
            <p className="text-[15px] text-text-gray">결제카드</p>
            <p className="text-[15px] font-medium text-text-dark">{detail.card}</p>
          </div>
        </div>

        {/* 영수증 버튼 */}
        <button
          type="button"
          className="w-full h-12 rounded-lg text-base font-semibold text-link bg-secondary-bg border-none cursor-pointer hover:bg-secondary-hover"
        >
          카드 영수증 보기
        </button>
      </div>
    </div>
  );
}

export default function PaymentDetailModal(props: Props) {
  return createPortal(<PaymentDetailModalContent {...props} />, document.body);
}