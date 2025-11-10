import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";

const PetList = async () => {
const response = await fetch("https://dummyjson.com/products")


  return (
    <div className="col-[content] grid grid-cols-2 gap-3 p-4">
      <Link href="/detail">
        <div className="row-span-4 grid grid-cols-1 grid-rows-subgrid rounded-lg bg-white shadow-xl">
          <CiStar
            color="white"
            className="bg-shadow color-white z-1 col-2 row-1 m-1 rounded-full"
          />
          <Image
            loading="eager"
            src="https://placecats.com/neo/300/200"
            alt="Cat picture"
            width={300}
            height={200}
            className="z-0 col-start-1 col-end-3 row-start-1 row-end-3 grid w-40 rounded-lg"
          />

          <div className="col-start-1 col-end-3 grid items-center justify-between gap-1 p-1">
            <h2 className="font-bold">Name</h2>
            <h3 className="text-dark-text col-2">Age</h3>
            <h3 className="text-dark-text">Race</h3>
          </div>
        </div>
      </Link>
      <Link href="/detail">
        <div className="row-span-4 grid grid-cols-1 grid-rows-subgrid rounded-lg bg-white shadow-xl">
          <CiStar
            color="white"
            className="bg-shadow color-white z-1 col-2 row-1 m-1 rounded-full"
          />
          <Image
            loading="eager"
            src="https://placecats.com/neo/300/200"
            alt="Cat picture"
            width={300}
            height={200}
            className="z-0 col-start-1 col-end-3 row-start-1 row-end-3 grid w-40 rounded-lg"
          />

          <div className="col-start-1 col-end-3 grid items-center justify-between gap-1 p-1">
            <h2 className="font-bold">Name</h2>
            <h3 className="text-dark-text col-2">Age</h3>
            <h3 className="text-dark-text">Race</h3>
          </div>
        </div>
      </Link>
      <Link href="/detail">
        <div className="row-span-4 grid grid-cols-1 grid-rows-subgrid rounded-lg bg-white shadow-xl">
          <CiStar
            color="white"
            className="bg-shadow color-white z-1 col-2 row-1 m-1 rounded-full"
          />
          <Image
            loading="eager"
            src="https://placecats.com/neo/300/200"
            alt="Cat picture"
            width={300}
            height={200}
            className="z-0 col-start-1 col-end-3 row-start-1 row-end-3 grid w-40 rounded-lg"
          />

          <div className="col-start-1 col-end-3 grid items-center justify-between gap-1 p-1">
            <h2 className="font-bold">Name</h2>
            <h3 className="text-dark-text col-2">Age</h3>
            <h3 className="text-dark-text">Race</h3>
          </div>
        </div>
      </Link>
      <Link href="/detail">
        <div className="row-span-4 grid grid-cols-1 grid-rows-subgrid rounded-lg bg-white shadow-xl">
          <CiStar
            color="white"
            className="bg-shadow color-white z-1 col-2 row-1 m-1 rounded-full"
          />
          <Image
            loading="eager"
            src="https://placecats.com/neo/300/200"
            alt="Cat picture"
            width={300}
            height={200}
            className="z-0 col-start-1 col-end-3 row-start-1 row-end-3 grid w-40 rounded-lg"
          />

          <div className="col-start-1 col-end-3 grid items-center justify-between gap-1 p-1">
            <h2 className="font-bold">Name</h2>
            <h3 className="text-dark-text col-2">Age</h3>
            <h3 className="text-dark-text">Race</h3>
          </div>
        </div>
      </Link>
      <Link href="/detail">
        <div className="row-span-4 grid grid-cols-1 grid-rows-subgrid rounded-lg bg-white shadow-xl">
          <CiStar
            color="white"
            className="bg-shadow color-white z-1 col-2 row-1 m-1 rounded-full"
          />
          <Image
            loading="eager"
            src="https://placecats.com/neo/300/200"
            alt="Cat picture"
            width={300}
            height={200}
            className="z-0 col-start-1 col-end-3 row-start-1 row-end-3 grid w-40 rounded-lg"
          />

          <div className="col-start-1 col-end-3 grid items-center justify-between gap-1 p-1">
            <h2 className="font-bold">Name</h2>
            <h3 className="text-dark-text col-2">Age</h3>
            <h3 className="text-dark-text">Race</h3>
          </div>
        </div>
      </Link>
      <Link href="/detail">
        <div className="row-span-4 grid grid-cols-1 grid-rows-subgrid rounded-lg bg-white shadow-xl">
          <CiStar
            color="white"
            className="bg-shadow color-white z-1 col-2 row-1 m-1 rounded-full"
          />
          <Image
            loading="eager"
            src="https://placecats.com/neo/300/200"
            alt="Cat picture"
            width={300}
            height={200}
            className="z-0 col-start-1 col-end-3 row-start-1 row-end-3 grid w-40 rounded-lg"
          />

          <div className="col-start-1 col-end-3 grid items-center justify-between gap-1 p-1">
            <h2 className="font-bold">Name</h2>
            <h3 className="text-dark-text col-2">Age</h3>
            <h3 className="text-dark-text">Race</h3>
          </div>
        </div>
      </Link>
      <Link href="/detail">
        <div className="row-span-4 grid grid-cols-1 grid-rows-subgrid rounded-lg bg-white shadow-xl">
          <CiStar
            color="white"
            className="bg-shadow color-white z-1 col-2 row-1 m-1 rounded-full"
          />
          <Image
            loading="eager"
            src="https://placecats.com/neo/300/200"
            alt="Cat picture"
            width={300}
            height={200}
            className="z-0 col-start-1 col-end-3 row-start-1 row-end-3 grid w-40 rounded-lg"
          />

          <div className="col-start-1 col-end-3 grid items-center justify-between gap-1 p-1">
            <h2 className="font-bold">Name</h2>
            <h3 className="text-dark-text col-2">Age</h3>
            <h3 className="text-dark-text">Race</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PetList;
