interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[1.25rem] p-8 w-[25rem] flex flex-col items-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Emoji */}
        <div className="w-16 h-16 rounded-full bg-[#FFF8E7] flex items-center justify-center mb-6">
          <span className="text-4xl">🎉</span>
        </div>
        
        <h2 className="font-sora text-[1.5rem] font-semibold mb-3">
          Thanks for reaching out!
        </h2>
        
        <p className="text-[#575578] text-center font-sora text-[1rem] mb-8">
          We've received your message<br />
          and will get back to you shortly.
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 px-6 rounded-[0.5rem] bg-black text-white font-sora font-semibold hover:bg-gray-900 transition-colors"
        >
          Thanks!
        </button>
      </div>
    </div>
  );
};

export default SuccessModal; 