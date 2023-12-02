'use client'

import React, {forwardRef} from 'react';
import Typography from "@/components/base/Typography";
import Link from "next/link";
import styled from "styled-components";

interface NavBarItemProps {
  text: string;
  color?: string;
}

const NavBarItem = forwardRef<HTMLElement, NavBarItemProps>(({text, color}, ref) => {
  const handleClick = () => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.scrollIntoView({behavior: 'smooth'});
    }
  };
  return (
    <Link href={'/'} style={{textDecoration: "none"}}>
      <Typography.Medium10 color={color}>
        {text}
      </Typography.Medium10>
    </Link>
  );
});
NavBarItem.displayName = "NavBarItem";



export default NavBarItem;

