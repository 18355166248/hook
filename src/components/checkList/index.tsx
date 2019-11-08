import React, { useState, useEffect } from 'react'
import CheckItem from './checkItem'
import indexStyle from './index.module.scss'
import { CheckListProps, CheckItemProps } from '../interface'

export default function CheckList(props: CheckListProps) {
  const [allCheck, changeAllCheck] = useState(false) // 全选状态
  const [list, changeList] = useState(props.list)
  let start = true
  useEffect(() => {
    changeChecked(allCheck, 'all')
    start = false
  })

  function changeChecked(allCheck: boolean, type: string | number | undefined) {
    if (start) return
    if (type === 'all') {
      list.forEach(v => {
        v.checked = !allCheck
      })
    } else {
      list[type as number].checked = allCheck
      changeList(list)
      console.log(list)
    }
  }

  return (
    <div className={indexStyle.check_list}>
      {/* 全选 */}
      <div>
        <input
          type="checkbox"
          className="verticalMiddle"
          checked={allCheck || false}
          onChange={e => changeAllCheck(e.target.checked)}
        />
        <span className="verticalSub">全选</span>
      </div>
      {/* 列表 */}

      {list.map((v, i) => (
        <CheckItem
          key={v.id}
          index={i}
          item={v}
          changeChecked={changeChecked}
        />
      ))}
    </div>
  )
}
