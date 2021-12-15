import React from 'react'

export default function ImageUploader() {
    return (
        <div className='general_container'>
            <h1>Upload your iamge</h1>
            <h2>File should be Jpeg ,Png , ...</h2>
            <div className='drag_and_drop'>
                <p>Drag & Drop your image here</p>
            </div>
            <p>Or</p>
            <button>Choose a file</button>
        </div>
    )
}
