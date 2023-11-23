import React from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';

const PostThread = () => {
    const { board } = useParams();
    console.log(board);
    return (
        <>
            <Header></Header>
            <form action={`https://threadserver.netlify.app/${board}/write`} method="post">
                <label htmlFor="title">제목</label>
                <input type="text" name="title" id="title"/>
                <br/>
                <label htmlFor="des">내용</label>
                <textarea name="des" id="des" cols="100" rows="10"></textarea>
                <br/>
                <input type="submit" value="글 작성 완료"/>
            </form>
        </>
    );
};

export default PostThread;

//각 보드마다 최신 id(마지막스레드가몇번인지(가장최신것이 삭제되어도 몇번째인지 남게))