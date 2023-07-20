import { React} from 'react';
import { useState } from 'react';
import MenageAlunos from './MenageAlunos';
import Card from './Card';

function randomNota() {
    return Math.floor(Math.random()*11);
}

function getMinAndIndex(alunos) {
    if (alunos.length === 0)
        return {"min": null, "index": -1};

    let minAndId = {"min": 11, "index": -1};

    for (let i in alunos) {
        const nota1 = alunos[i]["nota1"];
        const nota2 = alunos[i]["nota2"];
        const nota3 = alunos[i]["nota3"];

        const media = Math.floor((nota1+nota2+nota3)/3);

        if (minAndId.min > media)
            minAndId = {"min": media, "index": i};
    }

    return minAndId;
}

function reEnumerateAlunos(alunos, index) {
    for (let i = Number(index); i < alunos.length; i++) {
        alunos[i].id = `Aluno ${i+1}`;
    }
}

export default function Main() {
    let [ alunos, setAlunos ] = useState([]);
    let [ quantidade, setQuantidade ] = useState(0);

    function addCard(quantidade = 1) {
        let newCards = [];

        for (let i = 0; i < quantidade; i++) {
            newCards.push({
                "id": `Aluno ${alunos.length+1+i}`,
                "nota1": randomNota(),
                "nota2": randomNota(),
                "nota3": randomNota()
            });
        }

        setAlunos(prevAlunos => [
            ...prevAlunos,
            ...newCards
        ]);
    }

    function removeCard(i = -1) {
        setAlunos(prevAlunos => {
            let newAlunos = [...prevAlunos];
            newAlunos.splice(i, 1);
            i !== -1 && reEnumerateAlunos(newAlunos, i);
            return newAlunos;
        });
    }

    function removePiorMedia() {
        let { index } = getMinAndIndex(alunos);

        removeCard(index);
    }

    return (
        <div className='main'>
            <MenageAlunos
                quantidade={quantidade}
                menageChange={setQuantidade}
                addCard={addCard}
                remove={() => removeCard()}
                removePiorMedia={removePiorMedia}
            />
            <div className='main--cards'>{
                alunos.map((aluno, index) => {
                    return <Card key={index} aluno={aluno} remove={() => removeCard(index)}/>;
                })
            }</div>
        </div>
    );
}