import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { MdOutlineArrowBackIos } from "react-icons/md";

const DetailComponent = () => {
  return (
    <>
      <div className="col-[content] justify-items-center p-4">
        <div className="grid">
          <CiStar
            color="white"
            className="color-white z-1 col-5 row-1 m-5 w-7 justify-items-end rounded-full bg-white/20 p-1 backdrop-blur-md"
          />
          {/* <Image
            loading="eager"
            src="https://placecats.com/neo/300/200"
            alt="Cat picture"
            width={300}
            height={300}
            className="z-0 col-start-1 col-end-6 row-start-1 row-end-4 grid rounded-lg"
          /> */}
          <div className="z-0 col-start-1 col-end-6 row-start-1 row-end-4 grid h-85 w-80 justify-center rounded-4xl bg-amber-200"></div>
          <Link href="/" className="z-1 col-1 row-1">
            <MdOutlineArrowBackIos
              color="black"
              width={50}
              height={50}
              className="color-white z-1 col-1 row-1 m-5 w-7 rounded-full bg-white p-1"
            />
          </Link>

          <div className="align-center z-1 col-start-1 col-end-4 row-3 m-5 flex w-fit justify-center gap-2 self-start rounded-2xl bg-white/20 px-4 py-2 backdrop-blur-md">
            <Image
              loading="eager"
              src="https://placecats.com/neo/300/200"
              alt="Cat picture"
              width={300}
              height={300}
              className="h-10 w-10 rounded-full object-cover"
            />
            <p className="text-white">Race</p>
          </div>
        </div>
      </div>
      <div className="col-[content] grid p-4">
        <h1>Name Lastname</h1>

        <ul className="flex gap-1">
          <li className="bg-button-blue text-text rounded-full px-3 py-1">
            Dog
          </li>
          <li className="bg-button-pink rounded-full px-3 py-1">Male</li>
          <li className="bg-button-green rounded-full px-3 py-1">Young</li>
          <li className="bg-button-yellow rounded-full px-3 py-1">
            Great Dane
          </li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          tempora dolor est ipsa id aut deleniti libero earum debitis ad
          voluptates, sed nobis maiores quas fugiat natus dolorem veniam!
          Reprehenderit!
        </p>

        <h3 className="text-neutral-500">Dato</h3>

        <a
          href="#"
          className="grid content-center rounded-full bg-pink-400 px-5 py-3"
        >
          Adoptor /(name)/
        </a>
      </div>
    </>
  );
};

export default DetailComponent;
