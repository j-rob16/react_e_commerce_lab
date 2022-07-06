import React from "react";

function CheckOutBar({checkOut, total}) {
  return (
    <>
      <button onClick={checkOut}>Check Out</button>
      <p>Total: £ {total}</p>
    </>
  )
}

export default CheckOutBar;