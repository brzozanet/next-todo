import React from "react";
import { create } from "zustand";

const Todo = ({ params }) => {
  return <div>Todo {params.id}</div>;
};

export default Todo;

// NOTE: zustand

// const addTodo = create((set) => ({
//   todos: [],
//   addTodo
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }));

// function Counter() {
//   const { count, inc } = useStore();
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   );
// }
