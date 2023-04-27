import React from 'react'
import BoardCard from '../components/BoardCard'

export default function Boardlist({boardlist}) {
  return (
    <div >
      { // 배열을 이용하여 화면에 출력할수 있다
        // map() : return 값을 배열로 전달 
        // {}안에서 return 값은 화면에 바로 출력된다
        boardlist.map((board)=>( 
          // props 값으로 전달할때,
          // 전달되는 값이 배열인지 객체인지 정하기
          // 보통은 객체값을 전달하여 
          // 배열에 있는 내용을 출력
          <BoardCard board={board} key={board.id}/>
        ))
      }
    </div>
  )
}