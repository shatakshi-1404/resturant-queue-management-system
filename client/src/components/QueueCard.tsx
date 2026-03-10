import { IQueue } from "../types/Queue";

interface Props {
  queue: IQueue;
}

const QueueCard = ({ queue }: Props) => {
  return (
    <div className="border p-4 rounded shadow mb-2">
      <p>Token: {queue.tokenNumber}</p>
      <p>Status: {queue.status}</p>
      <p>Joined At: {new Date(queue.createdAt).toLocaleTimeString()}</p>
    </div>
  );
};

export default QueueCard;
