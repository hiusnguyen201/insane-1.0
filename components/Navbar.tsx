import {
  BriefcaseBusinessIcon,
  FileUser,
  HomeIcon,
  InfoIcon,
  MoonIcon,
  NotebookIcon,
  SunIcon,
  WrenchIcon,
} from "lucide-react";
import IconButton, { IconButtonProps } from "@/components/IconButton";
import { t } from "i18next";
import { Separator } from "./ui/separator";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();

  const isLight = theme === "light";

  const toggleLight = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "vi" : "en");
  };

  const navItems: (IconButtonProps & { key: string })[] = [
    { key: "home", href: "#", tooltip: t("MLK1"), icon: HomeIcon },
    { key: "info", href: "#", tooltip: t("MLK6"), icon: InfoIcon },
    { key: "cv", href: "#", tooltip: t("MLK2"), icon: FileUser, hidden: true },
    {
      key: "blogs",
      href: "#",
      tooltip: t("MLK3"),
      icon: NotebookIcon,
      hidden: true,
    },
    {
      key: "works",
      href: "#",
      tooltip: t("MLK5"),
      icon: BriefcaseBusinessIcon,
    },
    { key: "skills", href: "#", tooltip: t("MLK4"), icon: WrenchIcon },
  ];

  const actionItems: (IconButtonProps & { key: string })[] = [
    {
      key: "toggle-light",
      onClick: toggleLight,
      icon: isLight ? SunIcon : MoonIcon,
    },
    {
      key: "change-language",
      onClick: changeLanguage,
      className: "uppercase",
      title: i18n.language === "en" ? "EN" : "VI",
    },
  ];

  return (
    <nav className="inline-flex bg-transparent fixed md:top-0 rounded-2xl bottom-0 z-50 py-1 h-16 right-1/2 translate-x-1/2">
      <div className="bg-background flex items-center gap-2 h-full rounded-2xl py-2 px-1 backdrop-blur-md shadow-md dark:shadow-top-glow-inset transform-gpu border border-border">
        {navItems.map(({ key, ...rest }) => (
          <IconButton key={key} {...rest} />
        ))}

        <Separator orientation="vertical" />

        {actionItems.map(({ key, ...rest }) => (
          <IconButton key={key} size="small" {...rest} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
