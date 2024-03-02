import Image from "next/image";
import { socialData } from "@/app/lib/placeholder-data";

export default function SocialList() {
  return (
    <div className="text-left">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <h4 className="uppercase font-bold mb-4 text-left text-gray-500">
            SOCIAL
          </h4>
          <ul>
            {socialData.map((socialLink, index) => (
              <li key={index} className="mb-4">
                <a
                  href={socialLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={socialLink.icon}
                    alt={socialLink.name}
                    className="h-6 w-6 mr-2 inline"
                    width={16}
                    height={16}
                  />
                  {socialLink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
