import Link from "next/link";
import { MouseEventHandler } from "react";

type NavbarLinkProps = {
  href: string;
  linkName: string;
  onClick: MouseEventHandler;
};

export function NavbarLink(props: NavbarLinkProps) {
  return (
    <li className="item">
      <Link href={props.href}>
        <a onClick={props.onClick} className="link">
          {props.linkName}
        </a>
      </Link>
    </li>
  );
}
