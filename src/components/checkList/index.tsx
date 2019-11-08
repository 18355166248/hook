import React, { useState } from 'react'
import CheckItem from './checkItem'
import indexStyle from './index.module.scss'
import { CheckListProps, CheckItemProps } from '../interface'

export default function CheckList(props: CheckListProps) {
  const [allCheck, changeAllCheck] = useState(false) // 全选状态
  const [list, changeList] = useState(props.list)

  function changeChecked(allCheck: boolean, type: string | number | undefined) {
    if (type === 'all') {
      const listCopy = list.map((v: CheckItemProps) => {
        v.checked = allCheck
        return v
      })
      changeList(listCopy)
    } else {
      const listCopy = JSON.parse(JSON.stringify(list))
      listCopy[type as number].checked = allCheck
      const listFilter = listCopy.filter((v: CheckItemProps) => !v.checked)

      changeAllCheck(!(listFilter && listFilter.length > 0))
      changeList(listCopy)
    }
  }

  function changeCheckAll(value: boolean) {
    changeChecked(value, 'all')
    changeAllCheck(value)
  }

  return (
    <div className={indexStyle.check_list}>
      {/* 全选 */}
      <div>
        <input
          type="checkbox"
          className="verticalMiddle"
          checked={allCheck || false}
          onChange={e => changeCheckAll(e.target.checked)}
        />
        <span className="verticalSub">全选</span>
      </div>
      {/* 列表 */}

      {list.map((v: CheckItemProps, i: number) => (
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
