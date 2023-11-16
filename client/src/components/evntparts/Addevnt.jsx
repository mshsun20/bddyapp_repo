import { useState } from 'react'
import axios from 'axios'
import Server from '../../Server'

const Addevnt = () => {
    const [val, setVal] = useState({})
    let name, value
    
    const hndlchng = (e) => {
        name = e.target.name
        value = e.target.value
        setVal({...val, [name]:value})
    }

    const pushData = async (e) => {
        e.preventDefault()
        const {evttype, evtname, evtdt, evtdur} = val

        try {
        if (!val) {
            const res = await axios.post(`${Server}/contact`, {evttype, evtname, evtdt, evtdur})
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
            <form className='evtform'>
                <div className="frmgrp">
                    <label htmlFor="evttype">Event Type:</label>
                    <select name="evttype" id="evttype" onChange={hndlchng}>
                    <option value="0">----CHOOSE----</option>
                    <option value="">Birthday</option>
                    <option value="">Anniversary</option>
                    <option value="">Custom</option>
                    </select>
                </div>
                <div className="frmgrp">
                    <label htmlFor="evtname">Level:</label>
                    <input type="text" name="evtname" id="evtname" onChange={hndlchng} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="evtdt">Event Date:</label>
                    <input type="text" name="evtdt" id="evtdt" onChange={hndlchng} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="evtdur">Duration:</label>
                    <input type="text" name="evtdur" id="evtdur" onChange={hndlchng} />
                </div>
                <div className="frmsub">
                    <input type="submit" value="Add" onClick={pushData} />
                </div>
            </form>
        </div>
    </>
  )
}

export default Addevnt