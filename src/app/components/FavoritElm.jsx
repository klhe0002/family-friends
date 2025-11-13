"use client";
import useStore from "../store/favorit";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const FavoriteElm = ({ id }) => {
  const { favorite, toggleFavorite } = useStore();
  console.log(favorite);
  if (favorite.includes(id)) {
    console.log("Favorite:", id);
    return (
      <CiStar
        onClick={() => toggleFavorite(id)}
        className="color-white z-1 col-5 row-1 m-5 w-7 justify-items-end rounded-full bg-black/20 p-1 backdrop-blur-md"
      />
    );
  } else {
    console.log("Not Favorite:", id);
    return (
      <FaStar
        color="black"
        onClick={() => toggleFavorite(id)}
        className="color-white z-1 col-5 row-1 m-5 w-7 justify-items-end rounded-full bg-black/20 p-1 backdrop-blur-md"
      />
    );
  }
};

export default FavoriteElm;
