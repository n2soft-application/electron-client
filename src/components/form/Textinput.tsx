type Props = {
  id?: string;
  value?: string;
  placeholder?: string;
  className?: string;
};

function Textinput({ value, placeholder, ...props }: Props) {
  return (
    <input
      type="text"
      className={`px-1 border rounded`}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Textinput;
