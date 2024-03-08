type Props = {
  value?: string;
  placeholder?: string;
};

function Textinput({ ...props }: Props) {
  return <input type="text" className="px-1 border rounded" {...props} />;
}

export default Textinput;
