interface PlaceholderProps {
  children: string;
  className?: string;
}

const Placeholder = ({ children, className = "" }: PlaceholderProps) => {
  return (
    <span 
      className={`bg-primary/15 text-primary px-2 py-0.5 rounded-md font-medium border border-primary/20 cursor-pointer hover:bg-primary/25 transition-colors ${className}`}
      title="Clique para editar este texto"
    >
      {children}
    </span>
  );
};

export default Placeholder;
