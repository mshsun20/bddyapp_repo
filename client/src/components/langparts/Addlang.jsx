import { useState } from 'react'
import axios from 'axios'
import Server from '../../Server'

const Addlang = () => {
    const [val, setVal] = useState({})
    let name, value
    
    const hndlchng = (e) => {
        name = e.target.name
        value = e.target.value
        setVal({...val, [name]:value})
    }

    const pushData = async (e) => {
        e.preventDefault()
        const {langname, langdet} = val

        try {
            const res = await axios.post(`${Server}/lang`, {langname, langdet})
            const data = await res.data
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <div>
            <form className='langform'>
                <div className="frmgrp">
                    <label htmlFor="langname">Language:</label>
                    <input type="text" name="langname" id="langname" onChange={hndlchng} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="langdet">Language Details:</label>
                    <input type="text" name="langdet" id="langdet" onChange={hndlchng} />
                </div>
                <div className="frmsub">
                    <input type="submit" value="Add" onClick={pushData} />
                </div>
            </form>
        </div>
    </>
  )
}

export default Addlang