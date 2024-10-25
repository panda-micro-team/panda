import { Button } from "@chakra-ui/react";


interface DecreaseCounterButtonProps {
  onClick: () => void;
}

export const DecreaseCounterButton: React.FC<DecreaseCounterButtonProps> = ({
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      colorScheme='yellow'
      size="md"
      height="48px"
      width="200px"
      border="2px"
      borderColor="green.500"
    >
      Less
    </Button>
  );
};
