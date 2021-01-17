import Image from "next/image";

import { BrandWrapper } from "./styles";

const Brand = () => {
  return (
    <BrandWrapper href="/">
      <Image
        src="/assets/brand.svg"
        alt="Orianta Jovem"
        width={246}
        height={26}
      />
    </BrandWrapper>
  );
};

export default Brand;
