import React from 'react'
import classes from './Button.module.css'

export function ButtonGreen({onClick, children}) {
  return (
    <button onClick={onClick} className={`${classes.count__btn} ${classes.green}`}>{children}</button>
  )
}
export function ButtonRed({onClick,children}) {
  return (
    <button onClick={onClick} className={`${classes.count__btn} ${classes.red}`}>{children}</button>
  )
}
