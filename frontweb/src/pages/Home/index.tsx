import YellowCar from '../../assets/cars/yellowcar.svg';
import './styles.scss';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-panel">
        <img src={YellowCar} alt="Yellow Car" />
        <div className="main-content">
          <h1>O Carro perfeito para você</h1>
          <div className="content">
            <span>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </span>
          </div>
        </div>
      </div>
      <div className="catalog-button">
        <Button text="VER CATÁLOGO" onClickButton={() => navigate('/cars')} />
        <span>Comece agora a navegar</span>
      </div>
    </>
  );
};

export default Home;
