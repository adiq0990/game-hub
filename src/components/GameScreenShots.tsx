import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

function GameScreenShots({ gameId }: Props) {
  const { data, error, isLoading } = useScreenshots(gameId);
  console.log(data);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={3} mt={10}>
      {data?.results.map((screenshot) => (
        <Image src={screenshot.image} key={screenshot.id} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenShots;
