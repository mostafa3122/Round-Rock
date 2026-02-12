import React from 'react';
import services1 from "../../assets/services1.webp";
import services2 from "../../assets/services2.webp";
import services3 from "../../assets/services3.webp";
import ServicesCardItem from './ServicesCardItem';

const serCardItem = [
  {
    id: 1,
    img: services1,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    id: 2,
    img: services2,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    id: 3,
    img: services3,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },

]
export default function ServicesCard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3 ">
        {serCardItem.map((service) => (
          <ServicesCardItem key={service.id} img={service.img} title={service.title} desc={service.desc} />
        ))}
      </div>
    </>
  )
}
