export interface CheckListProps {
  list: Array<CheckItemProps>
}

export interface CheckItemProps {
  id: number
  checked?: boolean
}

export interface CheckProps {
  item: CheckItemProps,
  index: number,
  changeChecked?: any
}
