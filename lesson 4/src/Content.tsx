import { useState, useEffect } from "react";
import { Todo } from "./model";
import { ITodo } from "./ITodo";

export function Content({ searchValue }: { searchValue: string }) {
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    let unmounted = false;
    Todo.readAll().then((newTodos) => {
      if (!unmounted) {
        setAllTodos(newTodos);
      }
    });
    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
    setTodos(
      allTodos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [allTodos, searchValue]);

  return (
    <div>
      <input
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            Todo.create(value).then((newTodo) => {
              setTodos([...todos, newTodo]);
            });
          }
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      {todos.length ? (
        <ul>
          {todos.map((todo) => {
            return <li key={todo.id}>{todo.text}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
}
