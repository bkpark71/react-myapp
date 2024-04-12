import React from 'react';
//import Button from './Button';

class App extends React.Component {
  constructor(){  // 컴포넌트가 생성될때마다 호출되는 클래스 생성자 메서드
    super();
    this.state = {
      counter : 0
    }
  }

  componentDidMount = () => {// 화면이 처음 그려질 때 호출
    console.log("화면이 렌더링되었습니다.")
  }

  componentDidUpdate = () => { // 화면이 업데이트될 때 호출
    console.log("props 값이 변경되었습니다.")
  }

  componentWillUnmount = () => {
    console.log("컴포넌트가 사라질 예정입니다.")
  }

  onChange = () => {
    //this.state.counter = this.state.counter + 1;
    this.setState(cur => ({counter : cur.counter+1}));
  }
  render() {
    return (
      <div className="App">
        <h1>Class Component</h1>
        <p>{this.state.counter} times clicked !</p>
        <button onClick={this.onChange}>Click</button>
      </div>
    );
  }
 
}

export default App;
