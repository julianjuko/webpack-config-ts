import React from 'react'
import './index.scss'
import * as BS from 'react-bootstrap'

interface IProps {
  logo: JSX.Element | null
}

const Greet: React.FC<IProps> = ({ logo }): JSX.Element => {
  return (
    <div className="bg"><BS.Button>Button!!!!</BS.Button></div>
  )
}

export {
  Greet
}
