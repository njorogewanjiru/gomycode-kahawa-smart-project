// import { useState } from "react";
// import { FaTrash } from "react-icons/fa";

// export function InputsSection() {
//   const [inputs, setInputs] = useState([
//     { id: 1, name: "Fertilizer", quantity: 20 },
//     { id: 2, name: "Pesticide", quantity: 10 },
//   ]);

//   const handleDeleteInput = (id: number) => {
//     setInputs(inputs.filter((input) => input.id !== id));
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
//       <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">☑️ Inputs</h2>
//       <table className="w-full text-left border">
//         <thead>
//           <tr className="border-b">
//             <th className="p-2">#</th>
//             <th className="p-2">Name</th>
//             <th className="p-2">Quantity</th>
//             <th className="p-2 text-right">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {inputs.map((input, i) => (
//             <tr key={input.id} className="border-b hover:bg-gray-50">
//               <td className="p-2">{i + 1}</td>
//               <td className="p-2">{input.name}</td>
//               <td className="p-2">{input.quantity}</td>
//               <td className="p-2 text-right">
//                 <button
//                   onClick={() => handleDeleteInput(input.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <FaTrash />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
