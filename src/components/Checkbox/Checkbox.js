import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CheckboxInput = ({
  checked,
  handleChange,
  value,
  name,
  label,
  ...props
}) => {
  //   const [state, setState] = React.useState({
  //     checkedA: true,
  //     checkedB: true,
  //     checkedF: true,
  //     checkedG: true,
  //   });

  //   const handleChange = (event) => {
  //     setState({ ...state, [event.target.name]: event.target.checked });
  //   };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          name={name}
          value={value}
          color="primary"
        />
      }
      label={label}
    />
  );
};

export default CheckboxInput;
