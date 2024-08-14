import React from 'react'

import '../../../styles/CommonSection.css'

const CommonSection = ({title}) => {
  return (
    <div className='common__section'>
        <div className='common'>
            <h1> {title}</h1>
        </div>

    </div>
  )
}

export default CommonSection