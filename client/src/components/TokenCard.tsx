import { IQueue } from "../types/Queue";

interface Props {
  queue: IQueue;
}

const TokenCard = ({ queue }: Props) => {
  return (
    <div className="border p-6 rounded shadow bg-white text-center">
      <h2 className="text-2xl font-bold mb-2">Your Token Number</h2>
      <p className="text-4xl font-extrabold mb-2">{queue.tokenNumber}</p>
      <p>Status: {queue.status}</p>
      <p>Joined At: {new Date(queue.createdAt).toLocaleTimeString()}</p>
    </div>
  );
};

export default TokenCard;
