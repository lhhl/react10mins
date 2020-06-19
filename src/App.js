import React from 'react'
import './App.css'
import Table from './components/Table'
import events from './events'

const App = () => {

  return (
    <section className="main">
      <Table data={ events } />
    </section>
  )
}

export default App