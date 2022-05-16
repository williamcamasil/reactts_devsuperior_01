import RedCar from '../../assets/cars/redcar.svg';
import Button from '../../components/Button';
import './styles.scss';

const Cardcar = () => {
  return (
    <>
      <div className="card">
        <img src={RedCar} alt="Carro esportivo da cor vermelho" />
        <h3>Audi Supra TT</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <Button text="COMPRAR" />
      </div>
    </>
  );
};

export default Cardcar;
