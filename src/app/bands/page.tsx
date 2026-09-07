import { bands } from "@/data/banddata";
import type { Metadata } from "next";
import BandsExplorer from "@/component/BandsExplorer";

export const metadata: Metadata = {
    title: "MyFavoriteBands",
};

export default function Bands() {
    return (
        <main className="min-h-screen px-6 py-10">
            <BandsExplorer bands={bands} />
        </main>
    );
}