import Image from "next/image";
import PetList from "./components/PetList";
import HeaderComponent from "./components/HeaderComponent";
import ScrollFilterComponent from "./components/ScrollFilterComponent";
import Footer from "./components/Footer";

export default function Home() {
  return (
       <>
    
       <header className="grid grid-cols-subgrid col-[full]">
        <HeaderComponent />
       </header>

       <main className="grid col-[full]">
        <ScrollFilterComponent />
        <PetList />
       </main>
       <footer className="grid grid-cols-subgrid col-[full]">
        <Footer />
       </footer>
 
       </>
  );
}
//2556 x 1179