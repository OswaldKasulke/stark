import { Fragment } from "react";
import { zerlege } from "./linktext";

export function Verlinkt({ text }: { text: string }) {
  return <>{zerlege(text).map((t, i) => t.href
    ? <a key={i} href={t.href} {...(t.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{t.text}</a>
    : <Fragment key={i}>{t.text}</Fragment>)}</>;
}
