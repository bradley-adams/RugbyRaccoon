import React from 'react'
import {Link} from 'react-router-dom'

const Links = ({active}) => {
  return (
    <div>
      {active === 'Home' ? 'Home' : <Link to='/'>Home</Link>} | {' '}
      {active === 'NPC' ? 'NPC' : <Link to='/NPC'>NPC</Link>} | {' '}
      {active === 'Super' ? 'Super' : <Link to='/Super'>Super</Link>} | {' '}
      {active === 'International' ? 'International' : <Link to='/International'>International</Link>} | {' '}
      {active === 'Login' ? 'Login' : <Link to='/login'>Login</Link>}
    </div>
  )
}

export default Links
