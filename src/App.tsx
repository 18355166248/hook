import React from 'react'
import './App.css'
import CheckList from './components/checkList/index'
import { CheckItemProps } from './components/interface'

const App: React.FC = () => {
  const list: Array<CheckItemProps> = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    }
  ]

  return (
    <div className="App">
      <CheckList list={list} />
    </div>
  )
}

export default App
