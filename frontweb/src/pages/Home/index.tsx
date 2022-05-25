import './styles.scss';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-panel">
        <div className="main-content">
          <h1>Desafio Github API</h1>
          <div className="content">
            <span>Bootcamp Spring React - DevSuperior</span>
          </div>
        </div>
      </div>
      <Button text="Começar" onClickButton={() => navigate('/before')} />
    </>
  );
};

export default Home;
