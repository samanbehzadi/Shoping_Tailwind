import React from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Intro from './Components/Intro/Intro'
import Product from './Components/Product/Product'
import Category from './Components/Category/Category'
import Accordion from './Components/Accordion/Accordion'
import Newsletter from './Components/NewsLetter/NewsLetter'

export default function App(){
  const accordionItems = [
    {
      title: "چگونه میتوانم سفارشم را پیگیری کنم؟",
      content: "This is the content of Accordion Item 1.",
    },
    {
      title: "چطور میتوانم سفارشم را لغو کنم؟",
      content: "This is the content of Accordion Item 2.",
    },
    {
      title: "چطور درخواست خود را برای اصلاح کالا عنوان کنم؟",
      content: "This is the content of Accordion Item 3.",
    },
  ];
  return (
    <div className="dark overflow-x-hidden font-vazirmatn antialiased bg-[#120e45] text-[#fafafa]">
      <Nav />
      <Intro />
      <Product />
      <Category />
      <Accordion items={accordionItems}/>
      <Newsletter />
    </div>
  )
}