"use client";

import {
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarAction,
} from "@govtechmy/myds-react/navbar";
import ThemeToggle from "./theme-toggle";
import LocaleSwitch from "./locale-switch";
import { Suspense } from "react";
import { Link } from "@/lib/i18n/routing";
import Image from "next/image";
import { Navbar as NavbarType } from "@/payload-types";

export default function Header({ headerData }: { headerData: NavbarType }) {
  return (
    <Navbar className="">
      <Link href={"/"}>
        <Image
          src="/static/images/icons/tiger-color.svg"
          alt="Govtech Logo"
          width={50}
          height={50}
          className="aspect-auto select-none object-contain"
        />
      </Link>
      <Link href={"/"}>
        <p className="text-xl font-bold">
          <span className="text-txt-_civictechmy-600">CIVIC</span>TECH.MY
        </p>
      </Link>
      <NavbarMenu>
        {headerData["navbar-items"].map((nav) => (
          <NavbarMenuItem
            key={nav.id}
            href={nav.link.reference || nav.link.url || "/"}
            asChild
          >
            <Link
              target={nav.link.newTab ? "_blank" : "_self"}
              href={nav.link.reference || nav.link.url || "/"}
            >
              {nav.link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarAction>
        <Suspense>
          {/* <ThemeToggle /> */}
          <LocaleSwitch />
        </Suspense>
      </NavbarAction>
    </Navbar>
  );
}
