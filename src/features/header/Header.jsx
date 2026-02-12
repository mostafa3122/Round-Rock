
import React from 'react'
import headerBg from '../../assets/headerBg.webp'
import ButtonComponent from '../../components/ui/Button'
export default function Header() {
  return (
    <>
      <header className='header text-center mx-auto bg-white'>

        <div className="  w-full h-screen overflow-hidden relative ">
          <div className="  header-img ">
            <img src={headerBg} alt="header image" className=' w-full h-full object-cover' />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 header-content my-16">
            <div className="text-[#6d91ee] flex items-center justify-center gap-5 ">
              <div className="w-14 h-8 border border-black lg:w-20 lg:h-14">
                <div className="logo-icon w-full h-full text-3xl"></div>
              </div>

              <div className="title flex flex-col pt-3 pb-4 leading-[1.18] ">
                <h3 className='sm:text-2xl  lg:text-5xl'> Round Rock</h3>
                <p className='sm:font-semibold lg:font-extrabold sm:text-sm lg:text-[21px] sm:tracking-[0.2em] lg:tracking-[0.4em] align-middle'>Trush Hauling</p>
              </div>
            </div>
            <div className="header-content-title flex flex-col gap-5  mt-12 md:mt-15 lg:mt-24 items-center justify-center ">
              <p className=" py-2 px-5 md:px-12 bg-[#6D91EE] text-white text-md sm:text-xl md:text-2xl rounded-[20px]  ">Experts</p>
              <div className=" flex flex-col text-[#4f4f4f] leading-[100%] sm:text-xl md:text-4xl xl:text-8xl font-extrabold">
                <span className='font-medium md:font-light xl:font-thin'>Lorem</span>
                Lorem lorem
              </div>
              <div className="md:w-[552px]  about-text text-[#4F4F4F] font-light md:font-medium text-lg leading-6">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the
              </div>

              <ButtonComponent  text={"Help Me"} />


            </div>
          </div>
        </div>

      </header>

    </>
  )
}
