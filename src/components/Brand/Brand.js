import { BrandWrapper } from "./styles";

import logoImg from "../../assets/brand.svg";

const Brand = () => {
  return (
    <BrandWrapper to="/">
      <img src={logoImg} alt="Orianta Jovem" />
    </BrandWrapper>
  );
};

export default Brand;
