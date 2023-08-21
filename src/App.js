import Hello from "./component/Hello";
import Welcome from "./component/Welcome";



function App() {
  // 변수 (변수는 function 과 return 사이에 집어 넣음)
  const name = "Hong";
  let age = 30;
  let gender = true;
  const naver = {
    name : "네이버",
    url : "https://www.naver.com",
    target : "_blank"
  }

  return (
    <div className="App">
      {/* 컴포넌트 */}
     <Hello></Hello>
     <Welcome></Welcome>
     {/* {변수,숫자,문자열} 사용가능 객체(배열)은 안됨*/}
     <h1> {'이름 : '} {name}, {"나이 : "} {age}</h1>
     <h1> 이름 : {name}, 나이 {age}</h1>
     {/* 객체 {객체이름, 속성} */}
     <h2><a href={naver.url} target={naver.target}>{naver.name}</a></h2>
    </div>
  );
}

export default App;
