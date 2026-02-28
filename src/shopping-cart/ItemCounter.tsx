import { useState } from 'react';

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 0 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 20,
      }}
    >
      <span style={{ width: 200 }}>{name}</span>
      <button onClick={handleRemove}>-1</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+1</button>
    </section>
  );
};