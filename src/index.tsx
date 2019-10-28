import React from 'react'
import './index.scss'

interface IProps {
  logo: JSX.Element | null
}

const Greet: React.FC<IProps> = ({ logo }): JSX.Element => {
  return (
    <div className="bg">Hello world</div>
  )
}

export {
  Greet
}
