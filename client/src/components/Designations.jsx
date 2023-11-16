import { useState, useEffect } from 'react'
import axios from 'axios'
import Server from '../Server'
import { NavLink } from 'react-router-dom'

const Designations = () => {
  const [dsg, setDsg] = useState()

  const getDesig = async () => {
    try {
      const res = await axios.get(`${Server}/desig`)
      const data = await res.data.data
      // console.log(data)
      setDsg(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getDesig()
  }, [])

  return (
    <>
        <div>
            <div className="dsg">
              <div className="hdr">All Designations List</div>
              <div className="lst">
                <table className='tbl' border={1}>
                  <thead>
                    <tr>
                      <th>Designation</th>
                      <th>Level</th>
                      <th>Info</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (dsg) ? dsg.map((elm, i) => (
                        <tr key={i}>
                          <td>{elm.designame}</td>
                          <td>{elm.desiglvl}</td>
                          <td>{elm.desiginfo}</td>
                          <td>_</td>
                          <td>x</td>
                        </tr>
                      )) : null
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="dsglnks">
                <NavLink to='/adddesig'>Add New Designations</NavLink>
            </div>
        </div>
    </>
  )
}

export default Designations