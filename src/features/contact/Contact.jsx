import React from 'react'
import SubTitle from '../../components/shared/SubTitle'
import ContactForm from '../../components/shared/ContactForm'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router'

export default function Contact() {
  return (
    <section className=' my-16  mx-auto flex flex-col gap-12 justify-center items-center'>
      {/* subtitle */}
      <SubTitle text={"Contact Us"} />
      {/* forms */}
      <div className=" container mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-24 ">
        {/* left side */}
        <ContactForm />
        {/* right side */}
        <div className="flex flex-col gap-[30px]  text-sm leading-[100%] text-[#333333]">
          <div className=" flex items-center gap-5">
            <Mail strokeWidth={2} className='text-[#6D91EE] w-6 h-6' />
            <a href='mailto:upskilling.eg1@gmail.com' >upskilling.eg1@gmail.com</a>

          </div>
          <div className=" flex items-center gap-5">
            <Phone strokeWidth={0} className='fill-[#6D91EE] w-6 h-6' />
            <a href='tel:+201154932137'>+20 115 493 2137</a>
          </div>
        </div>

      </div>
    </section>
  )
}
