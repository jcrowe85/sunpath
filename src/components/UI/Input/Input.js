import classes from './Input.module.css';
import { useRef } from 'react';

const Input = props => {
    let classesInput = `${classes['form-control']} ${!props.isInvalid ? '' : classes['invalid']}`;
    return (
        <div className={classesInput}>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                name={props.name} 
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={props.onBlur}/>
        </div>
    )
};

export default Input;