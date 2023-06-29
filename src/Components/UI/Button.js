import classes from './Button.module.css'

import { Fragment } from "react"

const Button =(props)=>
{

    return(
        <Fragment>
            <button className={classes.button} onClick={props.onClick}> 
                {props.label}
            </button>
        </Fragment>
    )
}
export default Button
