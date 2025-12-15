import Link from "next/link";
import {
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  GmailIcon,
  LinkedinIcon,
} from "@/components/icons";
import author from "@/constants/author";
import { PhoneIcon } from "lucide-react";
import IconButton from "@/components/IconButton";

function Social() {
  const iconValues = [
    {
      value: "github",
      icon: GithubIcon,
      link: author?.contact?.github,
    },
    {
      value: "linkedin",
      icon: LinkedinIcon,
      link: author?.contact?.linkedin,
    },
    {
      value: "gmail",
      icon: GmailIcon,
      link: `mailto:${author?.contact?.gmail}`,
    },
    {
      value: "phone",
      icon: PhoneIcon,
      link: `tel:${author?.contact?.phone}`,
    },
    { value: "discord", icon: DiscordIcon, link: author?.contact?.discord },
    { value: "facebook", icon: FacebookIcon, link: author?.contact?.facebook },
  ];

  const filteredItems = iconValues.filter((item) => Boolean(item.link));

  return (
    <section id="social">
      <div className="flex items-center gap-6 justify-center">
        {filteredItems.map(({ value, icon, link }) => (
          <IconButton
            alwaysShowTooltipContent={false}
            key={value}
            href={link!}
            icon={icon}
            className="[&>svg]:size-5 text-muted-foreground hover:text-foreground transition-colors duration-300"
            animationHover={false}
            size="icon"
          />
        ))}
      </div>
    </section>
  );
}

export default Social;
