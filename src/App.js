import React from 'react'
import './App.css'
import events from './events'

const App = () => {

  const statusBadge = key => {
    const statusClassMap = [
      {
        name: 'Upcomming',
        class: 'success'
      },
      {
        name: 'Expired',
        class: 'danger'
      }
    ]
    const statusTemplate = statusClassMap[key]
    return (
      <span className={ `badge badge-${statusTemplate.class}` }>
        { statusTemplate.name }
      </span>
    )
  }

  const contentRow = events.map((event, index) => (
    <tr key={ index }>
      <td>{ index + 1 }</td>
      <td>{ event.eventName }</td>
      <td>{ new Date(event.duration * 1000).toString() }</td>
      <td>
        { statusBadge(event.duration > new Date().getTime() / 1000 ? 0 : 1) }
      </td>
    </tr>
  ))

  return (
    <section className="main">
      <input type="search" className="main__search-box" placeholder="Search..."/>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Event</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          { contentRow }
        </tbody>
      </table>

    </section>
  )
}

export default App