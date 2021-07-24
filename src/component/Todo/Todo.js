 import React, { useState } from 'react';
 import './Todo.css';

 const Todo = () => {
    function localData() {
        if(!localStorage.getItem("items")) {
            return [];
        } else {
           return localStorage.getItem("items").split(",");
        }
    }
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(localData());

    const addItem = () => {
        if(inputData) {
            setItems([...items, inputData]);
            localStorage.setItem("items", [...items, inputData]);
            setInputData(''); 
        }
         
    }
    const addItemOnEnter = (e) => {
        if(e.key === 'Enter' && inputData) {
            setItems([...items, inputData]);
            //console.log(items);
            localStorage.setItem("items", [...items, inputData]);
            setInputData(''); 
        }     
    }

    const deleteItem = (id) => {
        const updatedItems = items.filter((item, ind) => {
            
            return id !==ind;
        })
        setItems(updatedItems);
        localStorage.setItem("items", updatedItems);
    }
    
    return (
        <div className="todo">
            <h1>Todo</h1>
            <div className="addItems">
                <input type="text" placeholder="add items" 
                value={inputData}
                onChange={(e) => setInputData(e.target.value)} 
                onKeyPress={addItemOnEnter}/>
                <button type="button" 
                onClick={addItem}>Add Item</button> 
            </div>
            <div className="showItems">
                {
                    items.map((item, idx) => {
                        return (
                            <div key={idx} className="eachItems">
                                <span className="item">{item}</span>
                                <button type="button" className="delete-btn" 
                                onClick={() => deleteItem(idx)}>Delete</button>
                            </div> 
                        )
                    })
                }
                
            </div>
        </div>
    )
 }

 export default Todo;