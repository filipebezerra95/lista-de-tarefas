import { useState } from "react";
import Nochecked from "./Nochecked.svg"
import Checked from "./Checked.svg"

function Checkbox(props) {
    const [isChecked, setIsChecked] = useState(props.isChecked);

    const onClickCheckbox = () => {
        setIsChecked(!isChecked);
        props.onCheck(!isChecked);
    };

    return (
        <img 
            style={{ marginBottom: isChecked ? "3px" : ""}}
            src={isChecked ? Checked : Nochecked}
            onClick={onClickCheckbox}
            alt="Checkbox"
        />
    );
}

export default Checkbox;