type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ label, onClick,className}: ButtonProps) => (
  <button 
    onClick={onClick} 
    className={`bg-brand-primary h-[60px] max-w-[521px] min-w-[250px] font-bold text-lg text-white
     ${className}
  `}
  >{label}</button>
);
