import React from 'react';
import Header from './Header';

const Thread = () => {

    //보드 이름에 맞는 파일 속 데이터.json파일의 thread값 가져오기
    const Threadinfo = {
        'id' : '1',
        'title' : 'The Smiths',
        'description' : 'There is a light that never goes out'
    }
    //나중에 CommentList로 대체 할 듯
    const Commentinfo = [{
        'id' : '1',
        'description' : 'Take me out tonight'
    },
    {
        'id' : '2',
        'description' :'Take me anywhere i don\'t care'
    }]

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