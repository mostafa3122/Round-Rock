import React from 'react'
import ServicesCard from '../../components/shared/ServicesCard'
import SubTitle from '../../components/shared/SubTitle'
import ButtonComponent from '../../components/ui/Button'

export default function Services() {
  return (
    <section className=' container mx-auto  flex flex-col gap-12 justify-center items-center'>
      {/* subtitle */}
      <SubTitle text={"Services"} />
      {/* service card  */}
      
        <ServicesCard />
     
      {/* shared button */}
      <ButtonComponent text={"Help Me"} />
      {/* <ButtonComponent text={"Help Me"} bgColor='#EEC04B' /> */}


    </section>
  )
}
