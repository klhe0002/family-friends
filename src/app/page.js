import Image from "next/image";
import PetList from "./components/PetList";
import HeaderComponent from "./components/HeaderComponent";
import ScrollFilterComponent from "./components/ScrollFilterComponent";
import Footer from "./components/Footer";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <>
      <header className="col-[full] grid grid-cols-subgrid">
        <HeaderComponent />
      </header>

      <main className="col-[full]">
        <section className="row-gap-2 col-[full] grid grid-cols-[inherit]">
          <ul className="col-[full] flex snap-x snap-mandatory justify-between gap-5 overflow-x-auto px-[max(1rem,calc(50%-var(--content-width)/2))] pb-4">
            <ScrollFilterComponent />
          </ul>
        </section>
        <div className="grid grid-cols-2 gap-3 p-4">
          {/* <PetList /> */}
        </div>

        <Suspense>
          <PetListContainer searchParams={searchParams} />
        </Suspense>
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}
//2556 x 1179

async function PetListContainer({ searchParams }) {
  const {category} = await searchParams;
  console.log(category)
  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      <PetList category={category} />
    </div>
  );
}
