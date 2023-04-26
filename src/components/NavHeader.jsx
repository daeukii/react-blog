import React from 'react'
import { Link } from 'react-router-dom'

// 리액트 부트스트랩 사용
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/** 라우터의 Link과 부트스트랩을 이용해서 작성
 * 1. 예시를 들고와서 그대로 확인
 * 2. 예시를 수정하여 바뀌는 부분, 수정되는 부분 확인
 * 
 * 리액트 부트스트랩에서 확인한 css 디자인
 * 클래스 이름 > 컴포넌트 이름과 동일하게 작성해둠
 *    > 그 컴포넌트의 디자인을 쓰고싶을때 이름을 css에 검색해서 확인
 * 
 * 마진, 패딩에 관한 클래스 이름
 *  m :전체 마진, my:위아래 마진, mx:좌우 마진, mt/mb 위/아래, me/ms 오른쪽/왼쪽
 *  1~5 : 숫자가 클수록 간격이 넓어짐
 *  패딩은 m 대신에 p 사용
 */
export default function NavHeader() {
  return (
    <div>
        <Navbar bg='primary' variant='dark'>
            <Container>
                <Link className='navbar-brand'>블로그</Link>
                <Nav className='me-auto'>
                    <Link to='/' className='nav-link'>홈</Link>
                    <Link to='/boardlist' className='nav-link'>게시판</Link>
                    <Link to='/loginform' className='nav-link'>로그인</Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}
