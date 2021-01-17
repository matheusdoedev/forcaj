import { ButtonWrapper } from "./styles";

const Button = ({ content, type, href }) => {
  if (type === "button") {
    return (
      <ButtonWrapper as="button" type="submit">
        {content}
      </ButtonWrapper>
    );
  } else {
    return (
      <ButtonWrapper to={href} type={type}>
        {content}
      </ButtonWrapper>
    );
  }
};

export default Button;
