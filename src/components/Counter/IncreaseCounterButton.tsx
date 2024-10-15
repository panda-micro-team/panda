interface IncreaseCounterButtonProps {
  onClick: () => void;
}

export const IncreaseCounterButton: React.FC<IncreaseCounterButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>+</button>;
};
