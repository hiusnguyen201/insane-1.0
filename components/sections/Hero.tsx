import PhotoModal from "@/components/PhotoModal";
import Avatar from "@/components/Avatar";
import author from "@/constants/author";
import IconButton from "@/components/IconButton";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation("translation");
  return (
    <section id="hero" className="mt-24 mb-12">
      <div className="mx-auto max-w-screen-sm flex items-center justify-between gap-10">
        <div className="flex flex-col flex-1 mb-8">
          <h1 className="text-primary text-5.5xl leading-tight mb-2 font-bold">
            {author.name}
          </h1>
          <p className="text-secondary mb-2 text-xl font-extrabold">
            {author.nickname}
          </p>
          <p className="text-primary text-xl font-medium w-full">
            {t("MLK9")} <span>{author.jobTitle.join(" & ")}</span>
          </p>
        </div>

        <PhotoModal type="circle">
          <div className="relative flex items-center justify-center">
            <IconButton
              size="auto"
              animationHover={false}
              className="h-full w-full"
              tooltip={author.status}
              placement="right"
              align="end"
              alwaysShowTooltipContent
              tooltipContent={
                <div className="mb-[40%]">
                  <div className="flex flex-col gap-0.5 cursor-default">
                    <div className="w-3 h-3 rounded-full bg-surface shadow-xs border border-border"></div>
                    <div className="flex flex-col">
                      <div className="flex items-center relative -bottom-px left-[20%]">
                        <div className="w-2.5 h-2.5 rounded-tl-full bg-surface border border-r-0 border-b-0 border-border"></div>
                        <div className="w-2.5 h-2.5 rounded-tr-full bg-surface border border-l-0 border-b-0 border-border"></div>
                      </div>
                      <div className="py-2.5 px-3.5 rounded-2xl flex items-center justify-center bg-surface shadow-xs border border-border font-medium">
                        {author.status}
                      </div>
                    </div>
                  </div>
                </div>
              }
            >
              <Avatar
                wrapperClassName="border-2 border-border shadow-xl size-36"
                src={author.avatar}
                alt={`avatar-${author.name}`}
              />
            </IconButton>
          </div>
        </PhotoModal>
      </div>
    </section>
  );
}

export default Hero;
