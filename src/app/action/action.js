"use server"; //

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

   if (!description) {
     error.description = "Type a price!";
   } else if (description.length < 10) {
     error.description = "price must be at least 10 characters";
   }


  if (!price) {
    error.price = "Type a price!";
  } else if (isNaN(Number(price))) {
    error.price = "Type a valid price!";
  } 
//   else if (!pricePattern.test(priceRaw)) {
//     error.price = "Price must have two decimals, e.g. 12.34";
//   }


  if (Object.keys(error).length > 0) {
    return { error, productname, price };
  }

  return { succes: true };
};
