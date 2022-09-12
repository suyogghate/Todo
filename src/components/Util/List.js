import React, {useState, useEffect} from 'react'
import ListItem from './ListItem'
import './List.css';
// import React, {useState} from 'react';

const Local_Strorage_Key = 'react-app-acciojob-todo';

function List() {
  //All todo
  const [todos, setTodos] = useState([]);

  useEffect(() =>{
      const storedTodos = JSON.parse(localStorage.getItem(Local_Strorage_Key));
      if(storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    if(todos.length > 0)
      localStorage.setItem(Local_Strorage_Key, JSON.stringify(todos));
  }, [todos]);

  //delete items in the list
  function deleteItem (id){
      setTodos(todos.filter((todo) => todo.id !== id));
  }
  
  // todo input
  const [todoInput, setTodoInput] = useState('');

  const handleInput = (e) => {
    setTodoInput(e.target.value);
  }
  
  const handleSubmit = (e) => {
    if(todoInput === '') return;
    setTodos([
      {
        id: Math.random() * 100,
        text: todoInput
      },...todos
    ]);

    setTodoInput('');
  }

  return (
    <div className='list-container'>

      {/* TODO FORM  */}
      <div className='todo-input-form'>
        <input type="text" placeholder='Add a todo' onChange={handleInput} value={todoInput} />
        <button onClick={handleSubmit}>Add Todo</button>
      </div>
      
      {/* dynamic rendering - data driven rendering */}
      {
        todos.map( 
          todo => <ListItem text={todo.text} id={todo.id} deleteItem={deleteItem}/>
        )
      }

    </div>
  )
}

export default List