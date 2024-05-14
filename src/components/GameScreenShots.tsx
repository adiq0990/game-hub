import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image, space } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

function GameScreenShots({ gameId }: Props) {
  const { data, error, isLoading } = useScreenshots(gameId);
  console.log(data);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
      {data?.results.map((screenshot) => (
        <Image src={screenshot.image} key={screenshot.id} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenShots;
