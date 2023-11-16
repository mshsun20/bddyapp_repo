import { useState } from 'react'
import axios from 'axios'
import Server from '../../Server'

const Adddept = () => {
    const [val, setVal] = useState({})
    let name, value
    
    const hndlchng = (e) => {
        name = e.target.name
        value = e.target.value
        setVal({...val, [name]:value})
    }

    const pushData = async (e) => {
        e.preventDefault()
        const {deptname, deptinfo} = val

        try {
            const res = await axios.post(`${Server}/dept`, {deptname, deptinfo})
            const data = await res.data
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <div>
            <form className='deptform'>
                <div className="frmgrp">
                    <label htmlFor="deptname">Department Name:</label>
                    <input type="text" name="deptname" id="deptname" onChange={hndlchng} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="deptinfo">Department Info:</label>
                    <input type="text" name="deptinfo" id="deptinfo" onChange={hndlchng} />
                </div>
                <div className="frmsub">
                    <input type="submit" value="Add" onClick={pushData} />
                </div>
            </form>
        </div>
    </>
  )
}

export default Adddept