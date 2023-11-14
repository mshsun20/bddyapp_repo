import { useState } from 'react'
import axios from 'axios'
import Server from '../Server'

const Designations = () => {
    const [val, setVal] = useState({})
    let name, value
    
    const hndlchng = (e) => {
        name = e.target.name
        value = e.target.value
        setVal({...val, [name]:value})
    }

    const pushData = async (e) => {
        e.preventDefault()
        const {designame, desiglvl, desiginfo, roles} = val

        try {
            if (!val) {
                const res = await axios.post(`${Server}/contact`, {designame, desiglvl, desiginfo, roles})
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
            <form className='desigform'>
                <div className="frmgrp">
                    <label htmlFor="designame">Designation:</label>
                    <input type="text" name="designame" id="designame" onChange={hndlchng} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="desiglvl">Level:</label>
                    <input type="text" name="desiglvl" id="desiglvl" onChange={hndlchng} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="desiginfo">Designation Info:</label>
                    <input type="text" name="desiginfo" id="desiginfo" onChange={hndlchng} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="roles">Roles:</label>
                    <input type="text" name="roles" id="roles" onChange={hndlchng} />
                </div>
                <div className="frmsub">
                    <input type="submit" value="Add" onClick={pushData} />
                </div>
            </form>
        </div>
    </>
  )
}

export default Designations