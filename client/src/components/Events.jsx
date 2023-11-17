import { useState, useEffect } from 'react'
import axios from 'axios'
import Server from '../Server'
import { NavLink } from 'react-router-dom'

const Events = () => {
  const [evt, setEvt] = useState()

  const getEvnt = async () => {
    try {
      const res = await axios.get(`${Server}/evnt`)
      const data = await res.data.data
      // console.log(data)
      setEvt(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getEvnt()
  }, [])

  return (
    <>
      <div>
        <div className="evnt">
          <div className="hdr">All Events</div>
          <div className="lst">
                <table className='tbl' border={1}>
                  <thead>
                    <tr>
                      <th>Event Type</th>
                      <th>Event Description</th>
                      <th>Date</th>
                      <th>Duration</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (evt) ? evt.map((elm, i) => (
                        <tr key={i}>
                          <td>{elm.evnttype}</td>
                          <td>{elm.evntname}</td>
                          <td>{(elm.evntdt+elm.evntdur)}</td>
                          <td>{elm.evntdur}</td>
                          <td>_</td>
                          <td>x</td>
                        </tr>
                      )) : null
                    }
                  </tbody>
                </table>
              </div>
        </div>
        <div className="evntlnks">
          <NavLink to='/addevnt'>Add New Events</NavLink>
        </div>
      </div>
    </>
  )
}

export default Events