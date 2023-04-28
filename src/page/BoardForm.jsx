import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

// 게시물을 작성하고 
// 작성완료 버튼을 누르면 게시물 추가하기
export default function BoardForm({setBoardlist, id, boardlist, user, addId}) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  
  // 게시물을 추가하는 메소드
  const addBoard = (e)=>{
    // submit 이벤트를 사용하면 기본적으로 새로고침이들어가있다
    // 새로고침을 막아주기위해 사용
    e.preventDefault();

    // 1. 새로운 값 작성 - 게시물(동일한 속성)
    const newBoard = {
      id: id ,
      title : title,
      content : content,
      name : user ? user.name : "익명",
      date : "2023-04-28"
    }
    // props 으로 가져온 값(변수)는 원본 값을 바꿀 수 없다.
    // 원본값을 바꿔주려면 부모에서 값을 바꾸는 메소드를
    // 들고와서 실행해야한다.
    addId();

    // 2. 새로운 값이 추가된 새로운 배열 작성
    // 원본배열필요
    const newBoardlist = boardlist.concat(newBoard);

    // 3. 새로운 배열을 set메소드를 이용하여 값 수정
    setBoardlist(newBoardlist)

    // 내용 추가가 끝났다면 게시판으로 이동
    navigate('/boardlist')
  }


  return (
    <div>
      <button onClick={()=>{
        id = id+1;
        console.log(id);
      }}>
        id증가
      </button>

      <Form className='mx-3'onSubmit={ addBoard }>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" 
            onChange={(e)=>{setTitle(e.target.value)}}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} 
            onChange={(e)=>{setContent(e.target.value)}}
          />
        </Form.Group>
        <Button variant="primary" type='submit'>작성완료</Button>
      </Form>
    </div>
  )
}