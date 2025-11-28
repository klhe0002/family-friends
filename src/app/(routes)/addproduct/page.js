

import ProductForm from "@/app/components/ProductForm";

// const addProduct = () => {
//   const [state, postProduct] = useActionState(submitProduct, {
//     succes: null,
//     error: {},
//     fields: {},}); //ligsom ved usestate? default værdien er et objekt med property error som indeholder tomt object

const addProduct = () => {

  return (
    <div className="min-h-screen bg-gray-50  items-center justify-center p-6 col-start-2 col-end-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 ">
     <ProductForm />
      </div>
    </div>
  );
};

export default addProduct;
