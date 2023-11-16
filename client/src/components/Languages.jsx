import { useState, useEffect } from 'react'
import axios from 'axios'
import Server from '../Server'
import { NavLink } from 'react-router-dom'

const Languages = () => {
  const [lng, setLng] = useState()

  const getLang = async () => {
    try {
      const res = await axios.get(`${Server}/lang`)
      const data = await res.data.data
      // console.log(data)
      setLng(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getLang()
  }, [])

  return (
    <>
        <div>
            <div className="lng">
              <div className="hdr">All Languages</div>
              <div className="lst">
                <table className='tbl' border={1}>
                  <thead>
                    <tr>
                      <th>Language</th>
                      <th>Details</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (lng) ? lng.map((elm, i) => (
                        <tr key={i}>
                          <td>{elm.langname}</td>
                          <td>{elm.langdet}</td>
                          <td>_</td>
                          <td>x</td>
                        </tr>
                      )) : null
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="lnglnks">
                <NavLink to='/addlang'>Add New Languages</NavLink>
            </div>
        </div>
    </>
  )
}

export default Languages