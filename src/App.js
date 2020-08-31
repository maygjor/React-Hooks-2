import React, { useState, useCallback,useMemo } from 'react';
import {Hello} from './Hello';
import {Square} from './Square';
import { UseComputeLongestWord } from './UseComputeLongestWord';
import { useFetch } from './UseFetch';

function App() {
  const [count,setCount]=useState(0);

  const favoriteNums = [7,21,37];
  const increment = useCallback(
    n=>{
      setCount(c=>c+n);
    },[setCount]
  )

  const {data} = useFetch(
    "https://jsonplaceholder.typicode.com/todos");
 
    //usMemo here is preventing the component from rerendering with remaining components except when data changes
    const LongestWord= useMemo(()=>UseComputeLongestWord(data),[data]);
   // const LongestWord=UseComputeLongestWord(data);
  return (
    <div className="App">
     <Hello increment={increment}/>
     <div>count:{count} </div>
     {favoriteNums.map(n=>{
         return <Square increment={increment} n={n} key={n}/>
     })}
     <div>Longest Word</div>
     <button>Only Render Longest Word</button>
     {LongestWord}
    </div>
  );
}

export default App;
