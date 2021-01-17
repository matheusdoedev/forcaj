import { FormWrapper } from "./styles";

const Form = ({ children, formName, onSubmit, ...props }) => {
  return (
    <FormWrapper id={formName} onSubmit={onSubmit} {...props}>
      {children}
    </FormWrapper>
  );
};

export default Form;
