import React, { useState } from 'react'
import { CheckProps } from '../interface'

export default function CheckItem(props: CheckProps) {
  const { checked, id } = props.item
  console.log(checked, id)
  return (
    <div>
      <div>
        <input
          type="checkbox"
          className="verticalMiddle"
          checked={checked || false}
          onChange={e => props.changeChecked(e.target.checked, props.index)}
        />
        <span>名字-{id}</span>
      </div>
    </div>
  )
}
