import Button from "../Button";
import "./ListItemStyle.css";
import React, { useState } from "react";
import EditComponent from "../EditComponent";

const ListItem = ({ name, id, onButtonDone, onButtonDelete, onButtonEdit }) => {

    const [showEditInput, setShowEditInput] = useState(false);

    const handleDelete = () => {
        onButtonDelete(id);
    };

    const handleDone = () => {
        onButtonDone(id);
    };

    const handleEdit = (newName) => {
        onButtonEdit(id, newName);

    }

    const handleOpenUpdate = () => {
        setShowEditInput(true);
    }

    const handleEditBack = () => {
        setShowEditInput(false);
    }


    return (<li className="listItem">
        <div className="listItemText">
            <h4>{name}</h4>
        </div>
        <div className="listItemButtons">
            <div className="forEditState">
                {showEditInput && <>
                    <EditComponent
                        onEditRollback={handleEditBack}
                        onEditUpdate={handleEdit}
                        initialValue={name}
                        onClosePanel={handleEditBack} />
                </>}</div>
            {!showEditInput && (<>
                <Button
                    outlook="outlined"
                    size="small"
                    type="button"
                    onClick={handleOpenUpdate}
                >Изменить
                </Button>
                <Button
                    outlook="outlined"
                    size="small"
                    type="button"
                    onClick={handleDone}
                >Выполнено
                </Button>
                <Button
                    outlook="outlined"
                    size="small"
                    type="button"
                    onClick={handleDelete}
                >Удалить
                </Button></>)}
        </div>
    </li>)
}

export default ListItem;