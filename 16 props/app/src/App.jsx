import "./App.css";
import Card from "./components/Card";
import Test from "./Test";
import Button from "./components/Button";

function clickButton1(){
  alert('Click Button 1, How are You?')
}

function App() {
  const obj = {
    title:"Test 1",
    time : "8 july"
  }

  return (
    <div className="layout">
      <Card name="Shohel Hossain" profesion = "Full Stack Software Developer, AI Engineer" content={
        <div>
          <h1>Hello</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero quos quod quia, laboriosam amet fugiat illum maiores aperiam at.</p>
        </div>
      }/>

      <Test data={obj} isStudent={true}/>

      <Button title='Save' func={clickButton1}/>

    </div>
  );
}

export default App;
