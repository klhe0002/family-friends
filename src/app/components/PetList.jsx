import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { Suspense } from "react";
import FavoritElm from "./FavoritElm";

const PetList = async ({ category }) => {
  return (
    <Suspense>
      <FetchProducts category={category}/>
    </Suspense>
  );
};

export default PetList;

const FetchProducts = async ({category}) => {

  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products/";

  const response = await fetch(url);
  const { products } = await response.json();

  return products.map((product) => (
    
    <Link href={`/detail/${product.id}`} className="" key={product.id}>
      <ul className="col-[content] grid grid-rows-subgrid">
        <li>
          <div className="row-subgrid row-span-4 grid grid-cols-1 grid-rows-subgrid rounded-lg bg-white shadow-xl">
            {/* <CiStar
              color="white"
              className="bg-shadow color-white z-1 col-2 row-1 m-1 rounded-full"
            /> */}
         
              <FavoritElm id={product.id} />
   
            <Image
              loading="eager"
              src={product.thumbnail}
              alt={product.title}
              width={300}
              height={200}
              className="z-0 col-start-1 col-end-3 row-start-1 row-end-3 grid w-40 rounded-lg"
            />

            <div className="col-start-1 col-end-3 grid items-center justify-between gap-1 p-1">
              <h2 className="row-3 font-bold">{product.title}</h2>
              <h3 className="text-dark-text col-2 row-3">{product.category}</h3>
              <h3 className="text-dark-text row-4">{product.price}</h3>
            </div>
          </div>
        </li>
      </ul>
    </Link>
  ));
};
