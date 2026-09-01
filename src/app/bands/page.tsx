import BandsCard from "@/component/BandsCard";
import { bands } from "@/data/banddata";

export default function Bands() {
    return (
        <main className="min-h-screen px-6 py-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {bands.map((band) => (
                    <BandsCard key={band.id} bands={band} />
                ))}
            </div>
        </main>
    );
}