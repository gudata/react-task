import React from "react";
import ReactDOM from "react-dom";

function filterArray(array){
  let uniqueArr = [];
  for(let i = 0; i < array.length; i++){
    const curr = array[i];
    const next = array[i+1];
    if(curr !== next){
      uniqueArr.push(curr);
    }
  }
  return uniqueArr;
}

const App = () => {
  return (
    <div>
      {filterArray([1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 5])}
      <p>React here!</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App/>, document.getElementById("app"));