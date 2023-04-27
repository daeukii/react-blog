// 리액트 부트스트랩을 사용하기 위해서는 css추가 필요
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './App.css';

// 라우터를 사용할때는 BrowserRouter를 들고와서 사용
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 각각의 페이지를 import 해서 사용
import Homepage from './page/HomePage'
import Boardlist from './page/Boardlist'
import Board from './page/Board'
import BoardForm from './page/BoardForm'
import LoginForm from './page/LoginForm'
import NavHeader from './components/NavHeader';
import { useState } from 'react';

function App() {
  // 데이터를 하위 컴포넌트에 전달하기위해서
  // 상위 컴포넌트에서 데이터를 작성하고 props값을 전달한다
  // 상위 데이터값을 하위에서 공유하기때문에 동일한 값이 출력

  // 유저 데이터 
  // 처음 값 null, "",[], 더미데이터로 내용 확인 후 선택
  // 처음 값을 null 두었을때 주의점
  // null과 undefined는 속성을 가질수 없기때문에
  // 속성에 접근하면 오류가 난다.
  // **확실하게 처음에는 속성에 접근하지 않을때 사용**
  // []배열값을 사용할때 초기값을 null이나 ""으로 두면
  // map() 메소드를 쓸수 없으므로 주의

  // { name: "green" }
  const [user, setUser] = useState(
    null
  );

  const [boardlist, setBoardlist] = useState(
    [
      {
        id:1,
        title : " 첫번째 게시물",
        content : "게시물의 내용을 작성합니다",
        name : "green",
        date : "2023-04-27"
      },
      {
        id:2,
        title : " 두번째 게시물",
        content : "게시물의 내용을 작성합니다",
        name : "blue",
        date : "2023-04-27"
      }
    ]
  );


  // 주소와 페이지(컴포넌트 연결)
  return (
    <div className="App">
      <BrowserRouter>
      {/** NavHeader의 Link를 사용하기위해 BrowserRouter안에 작성  */}
      {/** 상위 데이터 값 사용을 위해 props으로 전달 */}
      <NavHeader user={user}/>

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/boardlist' element={<Boardlist boardlist={boardlist} />}/>
          <Route path='/boardlist/:id' element={<Board boardlist={boardlist} />} />
          <Route path='/boardform' element={<BoardForm />}/>

          <Route path='/loginform' element={<LoginForm setUser={setUser} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;