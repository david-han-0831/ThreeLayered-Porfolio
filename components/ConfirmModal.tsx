import { useState } from 'react';
import SuccessModal from './SuccessModal';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmModal = ({ isOpen, onClose, onConfirm }: ConfirmModalProps) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <SuccessModal 
        isOpen={true}
        onClose={() => {
          setShowSuccess(false);
          onClose();
        }}
      />
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[0.6715rem] p-8 w-[31.25rem] flex flex-col items-center">
        <h2 className="font-sora text-[1.75rem] font-semibold mb-4">
          Just one more step!
        </h2>
        
        <p className="text-[#575578] text-center font-sora text-[1rem] mb-8">
          We're excited to have you with us<br />
          at ThreeLayered. Please confirm your email<br />
          address to get started!
        </p>

        <div className="flex gap-4 w-full">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-6 rounded-[0.33575rem] border border-[#E6E6E6] text-[#141125] font-sora font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 px-6 rounded-[0.33575rem] bg-black text-white font-sora font-semibold hover:bg-gray-900 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal; 