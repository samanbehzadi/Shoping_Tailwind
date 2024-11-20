import React from "react";

export default function Nav() {
  return (
    <nav className="w-full mx-auto px-3 bg-stone-800 z-50 fixed">
      <div className="flex items-center justify-between space-x-20 my-2">
        <div className="flex">
          <img src="./images/logo.png" className="w-3/12 rounded-lg" />
          <span className="tracking-[.15rem] pt-[5rem] pl-2 text-3xl font-bold text-gray-800">
            Logo
          </span>
        </div>
        <div className="items-center space-x-10 text-lg md:flex">
          <button onClick={() => document.getElementById('faq').scrollIntoView({behavior: 'smooth'})
            } className="p-2 rounded-lg duration-500 hover:px-8 hover:bg-white hover:text-black"
          >
            سوالات متداول
          </button>
          <button onClick={() => document.getElementById('acc').scrollIntoView({ behavior: 'smooth' })} className="p-2 rounded-lg border-[#fafafa] duration-500 hover:px-8 hover:bg-white hover:text-black"
          >
            حساب کاربری
          </button>
          <button onClick={() => document.getElementById('product').scrollIntoView({ behavior: 'smooth' })} className="p-2 rounded-lg duration-500  hover:px-8 hover:bg-white hover:text-black"
          >
            محصولات
          </button>
          <button onClick={() => document.getElementById('cat').scrollIntoView({ behavior: 'smooth' })} className="p-2 rounded-lg duration-500 hover:px-8 hover:bg-white hover:text-black"
          >
            دسته‌بندی‌‌ها
          </button>
        </div>
      </div>
    </nav>
  );
}
