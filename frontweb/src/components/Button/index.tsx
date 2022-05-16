import './styles.scss';

interface DescriptionAction {
  text: string;
  onClickButton?: () => void;
}

const Button = (props: DescriptionAction) => {
  return (
    <>
      <button onClick={props.onClickButton}>{props.text}</button>
    </>
  );
};

export default Button;
