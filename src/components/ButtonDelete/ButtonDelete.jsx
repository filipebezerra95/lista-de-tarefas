import DeleteIcon from "./deleteIcon.svg"

function ButtonDelete(props) {

    return (
    <img 
        style={{ cursor: "pointer"}} src={DeleteIcon} onClick={props.onClick} alt=""
    />
    )
}

export default ButtonDelete;