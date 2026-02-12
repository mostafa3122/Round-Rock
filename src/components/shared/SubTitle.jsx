export default function SubTitle({ text }) {
    return (
        <h2 className=" section-title relative mt-10 sm:mt-14 lg:mt-[70px] text-center">
            {/* left side */}
            <span className=" absolute w-3 sm:w-4 lg:w-[46px] h-0.5 
            rotate-[-45deg] top-2 left-[-16px] 
            sm:left-[-20px] lg:left-[-25px] bg-[#6D91EE]" />


            <span className=" absolute w-3 sm:w-4 lg:w-[46px] h-0.5
             rotate-[45deg] bottom-2 left-[-16px] 
             sm:left-[-20px] lg:left-[-25px] bg-[#6D91EE]" />

            {/* right side */}
            <span className=" absolute w-3 sm:w-4 lg:w-[46px] h-0.5
             rotate-[45deg] top-2 right-[-16px]
              sm:right-[-20px] lg:right-[-25px] bg-[#6D91EE]" />

            <span className=" absolute w-3 sm:w-4 lg:w-[46px] h-0.5
             rotate-[-45deg] bottom-2 right-[-16px] 
             sm:right-[-20px] lg:right-[-25px] bg-[#6D91EE]" />

            {/* TEXT */}
            <p className=" font-bold text-[#6D91EE] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight lg:leading-[90px]" >
                {text}
            </p>
        </h2>
    )
}
