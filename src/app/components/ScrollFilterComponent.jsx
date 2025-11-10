import Link from "next/link";
import Image from "next/image";

const scrollFilterComponent = () => {
    return ( 
    <section className="grid col-[full] row-gap-2 grid-cols-[inherit]">
            <ul className="flex justify-between gap-5 overflow-x-auto snap-x snap-mandatory col-[full] pb-4 px-[max(1rem,calc(50%-var(--content-width)/2))]">
                <li className="flex  border-b-gray-300 bg-button justify-center align-center gap-2 [scroll-snap-align: center;] basis-[min(150px,90%)] shrink-0 rounded-full px-2 py-3 self-start">
                    <Image 
                     loading="eager"
                      src="https://placecats.com/neo/300/200"
                      alt="Cat picture"
                      width={300} 
                      height={300} 
                      className="rounded-full w-10 h-10 object-cover"
                    />
                    <p>Alle</p>
                    </li>
                <li className="flex border border-gray-500 align-center justify-center gap-2 [scroll-snap-align: center;] basis-[min(150px,90%)] shrink-0  rounded-full px-2 py-3 self-start ">
                    <Image
                     loading="eager"
                      src="https://placecats.com/neo/300/200"
                      alt="Cat picture"
                      width={300}
                      height={300}
                      className="rounded-full w-10 h-10 object-cover"
                    /> 
                    <p>Katte</p>
                    </li>
                <li className="flex border border-gray-500 align-center justify-centergap-2 [scroll-snap-align: center;] basis-[min(150px,90%)] shrink-0 rounded-full px-2 py-3 self-start ">
                    <Image
                     loading="eager"
                      src="https://placecats.com/neo/300/200"
                      alt="Cat picture"
                      width={300}
                      height={300}
                      className="rounded-full w-10 h-10 object-cover"
                    /> 
                    <p>Hunde</p>
                    </li>
               
            </ul>
      
    </section> );
}
 
export default scrollFilterComponent;