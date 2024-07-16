import { useState, useEffect } from 'react'
import axios from 'axios'

function HomePage() {

  useEffect(() => {
    axios.post("/sign_in", {
      "email": "ben@gmail.com",
      "password": "julia2005",
    }).then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <>
      <h1>Genki Homepage</h1>
    </>
  )
}

export default HomePage;
