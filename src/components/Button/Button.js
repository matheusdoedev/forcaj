import { ButtonWrapper } from "./styles";

const Button = ({ content, type, href, ...props }) => {
  return (
    <ButtonWrapper to={href} type={type} {...props}>
      {content}
    </ButtonWrapper>
  );
};

export default Button;
