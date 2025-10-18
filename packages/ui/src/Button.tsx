type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ label, onClick, className}: ButtonProps) => (
  <button 
    onClick={onClick} 
    className={`bg-brand-primary h-[60px] sm:max-w-[400px] md:max-w-[521px] lg:max-w-[521px] font-bold text-white text-xl md:text-2xl rounded-lg           px-4
      py-4 lg:text-3xl cursor-pointer w-full ${className}
  `}
  >{label}</button>
);
