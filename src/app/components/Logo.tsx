"use client";

import Image from "next/image";
import logo from "../assets/Logo.png";

export default function Logo() {
  return (
    <Image
      src={logo}
      alt="Logo"
      className="mx-auto pt-[72px]"
      width={226}
      height={48}
    />
  );
}
