import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sinantech" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaTwitch />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
