
import React, { useState } from "react";

import Button from "../Button";
import Input from "../Input";


const EditComponent = ({ initialValue, onEditRollback, onEditUpdate, onClosePanel }) => {

    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(
            e.target.value
        );
    }

    const handleUpdateToDo = () => {
        onEditUpdate(value);
        onClosePanel();
    }


    return (
        <div>
            <Input
                value={value}
                placeholder="Новое название"
                onChange={handleChange} />
            <Button
                outlook="outlined"
                size="small"
                type="button"
                onClick={handleUpdateToDo}
            >Перезаписать
            </Button>
            <Button
                outlook="outlined"
                size="small"
                type="button"
                onClick={onEditRollback}
            >Назад
            </Button>
        </div>
    )
}

export default EditComponent;
