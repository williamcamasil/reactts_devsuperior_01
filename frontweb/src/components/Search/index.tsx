import './styles.scss';
import 'bootstrap/js/src/collapse';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Encontre um perfil Github</h2>
      <input type="text" name="" id="" placeholder="Usuário Github" />
      <Button text="Encontrar" onClickButton={() => navigate('/after')} />
    </div>
  );
};

export default Search;
