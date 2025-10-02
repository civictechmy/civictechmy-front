import { useTranslation } from "next-i18next";
import { FunctionComponent, ReactNode } from "react";
import useConfig from "next/config";

interface ErrorStatusProps {
  title: string;
  description?: ReactNode | null;
  code: number;
  reason: string;
}

const ErrorStatus: FunctionComponent<ErrorStatusProps> = ({
  title,
  description,
  code,
  reason,
}) => {
  const { t } = useTranslation();
  const {
    publicRuntimeConfig: { APP_NAME },
  } = useConfig();

  return (
    <>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col-reverse items-end justify-between gap-6 lg:flex-row">
          <div className="space-y-2">
            <h2 className="text-xl lg:text-3xl">{title}</h2>
            {description && <p className="text-dim">{description}</p>}
          </div>
          <h1 className="text-7xl font-black text-dim">{code}</h1>
        </div>
        <div>
          <p className="pb-2 text-sm font-bold uppercase text-dim dark:text-white">
            {t("common:error.output")}
          </p>
          <div className="rounded-xl bg-washed dark:bg-background-dark">
            <div className="p-4.5 font-mono text-sm text-black dark:text-white">
              <span className="text-green-600 font-bold">{APP_NAME}:~/ $</span>{" "}
              cat {code}
              -error.log
              <br />
              {reason}
              <br />
              <span className="text-green-600 font-bold">{APP_NAME}:~/ $</span>
            </div>
          </div>

          <small className="text-xs">
            <i>{t("common:error.disclaimer")}</i>
          </small>
        </div>
      </div>
    </>
  );
};

export default ErrorStatus;
