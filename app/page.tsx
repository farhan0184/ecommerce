import BestSelling from "@/components/home/BestSelling";
import Feature from "@/components/home/Feature";
import Header from "@/components/home/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header/>
      <Feature/>
      <BestSelling/>
    </main>
  );
}
