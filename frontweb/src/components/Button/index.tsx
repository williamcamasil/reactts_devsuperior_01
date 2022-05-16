import './styles.scss';

interface Description {
  text: string;
}

const Button = (props: Description) => {
  return (
    <>
      <button>{props.text}</button>
    </>
  );
};

export default Button;
