import { useDispatch, useSelector } from 'react-redux';
import { ITodos, addTodo } from '../../hooks/todos/todoSlice';
import { useRef } from 'react';
import { StatusEnum } from '../../types/enum';
import { Link } from 'react-router-dom';
import { TaskCard } from '../cards/task-card';

export default function AddTodosform() {
  const text = useRef<HTMLElement | null | any>(null);
  const status = useRef<HTMLElement | null | any>(null);
  const dispatch = useDispatch();
  const tasks: Array<ITodos> = useSelector((state: any) => state?.todo?.tasks);

  const AddNewTask = (e: any) => {
    e.preventDefault();
    if (text?.current.value && status?.current.value) {
      let payload = {
        id: Date.now(),
        text: text?.current?.value?.trim(),
        status: status?.current?.value?.trim()
      };
      dispatch(addTodo(payload));
    }
  };
  return (
    <>
      <div className="p-8 w-[100%]">
        <input
          type="text"
          ref={text}
          placeholder="todo title..."
          className="bg-slate-100 outline-none border-[1.5px] border-red-400 p-1"
          name="text"
          id=""
        />
        <div className="my-4">
          <select className="outline-none border-[1px] border-green-400" ref={status}>
            <option value={StatusEnum.PENDING}>Pending</option>
            <option value={StatusEnum.PROCESSING}>Processing</option>
            <option value={StatusEnum.COMPLETED}>Completed</option>
          </select>
        </div>
        <button className="px-3 py-1 bg-gray-600 text-white font-medium" onClick={AddNewTask}>
          Save
        </button>
        <Link className="mx-3" to={'/list-tasks'}>
          see list
        </Link>
        <div className="mt-4">
          {tasks.map((p: any, i: number) => (
            <TaskCard key={i} index={i} id={p?.id} text={p?.text} status={p?.status} />
          ))}
        </div>
      </div>
    </>
  );
}
