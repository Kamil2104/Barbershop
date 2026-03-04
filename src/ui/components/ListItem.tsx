import React from 'react'

import type { OpenHours } from '@/types/openHours'

const ListItem: React.FC<OpenHours> = ({ day, hours }) => {
  return (
    <li className='flex justify-between flex-row md:flex-col lg:flex-row flex-wrap w-fit md:w-full border-b border-border-subtle pb-2 gap-1 md:gap-1'>
        <span> {day}: </span>
        <span> {hours} </span>
    </li>
  )
}

export default React.memo(ListItem)