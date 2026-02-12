import React from 'react'
import aboutImg from "../../assets/about-img.webp"
import ButtonComponent from '../../components/ui/Button'
export default function About() {
  return (
    <section className=' about-section h-screen mx-auto flex flex-col items-center justify-center  gap-12 lg:gap-16 '>
      <div className="about-section-clip ">
      </div>
      <div className="about-content z-50  text-white mx-auto  flex flex-col lg:flex-row justify-center items-center md:gap-5  xl:gap-10 ">
        <div className="flex flex-col z-50 text-center items-center lg:items-start lg:text-left   lg:w-[583px] gap-4 lg:gap-[30px]   ">
          <h3 className="  font-black text-2xl md:text-4xl lg:text-6xl leading-7 lg:leading-[89.5px]  text-shadow-[0px_5px_10px_#00000030] ">About Us</h3>
          <p className="font-medium  max-w-[538px]  lg:font-bold text-sm lg:text-lg  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          </p>
          <div className="about-img  max-w-[419px] lg:h-[282px]">
            <img src={aboutImg} alt="about image" className='w-full object-cover rounded-[20px]' />
          </div>
        </div>
        <div className="flex flex-col z-50    gap-5 lg:gap-[30px] items-center  lg:items-end text-center lg:text-right  lg:mt-14">
          <h3 className="font-black text-2xl md:text-4xl lg:text-6xl leading-7 lg:leading-[89.5px]  text-shadow-[0px_5px_10px_#00000030] ">Where</h3>
          <p className="font-normal lg:font-semibold text-sm lg:text-lg  
 
  lg:max-w-[494px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

        </div>
      </div>

      <ButtonComponent text={"Help Me"} bgColor='#EEC04B' />



    </section>
  )
}
