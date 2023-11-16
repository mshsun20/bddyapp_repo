import { useState } from 'react'
import axios from 'axios'
import Server from '../../Server'

const Adddesig = () => {
    const [val, setVal] = useState({})
    let name, value
    
    const hndlchng = (e) => {
        name = e.target.name
        value = e.target.value
        setVal({...val, [name]:value})
    }

    const pushData = async (e) => {
        e.preventDefault()
        const {designame, desiglvl, desiginfo} = val

        try {
            const res = await axios.post(`${Server}/desig`, {designame, desiglvl, desiginfo})
            const data = await res.data
            console.log(data)
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
                    <select name="desiglvl" id="desiglvl" onChange={hndlchng}>
                        <option value="0">----CHOOSE----</option>
                        <option value="L1">Level 1</option>
                        <option value="L2">Level 2</option>
                        <option value="L3">Level 3</option>
                        <option value="L4">Level 4</option>
                        <option value="L5">Level 5</option>
                        <option value="L6">Level 6</option>
                    </select>
                </div>
                <div className="frmgrp">
                    <label htmlFor="desiginfo">Designation Info:</label>
                    <input type="text" name="desiginfo" id="desiginfo" onChange={hndlchng} />
                </div>
                <div className="frmsub">
                    <input type="submit" value="Add" onClick={pushData} />
                </div>
            </form>
        </div>
    </>
  )
}

export default Adddesig