import React from 'react'
import closeIcon from './close-icon-29.png'
import './Notifications.css'
import { getLatestNotification } from './utils'
const Notifications = () => {
  return (
    <div className='notifications'>
        <p>Here is the list of notifications</p>
        <button
        type="button"
        style={{ position: 'absolute', top: '0.1rem', right: '0.5rem', background: '#ffffff', width: '30px', height: '30px', border: 'none' }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
        >
        <p style={{ fontSize: '30px', position: 'absolute', top: '-2rem', right: '0.3rem',}}>&times;</p>
        </button>
        <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li
            data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
    </div>
  )
}

export default Notifications