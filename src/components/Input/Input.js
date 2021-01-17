import { TextField } from "@material-ui/core";

const Input = ({ name, label, value, setValue, ...props }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      name={name}
      id={name}
      style={{ width: `100%`, marginBottom: `var(--gap-sm)` }}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};

export default Input;
