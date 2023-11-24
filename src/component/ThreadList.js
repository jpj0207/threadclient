import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const ThreadList = () => {
  const [threads, setThreads] = useState([]);
  const { board } = useParams();
  const server_URL = `https://evocative-line-406102.du.r.appspot.com/${board}`;

  // useCallback을 사용하여 fetchData 감싸기
  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(server_URL);
      console.log(res.data);
      setThreads(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [server_URL]); // 의존성 배열에 server_URL 추가

  useEffect(() => {
    fetchData();
  }, [fetchData]); // 의존성 배열에 fetchData 추가

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