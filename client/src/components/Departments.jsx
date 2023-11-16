import { useState, useEffect } from 'react'
import axios from 'axios'
import Server from '../Server'
import { NavLink } from 'react-router-dom'

const Departments = () => {
  const [dpt, setDpt] = useState()

  const getDept = async () => {
    try {
      const res = await axios.get(`${Server}/dept`)
      const data = await res.data.data
      // console.log(data)
      setDpt(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getDept()
  }, [])

  return (
    <>
        <div>
            <div className="dpt">
              <div className="hdr">All Departments List</div>
              <div className="lst">
                <table className='tbl' border={1}>
                  <thead>
                    <tr>
                      <th>Department</th>
                      <th>Info</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (dpt) ? dpt.map((elm, i) => (
                        <tr key={i}>
                          <td>{elm.deptname}</td>
                          <td>{elm.deptinfo}</td>
                          <td>_</td>
                          <td>x</td>
                        </tr>
                      )) : null
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="dptlnks">
                <NavLink to='/adddept'>Add New Departments</NavLink>
            </div>
        </div>
    </>
  )
}

export default Departments