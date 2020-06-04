import React from 'react'

const errorNames = {
    FirebaseError: 'There was an error connecting to Firebase'
}

const errorCodes = {
    'permission-denied': 'Permission denied'
}

const ErrorMessage = ({ error }) => 
    <div style={{ background: 'pink', color: 'red', maxWidth: '500px', padding:'2em', margin: 'auto' }}>
        {errorNames[error.name]}
        <br/>
        {errorCodes[error.code]}
    </div>

export default ErrorMessage