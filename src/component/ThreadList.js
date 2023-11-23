import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const ThreadList = () => {
  const [threads, setThreads] = useState([]);
  const { board } = useParams();
  const server_URL = `https://threadserver.netlify.app/${board}`;

  // fetchData 함수를 외부로 빼서 재사용
  const fetchData = async () => {
    try {
      const res = await axios.get(server_URL);
      setThreads(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Header />
      <h2>
        <Link to={`/${board}/write`} className="link">
          thread 추가
        </Link>
      </h2>
      <h3>목록</h3>
      {/* threads.map으로 리스트 만들기 */}
      <ul type="none">
        {threads.map((thread) => (
          <li key={thread._id}>
            <Link to={`/${board}/thread/${thread.id}`}>{thread.title}</Link>
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