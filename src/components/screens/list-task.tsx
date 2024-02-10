import { useSelector } from 'react-redux';
import { TaskCard } from '../cards/task-card';
import { ITodos } from '../../hooks/todos/todoSlice';

export default function ListTask() {
  const tasks: Array<ITodos> = useSelector((state: any) => state?.todo?.tasks);
  return (
    <>
      <h1 className="text-center font-medium text-[20px]">List all Tasks</h1>
      <div className="mt-6 flex justify-center ">
        <div>
          {tasks?.map((p: any, i: number) => (
            <TaskCard key={i} index={i} id={p?.id} text={p?.text} status={p?.status} />
          ))}
        </div>
      </div>
    </>
  );
}
