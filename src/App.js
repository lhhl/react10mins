import React from 'react'
import './App.css';

const App = () => {
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
          <tr>
            <td>1</td>
            <td>React workshop</td>
            <td>Jun 19, 2020 - 12:00</td>
            <td>Ongoing</td>
          </tr>
        </tbody>
      </table>

    </section>
  )
}

export default App