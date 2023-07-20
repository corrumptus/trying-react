import { React } from 'react';

function pickColor(number) {
    if (number >= 6)
        return "green";
    if (number >= 4)
        return "blue";
    return "red";
}

export default function Card({ aluno, remove }) {
    let nota1 = aluno["nota1"];
    let nota2 = aluno["nota2"];
    let nota3 = aluno["nota3"];
    let media = Math.floor((nota1+nota2+nota3)/3);

    return (
        <div className='div--card'>
            <h2>{aluno.id}</h2>
            <div className='div--card_notas'>
                <p style={{'color': pickColor(nota1)}}>Nota 1: {nota1}</p>
                <p style={{'color': pickColor(nota2)}}>Nota 2: {nota2}</p>
                <p style={{'color': pickColor(nota3)}}>Nota 3: {nota3}</p>
                <p style={{'color': pickColor(media)}}>Media: {media}</p>
            </div>
            <button onClick={remove}>Deletar</button>
        </div>
    );
}