// import React from "react";

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-30 backdrop-blur-md z-50">
//       <div className="w-12 h-12 border-4 white border-t-transparent rounded-full animate-spin-slow"></div>
//     </div>
//   );
// };

// export default Loader;

import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-30 backdrop-blur-md z-50">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin-slow"></div>
    </div>
  );
};

export default Loader;
