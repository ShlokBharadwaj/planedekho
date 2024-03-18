import { CustomFilterProps } from "@/types"
import React from 'react'

const CustomFilter: React.FC<CustomFilterProps> = ({ title }) => {
  return (
    <div>{title}</div>
  )
}

export default CustomFilter