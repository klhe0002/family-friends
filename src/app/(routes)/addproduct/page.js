"use client"; //hver gang der er use foran
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";

const addProduct = () => {
  const [state, postProduct] = useActionState(submitProduct, { error: {} }); //ligsom ved usestate? default værdien er et objekt med property error som indeholder tomt object

  console.log("state", state); //state opdaterer error object med prop hele tiden fra vores action
  return (
    <div className="min-h-screen bg-gray-50  items-center justify-center p-6 col-start-2 col-end-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 ">
        <form action={postProduct} className="space-y-4">
          <div className="grid col-[content]">
            <input
              id="productname"
              name="productname"
              type="text"
              placeholder="Product Name"
              defaultValue={state.productname} //så keg kan beholde det som er skrevet uden at den sletter det
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />

            {state.error?.productname && <p className=" text-sm text-red-600">{state.error.productname}</p>}
            {state.succes && <p>Submitted Succesfully</p>}
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price:
            </label>
            <input
              id="price"
              name="price"
              placeholder="Price"
              defaultValue={state.price}
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows={3}
            />
            {state.error?.price && <p className="mt-1 text-sm text-red-600">{state.error.price}</p>}
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Description:
            </label>
            <input
              id="description"
              name="description"
              placeholder="description"
              defaultValue={state.description}
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows={3}
            />
            {state.error?.description && <p className="mt-1 text-sm text-red-600">{state.error.description}</p>}
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white
                       hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default addProduct;
