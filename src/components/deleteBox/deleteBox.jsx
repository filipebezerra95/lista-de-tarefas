import React from "react";
import './index.scss'

const DeleteBox = () => {
    return (
        <>
            <div className="boxDelete">
                <h1>Deseja excluir esse item?</h1>
                <p>Colocar as descrições das tarefas aqui.</p>
                <div className="botoes">
                    <button className="no">Não</button>
                    <button className="yes">Sim</button>
                </div>
            </div>
        </>
    )
}

export default DeleteBox