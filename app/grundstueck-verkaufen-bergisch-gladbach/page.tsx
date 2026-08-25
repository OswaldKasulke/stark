import VerkaufenPage, { saleMetadata } from "../VerkaufenPage";
export const metadata = saleMetadata("grundstueck");
export default function Page(){ return <VerkaufenPage kind="grundstueck"/>; }
