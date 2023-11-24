import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({ title, onClick }) => {
    return (
        <div style={{ display: 'inline-flex' }}><Button onClick={onClick} style={{ paddingInline: 12, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} size='sm' variant="primary"><svg style={{ marginRight: "5px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>{title}</Button></div>
    )
}

export default CustomButton