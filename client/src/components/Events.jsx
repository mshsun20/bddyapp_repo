import React from 'react'
import axios from 'axios'
import Server from '../Server'
import { NavLink } from 'react-router-dom'

const Events = () => {

  return (
    <>
      <div>
        <div className="evnt">All Events</div>
        <div className="evntlnks">
          <NavLink to='/addevnt'>Add New Events</NavLink>
        </div>
      </div>
    </>
  )
}

export default Events