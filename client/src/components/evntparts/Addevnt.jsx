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
        const {evnttype, evntname, evntdt, evntdur} = val

        try {
            const res = await axios.post(`${Server}/evnt`, {evnttype, evntname, evntdt, evntdur})
            const data = await res.data
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <div>
            <form className='evtform'>
                <div className="frmgrp">
                    <label htmlFor="evnttype">Event Type:</label>
                    <select name="evnttype" id="evnttype" onChange={hndlchng}>
                    <option value="0">----CHOOSE----</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Custom">Custom</option>
                    </select>
                </div>
                <div className="frmgrp">
                    <label htmlFor="evntname">Event Description:</label>
                    <input type="text" name="evntname" id="evntname" onChange={hndlchng} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="evntdt">Event Date:</label>
                    <input type="date" name="evntdt" id="evntdt" onChange={hndlchng} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="evntdur">Duration (in Days):</label>
                    <input type="text" name="evntdur" id="evntdur" onChange={hndlchng} />
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