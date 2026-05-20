import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  type: 'delete' | 'setDefault';
  onConfirm: () => void;
  onClose: () => void;
}

const MODAL_CONTENT = {
  delete: {
    title: '카드를 삭제할까요?',
    desc: '정기결제에 등록된 카드는 삭제 전 정기결제를 해지해주세요.',
    confirmLabel: '삭제',
    confirmClass: 'text-error',
  },
  setDefault: {
    title: '기본 결제카드를 변경할까요?',
    desc: '정기결제에 등록된 카드는 별도로 결제수단을 변경해 주세요.',
    confirmLabel: '등록',
    confirmClass: 'text-link',
  },
};

function CardConfirmModalContent({ type, onConfirm, onClose }: Props) {
  const { title, desc, confirmLabel, confirmClass } = MODAL_CONTENT[type];

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
        className="w-[400px] bg-white rounded-xl p-5 flex flex-col gap-5 shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-text-dark leading-7">{title}</h2>
          <p className="text-sm text-text-gray leading-5">{desc}</p>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="text-sm text-text-muted bg-transparent border-none cursor-pointer"
            onClick={onClose}
          >
            취소
          </button>
          <button
            type="button"
            className={`text-sm bg-transparent border-none cursor-pointer ${confirmClass}`}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CardConfirmModal(props: Props) {
  return createPortal(<CardConfirmModalContent {...props} />, document.body);
}