import Link from "next/link";

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
      <Link href={href}>
        <ButtonWrapper type={type}>{content}</ButtonWrapper>
      </Link>
    );
  }
};

export default Button;
