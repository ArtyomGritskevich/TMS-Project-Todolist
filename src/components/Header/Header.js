import './HeaderStyle.css';
import Button from '../Button';

const Header = ({listCount}) => {
  return (
    <div className="headerContainer">
      <h1 className="title"> Todolist</h1>
      <h4> Количество записей : {listCount}</h4>
      <Button outlook="contained">Изменить язык</Button>
      <Button outlook="contained">Изменить тему</Button>
    </div>
  );
};

export default Header;
