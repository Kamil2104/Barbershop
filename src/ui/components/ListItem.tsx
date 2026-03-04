import React from 'react'

import type { OpenHours } from '@/types/openHours'

const ListItem: React.FC<{ item: OpenHours }> = ({ item }) => {
  return (
    <li className='flex justify-between flex-row md:flex-col lg:flex-row flex-wrap w-fit md:w-full border-b border-border-subtle pb-2 gap-1 md:gap-1'>
        <span> {item.day}: </span>
        <span> {item.hours} </span>
    </li>
  )
}

export default ListItem