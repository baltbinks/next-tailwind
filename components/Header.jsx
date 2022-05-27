import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-center h-12 border border-blue-400">
      <div className="border border-red-800 w-4/5 text-center flex justify-around items-center">
        <p>Logo</p>
        <ul className="w-3/5 flex justify-around border border-blue-500">
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
        <button type="button" className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Connect</button>
      </div>
    </div>
  );
}
