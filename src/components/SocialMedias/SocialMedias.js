import Brand from "../Brand/Brand";

import { SocialMediasWrapper } from "./styles";

import facebookImg from "../../assets/facebook.svg";
import instagramImg from "../../assets/instagram.svg";
import twitterImg from "../../assets/twitter.svg";
import youtubeImg from "../../assets/youtube.svg";

const socialMedias = [
  {
    src: facebookImg,
    alt: "Facebook",
    href: "https://facebook.com",
  },
  {
    src: instagramImg,
    alt: "Instagram",
    href: "https://instagram.com",
  },
  {
    src: twitterImg,
    alt: "Twitter",
    href: "https://twitter.com",
  },
  {
    src: youtubeImg,
    alt: "Youtube",
    href: "https://youtube.com",
  },
];

const SocialMedias = () => {
  return (
    <SocialMediasWrapper>
      <Brand />
      <ul>
        {socialMedias.map((media, index) => (
          <li key={index}>
            <a href={media.href}>
              <img src={media.src} alt={media.alt} />
            </a>
          </li>
        ))}
      </ul>
    </SocialMediasWrapper>
  );
};

export default SocialMedias;
