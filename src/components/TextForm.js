import React, { useState } from 'react'

import './TextForm.css'

const TextForm = (props) => {
  const [text, setText] = useState('')

  const handleUpperClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to UpperCase', 'success')
  }

  const handleLowerClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to LowerCase', 'success')
  }

  const handleClearClick = () => {
    setText('')
    props.showAlert('Text Cleared', 'success')
  }

  const handleCopyClick = () => {
    document.getElementById('myBox').select()
    navigator.clipboard.writeText(text)
    props.showAlert('Copied to Clipboard', 'success')
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert('Extra spaces Removed', 'success')
  }

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className={`form-control ${
              props.mode === 'dark' ? 'dark' : 'white'
            }`}
            style={{
              backgroundColor: props.mode === 'dark' ? '#252a2f' : 'white',
              color: props.mode === 'dark' ? 'white' : '#252a2f',
            }}
            value={text}
            placeholder='Enter text here...'
            onChange={handleOnChange}
            id='myBox'
            rows='8'
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1'
          onClick={handleUpperClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1'
          onClick={handleLowerClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1'
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className='btn btn-primary mx-1 my-1'
          onClick={handleCopyClick}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1'
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className='container my-4'>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((el) => el.length !== 0).length} words and{' '}
          {text.length} characters
        </p>
        <p>
          It takes{' '}
          {0.008 * text.split(' ').filter((el) => el.length !== 0).length}{' '}
          minutes to read given text
        </p>
        <h2>Preview</h2>
        <p
          style={{
            // color: text.length > 0 ? 'white' : 'red',
            fontStyle: text.length > 0 ? 'normal' : 'italic',
          }}
        >
          {text.length > 0 ? text : 'Nothing to preview here!'}
        </p>
      </div>
    </>
  )
}

export default TextForm
