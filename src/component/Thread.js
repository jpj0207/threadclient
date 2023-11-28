import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Header from './Header';

const Thread = () => {
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
            <Header></Header>
            <h3>{Threadinfo.title}</h3>
            <div>
                {Threadinfo.description}
                <div>
                    <form>

                    </form>
                </div>
            </div>
            <div>
                {Commentinfo.map((comment)=>(
                    <p>{comment.id}|{comment.description}</p>
                ))}
            </div>
        </div>
    );
};

export default Thread;