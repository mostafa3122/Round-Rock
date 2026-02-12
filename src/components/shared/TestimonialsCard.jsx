import React from 'react'

import testiProfile from "../../assets/testiProfile.webp"

import TestimonialsCardItem from './TestimonialsCardItem'
const testiCardItem = [
  {
    id: 1,
    img: testiProfile,
    title: "Courtney Henry",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
   
  },
  {
    id: 2,
    img: testiProfile,
    title: "Courtney Henry",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
   
  },
  {
    id: 3,
    img: testiProfile,
    title: "Courtney Henry",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
   
  },
  {
    id: 4,
    img: testiProfile,
    title: "Courtney Henry",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
   
  },

]
export default function TestimonialsCard() {
  return (
    <div className='grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-2 '>
      {testiCardItem.map((testimonial) => (
        <TestimonialsCardItem key={testimonial.id} img={testimonial.img} title={testimonial.title} desc={testimonial.desc} />
      ))}
    </div>
  )
}
