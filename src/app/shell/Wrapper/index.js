import React from 'react'

const Wrapper = props => {
  return (
    <div className='page-container'>
        <div className='page-wrapper'>
            {props.children}
        </div>
    </div>
  )
}

export default Wrapper