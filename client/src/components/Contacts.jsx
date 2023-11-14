import { useState } from 'react'
import axios from 'axios'
import Server from '../Server'

const Contacts = () => {
  const [val, setVal] = useState({deptname:'', deptinfo:''})
  let name, value
  
  const hndlchng = (e) => {
    name = e.target.name
    value = e.target.value
    setVal({...val, [name]:value})
  }

  const pushData = async (e) => {
    e.preventDefault()
    // const {deptname, deptinfo} = val

    try {
      if (!val) {
        const {deptname, deptinfo} = val
        const res = await axios.post(`${Server}/contact`, {deptname, deptinfo})
        const data = await res.data
        console.log(data)
      }
      else {
        alert("Department Name shouldn't be blank.")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
        <div>
          <form className='contform'>
            <div className="frmgrp">
              <label htmlFor="contname">Contact Name:</label>
              <input type="text" name="contname" id="contname" onChange={hndlchng} />
            </div>
            <div className="frmgrp">
              <label htmlFor="contphn">Mobile Number:</label>
              <input type="text" name="contphn" id="contphn" onChange={hndlchng} />
            </div>
            <div className="frmgrp">
              <label htmlFor="contwhtsp">WhatsApp No.:</label>
              <input type="text" name="contwhtsp" id="contwhtsp" onChange={hndlchng} />
            </div>
            <div className="frmgrp">
              <label htmlFor="conteml">Email Id:</label>
              <input type="text" name="conteml" id="conteml" onChange={hndlchng} />
            </div>
            <div className="frmgrp">
              <label htmlFor="company">Company:</label>
              <input type="text" name="company" id="company" onChange={hndlchng} />
            </div>
            <div className="frmgrp">
              <label htmlFor="deptid">Department:</label>
              <select name="deptid" id="deptid" onChange={hndlchng}>
                <option value="0">----CHOOSE----</option>
                <option value="">IT</option>
                <option value="">Branding</option>
                <option value="">Commercial</option>
              </select>
            </div>
            <div className="frmgrp">
              <label htmlFor="desigid">Designation:</label>
              <select name="desigid" id="desigid" onChange={hndlchng}>
                <option value="0">----CHOOSE----</option>
                <option value="">Sr. Manager</option>
                <option value="">Ass. Manager</option>
                <option value="">Jr. Manager</option>
              </select>
            </div>
            <div className="frmgrp">
              <label htmlFor="empcode">Employee Code:</label>
              <input type="text" name="empcode" id="empcode" onChange={hndlchng} />
            </div>
            <div className="frmgrp">
              <label htmlFor="langid">Major Language:</label>
              <select name="langid" id="langid" onChange={hndlchng}>
                <option value="0">----CHOOSE----</option>
                <option value="">English</option>
                <option value="">Hindi</option>
                <option value="">Bengali</option>
              </select>
            </div>
            <div className="frmsub">
              <input type="submit" value="Add" onClick={pushData} />
            </div>
          </form>
        </div>
    </>
  )
}

export default Contacts