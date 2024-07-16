import { Outlet, Navigate } from "react-router-dom";

function Root() {
  return (
    <>
      <Outlet />
      <h1>Genki App Root</h1>
    </>
  )    
}

export default Root;
