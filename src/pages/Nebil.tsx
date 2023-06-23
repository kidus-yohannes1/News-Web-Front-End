import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import "../assets/styles/nebil.css";

const Todo = (): JSX.Element => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<any[]>([]);

  const addTodo = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      console.log("dss");

      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (querySnapshot) => {
      const tasks = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          todo: data.todo,
        };
      });
      setTodos(tasks);
      setTodo("");
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Todo-App</h1>

        <div>
          <div>
            <input
              type="text"
              placeholder="What do you have to do today?"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTodo(e.target.value)
              }
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>

        <div className="todo-content">
          {todos?.map((todo, i) => (
            <p key={i}>{todo.todo}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Todo;
