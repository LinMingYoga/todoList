import React, { useContext } from 'react';

function Counter(props) {
  // console.log("props.CountContext", props.val);
  let count = useContext(props.val);
  return (
    <div>
      <h3>{count}</h3>
      {/* <h3>1</h3> */}
    </div>
  );
}

export default Counter