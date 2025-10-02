import { useTranslation } from "next-i18next";
import { FunctionComponent, ReactNode } from "react";
import {
  Footer,
  SiteInfo,
  FooterSection,
  SiteLinkGroup,
  SiteLink,
  FooterLogo,
} from "@govtechmy/myds-react/footer";
import { Link } from "@govtechmy/myds-react/link";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterXIcon,
  YoutubeIcon,
} from "@govtechmy/myds-react/icon";

interface FooterProps {
  title?: ReactNode;
  children?: ReactNode;
}

const FooterComponent: FunctionComponent<FooterProps> = ({
  title,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Footer>
        <FooterSection className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-6 px-4 sm:px-6 md:flex-row md:items-start md:justify-between md:gap-8">
          <SiteInfo className="w-full md:w-auto">
            <div className="text-txt-black-900 flex items-center gap-x-2.5">
              <FooterLogo
                logoTitle={
                  <p className="font-poppins text-body-md whitespace-nowrap font-semibold">
                    CIVICTECH.MY
                  </p>
                }
                logo={
                  <img
                    src="/static/images/icons/tiger-color.png"
                    width={36}
                    alt="CivicTechMy Logo"
                    className="select-none"
                  />
                }
              />
            </div>
            <p className="text-txt-black-900 text-body-sm not-prose font-regular">
              Civic Technology Community Malaysia
            </p>
            <p className="text-txt-black-900 text-body-sm not-prose font-semibold">
              Follow us
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com/civictechmy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook link"
                underline="none"
                className="hover:text-txt-black-900"
              >
                <GithubIcon className="text-txt-black-700" />
              </Link>
            </div>
          </SiteInfo>
        </FooterSection>
        <FooterSection className="text-txt-black-500 mx-auto flex w-full max-w-[1280px] flex-col gap-4 border-none px-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex flex-col gap-2 md:gap-3">
            <p>© 2025 Civic Technology Community Malaysia (CivicTechMY)</p>
            <p>Website source code: Licensed under MIT License.</p>
            <p>
              Content (text, articles, documentation): Licensed under Creative
              Commons Attribution 4.0 International (CC-BY 4.0).
            </p>
            <p>Logo and branding: All Rights Reserved.</p>
            {/* TODO: Add disclaimer and privacy policy */}
            {/* <div className="text-txt-black-700 mt-1 flex flex-row gap-4">
              <a href="#">Disclaimer</a>
              <a href="#">Privacy Policy</a>
            </div> */}
          </div>
          <p className="text-txt-black-700">Last updated: 3rd October 2025</p>
        </FooterSection>
      </Footer>
    </>
  );
};

export default FooterComponent;
