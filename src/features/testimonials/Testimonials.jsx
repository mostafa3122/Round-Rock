import React from 'react'
import SubTitle from '../../components/shared/SubTitle'
import TestimonialsCard from '../../components/shared/TestimonialsCard'

export default function Testimonials() {
  return (
    <section className='container my-16 mx-auto flex flex-col gap-12 justify-center items-center'>
  {/* subtitle */}
      <SubTitle text={"Testimonials"} />

      {/* testimonial card */}
      <TestimonialsCard />

    </section>
  )
}
