export const validateForm = (todoName) => {
    if (todoName.length === 0) {
        return "Обязательное для заполнения поле"
    }
    if (todoName.length < 6) {
        return "Недостаточно символов для заполнения"
    }
    if (todoName.length > 20) {
        return "Превышено количество символов для заполнения"
    }

    return "";
}