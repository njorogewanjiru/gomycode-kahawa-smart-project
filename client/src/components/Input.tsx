
interface InputProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium text-[#3b2f2f] mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 rounded-lg border text-[#3b2f2f] bg-[#f5efe6] focus:outline-none focus:ring-2 focus:ring-[#a85e3c] ${error ? "border-red-500" : "border-[#d4cfc4]"
          }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
