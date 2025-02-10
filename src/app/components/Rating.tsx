import React from 'react'

const Rating = () => {
  return (
    <div className="flex items-center justify-between">
        <div className="md:rating rating-sm">
            <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]" />
            <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]" defaultChecked  />
            <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
            <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
            <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
        </div>
        <div className="flex items-center gap-5 text-black font-medium text-sm">
            <progress className="progress progress-primary h-[8px] w-[125px]" value="70" max="100"></progress>
            70%
        </div>
    </div>
  )
}

export default Rating
