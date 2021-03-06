import React from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { Component, useEffect, useState } from 'react';
import {storage} from './Firebaseconfig1'
import { app } from './Firebaseconfig1';

function Firebase (){
const [todos, setTodos] = useState([])

  const db = getFirestore(app);

  useEffect(() => {
    onSnapshot(collection(db, 'contents'), (snapshot) => {
      setTodos(snapshot.docs.map(doc => doc.data()))
      console.log(todos)
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul> 
          {todos.map((todo) =>
          (
            <div>
              <li key={todo.Year}>{todo.Year}</li>
              <li key={todo.Subtopic}>{todo.Subtopic}</li>
              <li key={todo.Topic}>{todo.Topic}</li>
              <li key={todo.pdfId}>{todo.pdfId}</li>

            </div>
          ))}

        </ul>

      </header>
    </div>
  );
}

export default Firebase;
