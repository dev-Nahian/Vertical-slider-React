import React from 'react'

const SubHeader = ({content, color}) => {
  return (
    <h2 className={`font-BebasNeue text-5xl sm:text-7xl lg:text-[90px] xl:text-[120px] 2xl:text-[170px] font-normal leading-normal text-${color}`}>{content}</h2>
  )
}

export default SubHeader