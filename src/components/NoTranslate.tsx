import type { ComponentPropsWithoutRef } from "react";

type NoTranslateProps = ComponentPropsWithoutRef<"span">;

export default function NoTranslate({ className = "", children, ...props }: NoTranslateProps) {
  return (
    <span {...props} translate="no" className={`notranslate ${className}`.trim()}>
      {children}
    </span>
  );
}
