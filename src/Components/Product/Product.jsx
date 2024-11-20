import React from "react";

export default function Product() {
  return (
    <>
      <section id="product">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-xl font-semibold text-center md:text-3xl">
            آخرین محصولات
          </h2>
          <p className="max-w-lg mx-auto text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="relative flex flex-col items-center gap-3 max-w-7xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:flex-row">
          <div className="flex flex-col w-full text-center rounded-lg md:w-1/3 bg-[#1a1c1e] transition-transform hover:scale-110">
            <div className="flex justify-center">
              <img src="./images/phone.jpg" className="rounded-t-lg" />
            </div>
            <h5 className="pt-6 mb-2 text-2xl font-bold">phone</h5>
            <div className="flex justify-center gap-1 text-gray-300 text-lg">
              <p>تومان</p>
              <p>100,000</p>
            </div>
            <div className="px-6 pt-8 mb-8">
              <a className="p-2 text-white bg-[#343434] text-lg rounded-lg " href="#">افزودن به سبد</a>
            </div>
          </div>
          <div className="flex flex-col w-full text-center rounded-lg md:w-1/3 bg-[#1a1c1e] transition-transform hover:scale-110">
            <div className="flex justify-center">
              <img src="./images/mouse.jpg" className="rounded-t-lg" />
            </div>
            <h5 className="pt-6 mb-2 text-2xl font-bold">Mouse</h5>
            <div className="flex justify-center gap-1 text-gray-300 text-lg">
              <p>تومان</p>
              <p>100,000</p>
            </div>
            <div className="px-6 pt-8 mb-8">
              <a className="p-2 text-white bg-[#343434] text-lg rounded-lg " href="#">افزودن به سبد</a>
            </div>
          </div>
          <div className="flex flex-col w-full text-center rounded-lg md:w-1/3 bg-[#1a1c1e] transition-transform hover:scale-110">
            <div className="flex justify-center">
              <img src="./images/camera.jpg" className="rounded-t-lg" />
            </div>
            <h5 className="pt-6 mb-2 text-2xl font-bold">Camera</h5>
            <div className="flex justify-center gap-1 text-gray-300 text-lg">
              <p>تومان</p>
              <p>100,000</p>
            </div>
            <div className="px-6 pt-8 mb-8">
              <a className="p-2 text-white bg-[#343434] text-lg rounded-lg " href="#">افزودن به سبد</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
