import React from 'react'

export const Admin = ({ user }) => {
  const isAdmin = user && user.email === 'joshua.aarond@gmail.com'
  return isAdmin ? (
    <div className='admin-alert'>
     Welcome {user.displayName || user.email}
    </div>
  ) : null
}
