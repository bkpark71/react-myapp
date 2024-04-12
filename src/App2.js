//import React from 'react';
import {useState, useEffect} from 'react';
import Button from './Button';

function App() {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState("");
  let onChange = () => 
      setCounter(cur => cur + 1);
  let onNameChange = (event) => {
    setName(event.target.value);
  };
  //console.log("화면이 렌더링되었습니다.");
  useEffect(()=>console.log("화면이 렌더링되었습니다."),[]);
  useEffect(() => console.log("state 값이 변경되었습니다."), [counter,name]);
  return (
    <div className="App">
        <h1>Function Component</h1>
        <p>{counter} times clicked !</p>
        <Button text="Click" onClick={onChange}/>
        <input value={name} onChange={onNameChange} placeholder="이름을 입력하세요" />
    </div>
  )
}

export default App;



// class App extends React.Component {
//   constructor(){  // 컴포넌트가 생성될때마다 호출되는 클래스 생성자 메서드
//     super();
//     this.state = {
//       counter : 0
//     }
//   }

//   componentDidMount = () => {// 화면이 처음 그려질 때 호출
//     console.log("화면이 렌더링되었습니다.")
//   }

//   componentDidUpdate = () => { // 화면이 업데이트될 때 호출
//     console.log("props 값이 변경되었습니다.")
//   }

//   componentWillUnmount = () => {
//     console.log("컴포넌트가 사라질 예정입니다.")
//   }

//   onChange = () => {
//     //this.state.counter = this.state.counter + 1;
//     this.setState(cur => ({counter : cur.counter+1}));
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Class Component</h1>
//         <p>{this.state.counter} times clicked !</p>
//         <button onClick={this.onChange}>Click</button>
//       </div>
//     );
//   }
 
// }

