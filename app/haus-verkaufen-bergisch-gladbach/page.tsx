import VerkaufenPage, { saleMetadata } from "../VerkaufenPage";
export const metadata = saleMetadata("haus");
export default function Page(){ return <VerkaufenPage kind="haus"/>; }
