import React from 'react';

 const Neutral = (props) => {
  if (props.neutral.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
       neutral: {props.neutral}
    </div>
  )
}
export default Neutral;