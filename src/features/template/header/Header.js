import React, { useEffect, useRef, useState } from 'react'
import Input from '../../Input'
import Button from '../../Button';
import './header.css'

function Header() {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  return (
    <header>
      <Input inputRef={inputRef} value={value} setValue={setValue} />
      <Button inputRef={inputRef} type="search" value={value} />
      <Button type="random" value={value} />
    </header>
  )
}

export default Header