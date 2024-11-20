import React, { useState } from "react";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-5 font-semibold text-3xl text-center">
            سوالات رایج
          </h2>
          <p className="max-w-md mx-auto text-center"></p>
        </div>
      </section>

      <section>
        {items.map((item, index) => (
          <div key={index} className="container mx-auto px-6 mb-2">
            <div onClick={() => toggleAccordion(index)} className="max-w-2xl m-8 mx-auto overflow-hidden">
              <div className="py-1 border-b outline-none group" tabIndex={1}>
                <div className="flex items-center justify-between py-4 transition duration-500 cursor-pointer group ease-in:">
                  {/* <div className="transition duration-500 ease group-focus:-rotate-180"></div> */}
                  <div className={`transition-transform transform ${activeIndex === index ? "rotate-180" : "rotate-0"}`}></div>
                  <div className="text-xl">{item.title}</div>
                </div>
                <div className={`overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in ${
                activeIndex === index ? "block" : "hidden"
              } p-4 text-gray-600`}>
                {/* <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in"> */}
                  <p className="py-2 text-lg text-right text-gray-500">
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}



      </section>


    </>
  );
}
