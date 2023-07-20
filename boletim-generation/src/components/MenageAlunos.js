import React from "react";

function isNumeric(str) {
    if (typeof str != "string")
        return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

export default function MenageAlunos(manageAttr) {
    function handleChange(event) {
        manageAttr.menageChange(value => {
            let valor = event.target.value;

            if (isNumeric(valor))
                return parseFloat(valor);
            return 0;
        });
    }

    function handleClick() {
        manageAttr.addCard(manageAttr.quantidade);
        manageAttr.menageChange(0);
    }

    return (
        <div className='menage--inputs'>
            <div className='menage--text'>
                <input
                    type="number"
                    value={manageAttr.quantidade}
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Cadastrar</button>
            </div>
            <div className='menage--buttons'>
                <button onClick={() => manageAttr.addCard()}>Adicionar</button>
                <button onClick={manageAttr.remove}>Remover</button>
                <button onClick={manageAttr.removePiorMedia}>Remover pior média</button>
            </div>
        </div>
    );
}