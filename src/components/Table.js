import React from 'react'
import Badge from './Badge'

const Table = props => {

  const contentRow = props.data.map((event, index) => (
    <tr key={ index }>
      <td>{ index + 1 }</td>
      <td>{ event.eventName }</td>
      <td>{ new Date(event.duration * 1000).toString() }</td>
      <td>
        <Badge mapKey={event.duration > new Date().getTime() / 1000 ? 0 : 1} />
      </td>
    </tr>
  ))

  return (
    <div>
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
    </div>
  )
}

export default Table