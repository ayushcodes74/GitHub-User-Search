import React from "react";
import { useState } from "react"

function App () {
  const [search,setSearch]=useState("")

  function handleSubmit() {
   console.log(search)
   setSearch("")
  }

  function handleChange(event) {
         setSearch(event.target.value)
  }
  return (
    <div>
      <h1>GitHub User Search</h1>
      <input type="text" placeholder="Enter Username" onChange={handleChange} value={search}></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )

}
export default App;
