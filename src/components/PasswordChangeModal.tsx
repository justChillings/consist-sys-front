import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  onClose: () => void;
  /** true: 마이페이지(현재 비밀번호 포함) / false: 로그인 찾기(새 비밀번호만) */
  requireCurrent?: boolean;
}

function PasswordChangeModalContent({ onClose, requireCurrent = true }: Props) {
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
        <h2 className="text-xl font-semibold text-text-dark leading-8">새 비밀번호를 입력해 주세요</h2>

        {requireCurrent && (
          <div className="field-group w-full">
            <label className="field-label">현재 비밀번호</label>
            <input type="password" placeholder="영문, 숫자 포함 8~20자" className="form-input" />
          </div>
        )}

        <div className="field-group w-full">
          <label className="field-label">새 비밀번호</label>
          <input type="password" placeholder="영문, 숫자 포함 8~20자" className="form-input" />
          <input type="password" placeholder="비밀번호를 한 번 더 입력해 주세요" className="form-input" />
        </div>

        <div className="pt-5 flex gap-2">
          <button
            type="button"
            className="flex-1 h-12 border border-input-border rounded-lg text-base font-normal text-text-gray bg-white cursor-pointer hover:bg-ghost-hover"
            onClick={onClose}
          >
            닫기
          </button>
          <button
            type="button"
            className="flex-1 h-12 rounded-lg text-base font-semibold text-white bg-primary border-none cursor-pointer hover:bg-primary-hover"
          >
            비밀번호 변경
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PasswordChangeModal(props: Props) {
  return createPortal(<PasswordChangeModalContent {...props} />, document.body);
}