import { useState, useEffect } from 'react'
import axios from 'axios'
import Server from '../../Server'

const Addcont = () => {
  const [dpt, setDpt] = useState()
  const [dsg, setDsg] = useState()
  const [lng, setLng] = useState()
  const [val, setVal] = useState({deptname:'', deptinfo:''})
  let name, value
  
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
    getDept()
    getDesig()
    getLang()
  }, [])

  const hndlchng = (e) => {
    name = e.target.name
    value = e.target.value
    setVal({...val, [name]:value})
  }

  const pushData = async (e) => {
    e.preventDefault()
    // const {deptname, deptinfo} = val

    try {
      const {deptname, deptinfo} = val
      const res = await axios.post(`${Server}/contact`, {deptname, deptinfo})
      const data = await res.data
      console.log(data)
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
                {
                  (dpt) ? dpt.map((elm, i) => (
                    <option value={elm._id} key={i}>{elm.deptname}</option>
                  )) : null
                }
              </select>
            </div>
            <div className="frmgrp">
              <label htmlFor="desigid">Designation:</label>
              <select name="desigid" id="desigid" onChange={hndlchng}>
                <option value="0">----CHOOSE----</option>
                {
                  (dsg) ? dsg.map((elm, i) => (
                    <option value={elm._id} key={i}>{elm.designame}</option>
                  )) : null
                }
              </select>
            </div>
            <div className="frmgrp">
              <label htmlFor="roles">Roles:</label>
              <input type="text" name="roles" id="roles" onChange={hndlchng} />
            </div>
            <div className="frmgrp">
              <label htmlFor="empcode">Employee Code:</label>
              <input type="text" name="empcode" id="empcode" onChange={hndlchng} />
            </div>
            <div className="frmgrp">
              <label htmlFor="langid">Major Language:</label>
              <select name="langid" id="langid" onChange={hndlchng}>
                <option value="0">----CHOOSE----</option>
                {
                  (lng) ? lng.map((elm, i) => (
                    <option value={elm._id} key={i}>{elm.langname}</option>
                  )) : null
                }
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

export default Addcont