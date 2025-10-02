import { useTranslation } from "@/lib/hooks/useTranslation";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FunctionComponent } from "react";

type SiteIconsProps = {};

const SiteIcons: FunctionComponent<SiteIconsProps> = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  if (theme === "dark") {
    return (
      <div className="flex items-center gap-1.5 tracking-[3px]">
        <>
          <div className="h-[36px] w-[42px]">
            <Image
              src={"/static/images/icons/tiger-dark.png"}
              alt="sdasda Icon Dark"
              width={42}
              height={36}
            />
          </div>

          <div className="uppercase">
            {i18n.language === "en-GB" && (
              <>
                <p className="text-lg font-bold leading-tight dark:text-white">
                  axasdas<span className="font-medium">dasdasd</span>
                </p>
                <p className="text-xs font-semibold text-orange">Solutions</p>
              </>
            )}
            {i18n.language === "ms-MY" && (
              <>
                <p className="text-xs font-semibold text-orange">Peneraju</p>
                <p className="text-lg font-bold leading-tight">
                  sadasd<span className="font-medium">sadsadas</span>
                </p>
              </>
            )}
          </div>
        </>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 tracking-[3px]">
      <>
        <div className="h-[36px] w-[42px]">
          <Image
            src={"/static/images/icons/tiger-white.png"}
            alt="sadasds Icon"
            width={42}
            height={36}
          />
        </div>
        <div className="uppercase">
          {i18n.language === "en-GB" && (
            <>
              <p className="text-lg font-bold leading-tight">
                sdasdas<span className="font-medium">sadasdas</span>
              </p>
              <p className="text-xs font-semibold text-dim">xxx</p>
            </>
          )}
          {i18n.language === "ms-MY" && (
            <>
              <p className="text-xs font-semibold text-dim">xxx</p>
              <p className="text-lg font-bold leading-tight">
                sadasdas<span className="font-medium">sdasda</span>
              </p>
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default SiteIcons;
