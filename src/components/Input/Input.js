import "./InputStyle.css";
import React from "react";

import cn from 'classnames'

const Input = ({ error, label, description, ...inputProps }) => {
    return (
        <>
            <label htmlFor="search"><h5>{label}</h5></label>
            <div className="divFormSearch">
                <input {...inputProps} className={cn({ 'forErrorBorder': error })}
                />
                {<h6 className={cn({ 'forErrorDescription': error })}>{description}</h6>}
            </div>
        </>
    );
};

export default Input;