import Image from "next/image";
import Brand from "../Brand/Brand";

import { SocialMediasWrapper } from "./styles";

const socialMedias = [
  {
    src: "/assets/facebook.svg",
    alt: "Facebook",
    href: "https://facebook.com",
  },
  {
    src: "/assets/instagram.svg",
    alt: "Instagram",
    href: "https://instagram.com",
  },
  { src: "/assets/twitter.svg", alt: "Twitter", href: "https://twitter.com" },
  { src: "/assets/youtube.svg", alt: "Youtube", href: "https://youtube.com" },
];

const SocialMedias = () => {
  return (
    <SocialMediasWrapper>
      <Brand />
      <ul>
        {socialMedias.map((media, index) => (
          <li key={index}>
            <a href={media.href}>
              <Image src={media.src} alt={media.alt} width={43} height={43} />{" "}
            </a>
          </li>
        ))}
      </ul>
    </SocialMediasWrapper>
  );
};

export default SocialMedias;
