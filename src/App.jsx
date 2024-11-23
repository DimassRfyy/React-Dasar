// import RestoSigit from "./RestoSigit";

import { useRef } from "react";

function App() {

  const message = useRef(null)

  function submitHandler() {
    alert(`Halo, ${message.current.value}`)
  }

  return (
    <>
      {/* <RestoSigit slogan="Resto Sigit Harga Murah Kualitas Mewah" name="Sigit Cucakruwo"/> */}
      <input type="text" ref={message} placeholder="Masukkan namamu" />
      <button onClick={submitHandler}>Submit</button>
    </>
  )
}

export default App;