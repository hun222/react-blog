/* eslint-disable */
import './App.css';
import React, {useState} from 'react';

function App() {
  
  //ES6 destructuring 문법
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); 
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal]  = useState(false);
  
  // JSX에서 사용할 반복문 map
  var array = [2,3,4];
  var newArray = array.map(a => a*2);
  console.log(newArray);

  // for 사용법
  function 반복된UI() {
    var array = [];
    for(var i=0; i<3; i++){
      array.push(<div>안녕</div>);
    }
    return array;
  }

  function 제목바꾸기() {
    // state가 Object나 Array라면 변경하는 방법
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={제목바꾸기}>버튼</button> */}

    
      {
        // 반복문넣기
        // map() 함수 사용
        글제목.map((글) => {
          return (
          <div className='list'>
          <h3> { 글 } <span onClick={()=>{따봉변경(따봉+1);}}>👍</span> {따봉} </h3>
          <p>2월 18일 발행</p>
          <hr />
        </div>
        )
        })
      }

      <button onClick={() => {setModal(!modal)}}>열고닫기</button>
      
      {/* {
        반복된UI()
      } */}
      {
      // if는 여기서 못쓴다. => 밖에서 쓰면 변수를 쓸수가 없어서?
      // 대신 삼항연산자 쓴다.
      // 자바스크립트 표현식 사용.
      modal === true
      ? <Modal 글제목={글제목}></Modal>
      : null // 텅빈 HTML이라는 뜻
    }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
        <h2>{props.글제목[0]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;