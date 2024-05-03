import { Box, Card, HStack, Heading, Image, CardBody } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Box height={"200px"} overflow={"hidden"}>
        <Image
          src={game.background_image}
          objectFit={"cover"}
          h={"100%"}
          w={"100%"}
        />
      </Box>
      <CardBody>
        <HStack justifyContent="space-between" mt="5px">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" mx="10px" mt="5px" mb="20px">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
