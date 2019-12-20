import React from 'react'
import NewPost from './blog/NewPost'

export const Admin = ({ user }) => {
  const isAdmin = user && user.email === 'joshua.aarond@gmail.com'
  return isAdmin ? (
    <div className='admin-bar'>
      <div id='welcome'>Welcome {user.displayName || user.email}</div>
      <NewPost />
    </div>
  ) : null
}
