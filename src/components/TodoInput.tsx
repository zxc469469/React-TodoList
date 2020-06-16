import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO  } from '../store/constants/index';

export default function TodoInput() {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: "", key: 1 });
  const addTodo = () => {
    if (state.name) {
      dispatch({
        type: ADD_TODO,
        payload: {
          TodoList: { name: state.name, key: state.key },
        },
      });
      setState({ key: state.key + 1, name: "" });
    }
  };

  return (
    <div>
      <input
        data-testid="Input"
        type="text"
        value={state.name}
        onChange={(e) => setState({ key: state.key, name: e.target.value })}
      />
      <button onClick={addTodo}>新增</button>
    </div>
  );
}
