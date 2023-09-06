import Card from "../Card/Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.closeModal}>
      <div className={`${classes["modal"]}`} style={{ height: props.height ? props.height : '', marginTop: props.marginTop ? props.marginTop : "" }}>
        <Card maxWidth={props.maxWidth} height={props.height}>{props.children}</Card>
      </div>
    </div>
  );
};

export default Modal;
