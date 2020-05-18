import React from 'react';

 const Bad = (props) => {
  if (props.bad.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      bad: {props.bad}
    </div>
  )
}
export default Bad;