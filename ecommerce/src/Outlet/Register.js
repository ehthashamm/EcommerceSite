import React from 'react'
import { Outlet } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <section >
        <Outlet />
      </section>
    </div>
  )
}

export default Register;