import React, { useReducer } from "react";
import "../index.css";

const TodosReducer = () => {
  function reducer(state, action) {
    if (action.type === "ADDTODO") {
      return {
        todos: [
          ...state.todos,
          { text: state.enteredValue, isCompleted: false },
        ],
        enteredValue: "",
      };
    }

    if (action.type === "NEWTODO") {
      return { ...state, enteredValue: action.payload };
    }

    if (action.type === "COMP") {
      const updatedTodos = state.todos.map((todo, index) =>
        index === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      return { ...state, todos: updatedTodos };
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    todos: [
      { text: "get food", isCompleted: false },
      { text: "prepare exam", isCompleted: false },
      { text: "play volleyball", isCompleted: false },
    ],
    enteredValue: "",
  });

  return (
    <center>
      <h1>Todos</h1>
      <input
        type="text"
        id="todo"
        value={state.enteredValue}
        onChange={(e) => {
          dispatch({ type: "NEWTODO", payload: e.target.value });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADDTODO" });
        }}
      >
        Add Todo
      </button>

      {state.todos.map((todo, index) => {
        return (
          <div key={index}>
            <p
              className={todo.isCompleted ? "getRed" : "getBlue"}
              onClick={() => {
                dispatch({ type: "COMP", payload: index });
              }}
            >
              {todo.text}
            </p>
          </div>
        );
      })}
    </center>
  );
};

export default TodosReducer;

// import React, { useReducer } from "react";
// import "../index.css"
// const TodosReducer = () => {
//   function reducer(state, action) {
//     if (action.type === "ADDTODO") {
//       //   let todoGet = document.getElementById("todo").value;
//       //   console.log(todoGet);

//       return {
//         todos: [...state.todos, state.enteredValue],
//         enteredValue: "",
//         isCompleted:false
//       };
//     }

//     if (action.type === "NEWTODO") {
//       return { ...state, enteredValue: action.payload };
//     }
//     if (action.type === "COMP"){
//       return{ ...state,isCompleted:true}

//     }
//   }
//   const [state, dispatch] = useReducer(reducer, {
//     todos: ["get food", "prepare exam", "play valleyball"],
//     enteredValue: "",
//     isCompleted:false
//   });
//   return (
//     <center>
//       <h1>Todos</h1>
//       <input
//         type="text"
//         id="todo"
//         onChange={(e) => {
//           dispatch({ type: "NEWTODO", payload: e.target.value });
//         }}
//       />
//       <button
//         onClick={() => {
//           dispatch({ type: "ADDTODO" });
//         }}
//       >
//         Add Todo
//       </button>

//       {state.todos.map((todo, index) => {
//         return (
//           <div key={index}>
//         <p className={state.isCompleted ? "getRed":"getBlue"} onClick={()=>{dispatch({type:"COMP"})}}>{todo}</p>

//           </div>
//         );
//       })}
//     </center>
//   );
// };

// export default TodosReducer;
