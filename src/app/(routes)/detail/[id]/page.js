import PetList from "@/app/components/PetList";
import HeaderComponent from "@/app/components/HeaderComponent";
import ScrollFilterComponent from "@/app/components/ScrollFilterComponent";
import Footer from "@/app/components/Footer";
import DetailComponent from "@/app/components/DetailComponent";
import { Suspense } from "react";

export default function detail({ params }) {
  return (
    <>
      <header className="col-[full] grid grid-cols-subgrid">
        <HeaderComponent />
      </header>

      <main className=" ">
        <Suspense>
          <DetailComponent params={params} />
        </Suspense>
      </main>

      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}
