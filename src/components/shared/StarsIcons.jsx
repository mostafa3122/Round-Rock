import React, { useState } from 'react'
import { Star } from 'lucide-react'

export default function StarIcons() {
  // i used it to make srars interactive with user 
  const [activeStars, setActiveStars] = useState(0)
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        strokeWidth={0}
        onClick={() => setActiveStars(i)}
        className={`
          w-[18px] h-[18px] cursor-pointer transition hover:scale-110
          ${i <= activeStars ? 'fill-[#6D91EE]' : 'fill-gray-300'}
        `}
      />
    )
  }

  return (
    <div className="flex gap-2">
      {stars}
    </div>
  )
}
