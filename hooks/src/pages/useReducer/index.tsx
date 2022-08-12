import { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Task = {
    text: string;
    isCompleted: boolean;
}

type State = {
    tasks: Task[];
    taskCount: number;
}

type Action = {
    type: string;
    payload: string;
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ADD_TASK':
        return {
            ...state,
            tasks: [...state.tasks, { text: action.payload, isCompleted: false }],
            taskCount: state.taskCount + 1
        };
        case 'TOGGLE_TASK':
        return {
            ...state,
            tasks: state.tasks.map((task, index) => {
                if (index === Number(action.payload)) {
                    return {
                        ...task,
                        isCompleted: !task.isCompleted
                    };
                }
                return task;
            }),
            taskCount: state.taskCount
        };
        default:
        throw new Error();
    }
};

export const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { tasks: [], taskCount: 0 } as State);
    const [taskName, setTaskName] = useState<string>('');

    const handleTask = () => {
        dispatch({ type: 'ADD_TASK', payload: taskName });
        setTaskName('');
    };

    const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value);
    };
  return (
    <div>
      <h2 style={{ display: 'block' }}>Task name</h2>
      <input value={taskName} onChange={(e) => handleTaskName(e)} />
      <button type="submit" onClick={() => handleTask()}>+</button>
      <ul>
        {state.tasks.map((task, index) => (
          <li
            role="presentation"
            onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: index.toString() })}
            key={uuidv4()}
            style={{ fontSize: 24, textDecoration: task.isCompleted ? 'line-through' : 'none' }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
