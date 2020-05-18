import React from 'react';

 const Good = (props) => {
  if (props.good.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      good: {props.good}
    </div>
  )
}
export default Good;