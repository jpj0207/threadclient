import React from 'react';
import { Link } from 'react-router-dom';




const BoardList = () => {

    //데이터 불러왔다는 가정
    const Boards = [{
        'id' : 'a',
        'link' : 'free',
        'name' : '자유'
    },
    {
        'id' : 'b',
        'link' : 'meme',
        'name' : '해외밈'
    },
    {
        'id' : 'c',
        'link' : 'kmeme',
        'name' : '국내밈'
    }];



    return (
        <div>
            <h2>목록</h2>
            <ul>
                {Boards.map((Board)=>(
                    <li key={Board.id}>
                        <Link to={`/${Board.id}/`}>{Board.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoardList;