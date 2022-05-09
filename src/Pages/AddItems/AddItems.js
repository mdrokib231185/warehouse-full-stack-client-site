// import React from "react";
// import { useForm } from "react-hook-form";
// import "./AddItmes.css";

// const AddItems = () => {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//     const url = "https://whispering-chamber-57446.herokuapp.com/products";
//     fetch(url, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//       });
//   };

//   return (
//     <div id="from-bg" className="w-50 mx-auto mt-5 mb-5">
//       <h1 className="text-center" id="header-items">
//         {" "}
//         Add Items
//       </h1>
//       <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
//         <input
//           className="mb-3"
//           placeholder="name"
//           {...register("name", { required: true, maxLength: 20 })}
//         />
//         <textarea
//           className="mb-3"
//           placeholder="Description"
//           {...register("description")}
//         />
//         <input
//           className="mb-3"
//           placeholder="Price"
//           type="number"
//           {...register("quantity")}
//         />
//         <input
//           className="mb-3"
//           placeholder="Seller"
//           type="text"
//           {...register("seller")}
//         />
//         <input
//           className="mb-3"
//           placeholder="Photo Url"
//           type="text"
//           {...register("img")}
//         />
//         <input
//           className="mb-3"
//           placeholder="Quantity"
//           type="number"
//           {...register("quantity")}
//         />
//         <input className="btn-bg" type="submit" value="Add Itmes" />
//       </form>
//     </div>
//   );
// };

// export default AddItems;
