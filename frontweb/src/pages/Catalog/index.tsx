import Navbar from '../../components/Navbar';
import Cardcar from '../../components/Cardcar';
import './styles.scss';
import Button from '../../components/Button';

const Catalog = () => {
  return (
    <>
      <Navbar />

      <div className="search">
        <input type="text" placeholder="Digite sua busca" />
        <Button text="BUSCAR" />
      </div>

      <div className="cards">
        <Cardcar />
        <Cardcar />
        <Cardcar />
        <Cardcar />
      </div>
    </>
  );
};

export default Catalog;
