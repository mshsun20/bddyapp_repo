import React from 'react'
import axios from 'axios'
import Server from '../Server'
import { NavLink } from 'react-router-dom'

const Contacts = () => {
  return (
    <>
        <div>
            <div className="cnt">
              <div className="hdr">Existing Contacts List</div>
            </div>
            <div className="cntlnks">
                <NavLink to='/addcont'>Add New Contacts</NavLink>
            </div>
        </div>
    </>
  )
}

export default Contacts