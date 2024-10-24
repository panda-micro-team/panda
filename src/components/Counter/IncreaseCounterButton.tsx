import { Button } from "@chakra-ui/react";

interface IncreaseCounterButtonProps {
  onClick: () => void;
}

export const IncreaseCounterButton: React.FC<IncreaseCounterButtonProps> = ({
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      colorScheme='teal'
      size="md"
      height="48px"
      width="200px"
      border="2px"
      borderColor="green.500"
    >
      More
    </Button>
  );
};
