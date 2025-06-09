// import { useState } from "react";

// const showProductDetails = (product, setSelectedProduct) => {
//   setSelectedProduct(product);
// };

// const ProductShowcase = () => {
//   const [imageIndexes, setImageIndexes] = useState(products.map(() => 0));
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleImageChange = (productIndex, direction) => {
//     setImageIndexes((prev) =>
//       prev.map((currIndex, i) => {
//         if (i !== productIndex) return currIndex;
//         const length = products[productIndex].images.length;
//         return direction === "next"
//           ? (currIndex + 1) % length
//           : (currIndex - 1 + length) % length;
//       })
//     );
//   };

//   return (
//     <div className="bg-gray-900 py-26 md:py-16 md:pt-36 min-h-screen">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {products.map((product, idx) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 md:min-h-[400px] text-sm sm:text-base"
//             >
//               <div className="relative overflow-hidden group">
//                 <img
//                   src={product.images[imageIndexes[idx]]}
//                   alt={product.name}
//                   className="w-full h-auto sm:h-48 md:h-64 object-cover transition-opacity duration-500 rounded-md"
//                 />
//                 {/* Left Arrow */}
//                 <button
//                   onClick={() => handleImageChange(idx, "prev")}
//                   className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-gray-700 hover:bg-gray-200 p-1 sm:p-2 rounded-r focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
//                 >
//                   &#8592;
//                 </button>
//                 {/* Right Arrow */}
//                 <button
//                   onClick={() => handleImageChange(idx, "next")}
//                   className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-gray-700 hover:bg-gray-200 p-1 sm:p-2 rounded-l focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
//                 >
//                   &#8594;
//                 </button>
//                 <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
//               </div>
//               <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-2 sm:mt-4">
//                 {product.name}
//               </h3>
//               <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
//                 {product.description}
//               </p>
//               <div className="flex items-center justify-between mt-2 sm:mt-4">
//                 <span className="text-gray-900 font-bold text-base sm:text-lg">
//                   {product.price}
//                 </span>
//                 <button
//                   onClick={() =>
//                     showProductDetails(product, setSelectedProduct)
//                   }
//                   className="bg-gray-900 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-full font-bold hover:bg-gray-800 text-sm md:text-xl w-full sm:w-auto"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Product Details Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
//             <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
//             <p className="text-gray-500">{selectedProduct.description}</p>
//             <div className="flex space-x-2 mt-4">
//               {selectedProduct.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={selectedProduct.name}
//                   className="w-16 h-16 rounded-md"
//                 />
//               ))}
//             </div>
//             <p className="text-gray-900 font-bold mt-4">
//               {selectedProduct.price}
//             </p>
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductShowcase;
