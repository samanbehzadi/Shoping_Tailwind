import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="container mx-auto h-screen flex flex-col p-6 lg:flex-row lg:items-center lg:mb-0">
        <div className="mx-auto lg:mx-0 lg:mb-0 lg:w-2/3">
          <img src="./images/mouse.jpg" className="rounded-xl lg:top-24 xl:top-0"/>
        </div>
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-right lg:text-6xl"></h1>
          <p className="text-lg text-right text-gray-400 lg:text-2xl lg:mt-0 lg:mx-0"></p>
          <div className="flex w-full justify-end space-x-4 ">
            <a className="text-lg p-4 rounded-lg border-2 hover:bg-[#fafafa] hover:text-black " href="#">بررسی‌ و خرید</a>
            <a className="p-4 text-lg text-black bg-[#fafafa] rounded-lg border-2 " onClick={() => document.getElementById('product').scrollIntoView({behavior: 'smooth'})}>مشاهده محصولات</a>
          </div>
        </div>
      </div>
    </section>
  );
}
