import React from 'react'
import StarIcons from './StarsIcons'



export default function TestimonialsCardItem({ img, title, desc }) {
    return (
        <div className='flex p-[30px] gap-3.5 rounded-[40px] border border-[#6D91EE]  max-w-sm  sm:max-w-[577px]  transition hover:-translate-y-1'>
            {/* Testimonial Image */}
            <div className="testi-img shrink-0">
                <img src={img} alt={title} className='w-20 h-20 object-cover rounded-full mx-auto sm:mx-0 ' />
            </div>
            {/* Testimonial content */}
            <div className=" flex flex-col gap-2.5">
                <div className="content-info">
                    <h3 className='mb-3 font-bold text-lg leading-[22px] text-[#6D91EE]'>
                        {title}
                    </h3>
                    <p className='text-sm leading-[22px] text-[#22366A]'>
                        {desc}
                    </p>
                </div>
                {/* Stars icons */}
                <StarIcons />
            </div>
        </div>
    )
}
