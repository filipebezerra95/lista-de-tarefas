import AddIcon from "./AddIcon.svg";

function AddButton(props) {
  return <img style={{ cursor: "pointer" }} src={AddIcon} onClick={props.onClick} alt="" />;
}

export default AddButton;