export type TaskCardProps = {
  index?: number;
  id: number;
  text: string;
  status: string;
};

export function TaskCard({ id, text, status, index }: TaskCardProps) {
  return (
    <>
      <div className="mb-3 flex p-6 bg-blue-200 rounded-md" key={index ?? id}>
        <h2 className="font-extrabold text-green-500">{id}</h2>
        <h3 className="mx-4 text-slate-500 text-[18px] font-medium">{text}</h3>
        <span className="p-1 bg-red-400 rounded-lg font-semibold">{status}</span>
      </div>
    </>
  );
}
