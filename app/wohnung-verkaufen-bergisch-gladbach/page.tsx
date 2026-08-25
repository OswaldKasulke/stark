import VerkaufenPage, { saleMetadata } from "../VerkaufenPage";
export const metadata = saleMetadata("wohnung");
export default function Page(){ return <VerkaufenPage kind="wohnung"/>; }
