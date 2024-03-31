import React from 'react'

function Input({ value = "", setValue, inputRef }) {
    return (
        <input
            ref={inputRef}
            type='text'
            value={value}
            placeholder='Drink name...'
            onChange={(e) => {
                setValue(e.target.value)
            }}
        />
    )
}

export default Input