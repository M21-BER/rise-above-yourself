import React from "react";

const Collection = () => {
  return (
    <div className="flex flex-wrap bg-black">
      <a
        href="/categories/sandy-beaches/"
        className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
      >
        <div className="relative z-10">Sandy Beaches</div>
        <img
          src="https://images.unsplash.com/photo-1528855275993-0f4a23fedd62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </a>
      <a
        href="/categories/forest-trials/"
        className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
      >
        <div className="relative z-10">Forest Trails</div>
        <img
          src="https://images.unsplash.com/photo-1449495169669-7b118f960251?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </a>
      <a
        href="/categories/city-streets/"
        className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
      >
        <div className="relative z-10">City Streets</div>
        <img
          src="https://images.unsplash.com/uploads/1411070807173e4d6762d/f84a3a01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </a>
    </div>
  );
};

export default Collection;
