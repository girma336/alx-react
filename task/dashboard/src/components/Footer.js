import React from 'react'
import './Footer.css'
import { getFooterCopy, getFullyear } from '../utils'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <p>
            School dashboard { }
            {getFooterCopy(true)} - {getFullyear()}
       </p>
      </footer>
    </div>
  )
}

export default Footer