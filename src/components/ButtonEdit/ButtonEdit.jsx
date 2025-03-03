import EditIcon from "./editIcon.svg"

function ButtonEdit(props) {

    return (
        <img 
        style={{cursor:"pointer"}} src={EditIcon} onClick={props.onClick} alt=""
        />
    )
}

export default ButtonEdit;