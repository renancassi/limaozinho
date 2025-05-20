import MainCard from "@/components/Card";
import { listaFrases } from "@/app/frases";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center bg-[#660000]">
      <MainCard frases={listaFrases} />
    </div>
  );
}
