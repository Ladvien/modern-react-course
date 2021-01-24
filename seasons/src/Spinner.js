import React from 'react';

const Spinner = (props) => {
  return ( 
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  )
}

// ✅ This is how default properties should be set.
// ❌ Not using OR statements in line. 
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;