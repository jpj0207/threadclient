import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import Header from './Header';

const ThreadList = () => {

    // thread불러오기
    const [Threads,setThreads] = useState([]);
    const { board } = useParams();
    const server_URL = `https://threadserver.netlify.app/${board}`
    
    const fetchData = async()=>{
        const res = await axios.get(server_URL)
        setThreads(res.data);
    };
    useEffect(()=>{fetchData()},[]); //한번만 실행되도록(setTHread하면 렌더, 모든 코드 다시 실행, 그럼 또 setThread....)
    return (
        <div>
            <Header></Header>
            <h2>
                <Link to={`/${board}/write`} className="link">
                    thread 추가
                </Link>
            </h2>
            <h3>목록</h3>
            {/* threads.map으로 리스트 만들기 */}
                <ul type="none">
                    {Threads.map((Thread)=>(
                        <li key={Thread._id}>
                            <Link to={`/${board}/thread/${Thread.id}`}>{Thread.title}</Link>
                        </li>
                    ))}
                </ul>
        </div>
    );
};

export default ThreadList;

//url파싱 :board값 받기, board값에 맞는 threadlist 백엔드에 요청, threadlist 정렬
//thread값으로 detail로 사용자정의 css전달 
//board이름 헤더 밑에 보여주고 링크 걸어서 threadlist(선택한board)로 오게하기=>Thread.js,postThread.js에도 적용
//언급은 >>1234 언급된거는 thread옆에 ex)강현씨 떨여졌나요?<<1234 / >>1234 칠팔이횽이떨어진건당연...[더보기]