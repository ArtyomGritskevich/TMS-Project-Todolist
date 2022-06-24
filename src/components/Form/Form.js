import "./FormStyle.css";
import Button from "../Button";
import Input from "../Input";

import { validateForm } from "./validationHelper/validateForm";
import React, { useState } from "react";


function Form({ onCreateTodo }) {

    const [name, setName] = useState(' ');
    const [error, setError] = useState(validateForm(""));
    const [touched, setTouched] = useState(false);

    const handleBlur = () => { setTouched(true) };

    const handleChange = (e) => {
        setName(e.target.value);
        setError(validateForm(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (error && !touched) {
            setTouched(true);
            return;
        }

        if (!error) {
            onCreateTodo(name);
            setTouched(false);
            setName(" ");
            setError(validateForm(""));
        }
    };

    return (
        <div className="formContainer">
            <Input
                name="name"
                id="create"
                value={name}
                label="Новое задание"
                error={Boolean((touched && error))}
                description={(touched && error)}
                placeholder="Название"
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <div className="divFormButtons">
                <Button
                    onClick={handleSubmit}
                    outlook="contained"
                    size="large"
                    type="submit"
                >Создать
                </Button>
            </div>
        </div>
    )
}

export default Form;

