import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../Counter/CounterSlice'; // Update the file path accordingly

export const FetchTodo = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.counter); // Add a return statement
    console.log("Here is data", state);
  return (
    <div>FetchTodo:
        <button onClick={() => dispatch(fetchTodos())}>Click Me!!</button>
        {
            state.isLoading ? <div><h1>Loading....</h1></div> : state.data && state.data.map((item) => {
                return(
                    <div key={item.id}>
                        <p>{item.userId}</p>
                        <h3>{item.title}</h3>
                        {/* <button onClick={()=> dispatch(deleteTodo(item.id))}>Delete</button> */}
                    </div>
                )
            })
        }
    </div>
  )
}
export default FetchTodo;
