import Book from "@/components/Book";
import GiftWrap from "@/components/ui/GiftWrap";

export default function Home() {
  return (
    <main className="box-border h-dvh overflow-hidden bg-linear-to-b from-rosa-pastel/30 via-gris-claro to-azul-pastel/30 p-4">
      <GiftWrap>
        <Book />
      </GiftWrap>
    </main>
  );
}
