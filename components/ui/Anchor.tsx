import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  LegacyRef,
} from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface AnchorProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  newTab?: boolean;
  activeClassName?: string;
  local?: boolean;
  as?: string;
}

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ newTab, ...props }: AnchorProps, ref) => {
    const Rel = newTab ? "noopener noreferrer" : props.rel;
    const Target = newTab ? "_blank" : null;

    const { asPath } = useRouter();

    const active = props.href === asPath;

    const component = (
      <a
        ref={ref}
        {...props}
        className={`${props.className ?? ""} ${
          active ? props.activeClassName : ""
        }`.trim()}
        rel={Rel}
        target={Target}
      ></a>
    );

    return props.local ? (
      <Link href={props.href} as={props.as}>
        {component}
      </Link>
    ) : (
      component
    );
  }
);
