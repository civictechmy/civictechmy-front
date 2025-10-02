import { useTranslation } from "@lib/hooks/useTranslation";
import { FunctionComponent, ReactNode } from "react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { SearchIcon, GlobeIcon } from "@govtechmy/myds-react/icon";
import {
  Navbar,
  NavbarLogo,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuDropdown,
  NavbarAction,
} from "@govtechmy/myds-react/navbar";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Select,
} from "@govtechmy/myds-react/select";
import { ThemeSwitch } from "@govtechmy/myds-react/theme-switch";
import {
  Button,
  ButtonIcon,
  ButtonCounter,
} from "@govtechmy/myds-react/button";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { t } = useTranslation(["common"]);
  const { language, onLanguageChange } = useLanguage();

  return (
    <>
      <Navbar>
        <NavbarLogo
          src="/static/images/icons/tiger-color.png"
          alt="Malaysian Government Design System"
        >
          CIVICTECH.MY
        </NavbarLogo>
        {/* <NavbarMenu>
          <NavbarMenuItem href="/menu1">Menu 1</NavbarMenuItem>
          <NavbarMenuItem href="/menu2">Menu 2</NavbarMenuItem>
          <NavbarMenuDropdown title="Menu Dropdown">
            <NavbarMenuItem href="/submenu1">Submenu 1</NavbarMenuItem>
            <NavbarMenuItem href="/submenu2">Submenu 2</NavbarMenuItem>
            <NavbarMenuItem href="/submenu3">Submenu 3</NavbarMenuItem>
            <NavbarMenuItem href="/submenu1">Submenu 4</NavbarMenuItem>
          </NavbarMenuDropdown>
          <NavbarMenuItem href="/menu3">Menu 3</NavbarMenuItem>
        </NavbarMenu> */}
        <NavbarAction>
          {/* Button Search  : mobile hide if needed  */}
          <Button
            variant="default-ghost"
            iconOnly
            aria-label="search-button"
            size={"small"}
          >
            <ButtonIcon>
              <SearchIcon />
            </ButtonIcon>
          </Button>

          {/* Button Light Mode Toggle  : mobile hide if needed  */}
          <ThemeSwitch as="toggle" />

          {/* Select Language Toggle  : mobile hide if needed  */}
          <div className="hidden sm:block">
            <Select defaultValue="EN" variant="outline" size="small">
              <SelectTrigger aria-label="language-selection">
                <GlobeIcon className="h-4 w-4"></GlobeIcon>
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                align="end"
                className="rounded-[4px] py-1 font-body"
              >
                <SelectItem value="EN">EN</SelectItem>
                <SelectItem value="BM">BM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </NavbarAction>
      </Navbar>
    </>
  );
};

export default Header;
