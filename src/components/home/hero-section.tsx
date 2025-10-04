"use client";

import { EyeShowIcon } from "@govtechmy/myds-react/icon";
import { Link } from "@govtechmy/myds-react/link";
import { Button } from "@govtechmy/myds-react/button";

interface HeroSectionProps {
  heroTitle: string;
  heroTypewriterText: string;
  heroDescription: string;
}

export default function HeroSection({
  heroTitle,
  heroTypewriterText,
  heroDescription,
}: HeroSectionProps) {
  return (
    <div className="col-span-full flex w-full max-w-[350px] flex-col items-center gap-6 py-16 md:max-w-[600px] lg:mx-auto lg:max-w-screen-xl">
      <div className="flex w-full flex-col items-center gap-4.5 text-center lg:max-w-[680px] lg:flex-1">
        <p className="text-body-md font-semibold md:text-body-md lg:tracking-widest">
          CIVIC TECHNOLOGY COMMUNITY MALAYSIA
        </p>
        <h1 className="font-heading text-heading-md font-semibold md:text-heading-lg lg:tracking-tighter">
          {heroTitle} <br />
          <span className="text-txt-_civictechmy-600">
            {heroTypewriterText}
          </span>
        </h1>
        <p className="text-body-lg text-txt-black-500">{heroDescription}</p>
        <span className="flex items-center gap-2 text-txt-black-500">
          <EyeShowIcon />
          <p className="text-body-md text-txt-black-500">9,999 views</p>
        </span>
        <div className="mx-auto mt-6 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            className="flex w-full items-center justify-center no-underline"
            size="medium"
            variant="default-outline"
          >
            <Link
              href="#"
              className="flex w-full items-center justify-center text-center"
            >
              Explore Products
            </Link>
          </Button>
          <Button
            asChild
            className="flex w-full items-center justify-center no-underline"
            size="medium"
            variant="default-outline"
          >
            <Link
              href="#"
              className="flex w-full items-center justify-center text-center"
            >
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
