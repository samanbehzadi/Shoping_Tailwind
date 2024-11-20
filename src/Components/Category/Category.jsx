import React, { useState } from 'react'

export default function Category() {
  const tabs = [
    { id: 1, img: 'tablet.jpg', label: 'تبلت', content: 'با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته' },
    { id: 2, img: 'camera.jpg', label: 'دوربین', content: 'با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله ها در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته' },
    { id: 3, img: 'phone.jpg', label: 'تلفن همراه', content: 'با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته' },
  ]
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  function handleTabChange(tabID) {
    setActiveTab(tabID)
    console.log('Active Tab is: ', activeTab)
  }
  return (
    <>
      <section id='cat'>
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center">دسته‌بندی ها</h2>
          <p className="max-w-md mx-auto text-center"></p>
        </div>
      </section>

      <section>
        <div className="container mx-auto relative mb-32 mt-6 px-6">
          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 md:space-x-10 md:flex-row-reverse">
            {tabs.map(tabItem => (
              <div key={tabItem.id} onClick={() => handleTabChange(tabItem.id)} className={`flex justify-center text-center cursor-pointer md:w-1/3 tab rounded-lg `} data-target='panel-1'>
                <div className={`py-5 ${tabItem.id === activeTab ? ' border-b-4 border-gray-500' : ''}`} data-target='panel-1'>{tabItem.label}</div>

              </div>
            ))}
          </div>
          {tabs.map(tab => tab.id === activeTab ? (
            <div className="flex flex-col py-5 panel panel-1 md:flex-row-reverse md:space-x-7">
              <div className="flex justify-center md:w-1/2">
                <img src={`./images/${tab.img}`} className='relative w-2/3 rounded-lg' />
              </div>
              <div className="flex flex-col space-y-5 md:w-1/3">
                <h3 className='mt-32 text-3xl text-center font-semibold md:mt-0 md:text-right'>{tab.label}</h3>
                <p className='text-center md:text-right'> {tab.content}</p>
                <div className="mx-auto text-right md:mx-0">
                  <a href="#cat" className='p-4 border-2 border-[#fafafa] rounded-lg md:inline-flex hover:bg-white hover:text-black hover:border-2'>بیشتر</a>
                </div>
              </div>
            </div>
          ) : null)}
        </div>
      </section>
    </>
  )
}
