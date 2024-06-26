import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge
      mr="10px"
      fontSize="14px"
      paddingX="8px"
      borderRadius="4px"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
