import React from "react";
import './index.scss'

const AddingBox = () => {
    return (
        <>
            <div className="boxAdding">
                <h1>Deseja editar esse item?</h1>
                <p>Colocar as descrições das tarefas aqui.</p>
                <div className="botoes">
                    <button className="no">Não</button>
                    <button className="yes">Sim</button>
                </div>
            </div>
        </>
    );
}

export default AddingBox