"use server";
import { resolve } from "styled-jsx/css";

//

export const submitProduct = async (prevState, formData) => {
  //
  const error = {}; //så vi kan opadatere error fra addproduct
  const productname = formData.get("productname"); //en variable som vi gerne vil modtage, skal hedde det samme som fra vores form
  const price = String(formData.get("price") || "").trim();
  const description = String(formData.get("description") || "").trim();

  if (!productname) {
    //udgårstegnet er hvis ikke productname
    error.productname = "Type Product Name!";
  } else if (productname.length < 5) {
    error.productname = "Must be at least 5 charecters";
  }

  if (!price) {
    error.price = "Type a price!";
  } else if (isNaN(Number(price))) {
    error.price = "Type a valid price!";
  }

  if (!description) {
    error.description = "Type a price!";
  } else if (description.length < 10) {
    error.description = "price must be at least 10 characters";
  }

  if (Object.keys(error).length > 0) {
    return { error, productname, price };
    // return state;
  }
  //   await new Promise((resolve) => setTimeout(resolve, 2000)); //for at teste og se hvordan submitting ser ud
  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: productname, //dette er en variabel
      price: price,
      description: description,
    }),
  });

  console.log(response);
  //   state.succes = response.ok;
  //   return state;

  return { succes: response.ok }; //når der rammes et return så hopper den ud af functionen, derfor kan der være to
};


