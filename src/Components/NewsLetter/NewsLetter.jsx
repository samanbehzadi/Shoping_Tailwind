import React from "react";

export default function Newsletter() {
  return (
    <>
      <section className="bg-[#1b1b1b]">
        <div className="max-w-lg mx-auto py-24">
          <h2 className="px-3 mb-4 text-3xl font-semibold text-center text-white md:text-4xl">
            آخرین اخبار سایت
          </h2>
          <h4 className="text-center py-4">برای اشتراک در خبرنامه لطفا ایمیل خود را وارد کنید</h4>
          <form className="felx flex-col items-start justify-center mx-auto max-w-2xl px-6 space-y-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0">
            <div className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
              <input type="submit" className="inline-flex px-6 py-2 mr-2 rounded-lg border-2 hover:bg-[#fafafa] hover:text-black cursor-pointer focus:outline-none" value='ارسال' />
              <input type="text" className="flex-1 items-center justify-center px-6 py-2 mb-4 rounded-lg text-black focus: outline-none md:mr-3 md:mb-0" placeholder="آدرس ایمیل" />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}