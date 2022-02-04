import classes from './Input.module.css';
import { useRef } from 'react';

const Input = props => {
    return (
        <div className={classes.form_control}>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                name={props.name} 
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}/>
        </div>
    )
};

export default Input;