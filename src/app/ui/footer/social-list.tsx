import Image from "next/image";
import { socialData } from "@/app/lib/placeholder-data";

export default function SocialList() {
  return (
    <div className="flex justify-around">
      {socialData.map((socialLink, index) => (
        <div key={index} className="mb-4">
          <a href={socialLink.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={socialLink.icon}
              alt={socialLink.name}
              className="h-6 w-6 mr-2 inline"
              width={16}
              height={16}
            />
            {socialLink.name}
          </a>
        </div>
      ))}
    </div>
  );
}