import { Skeleton, SkeletonText, Card, CardBody } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
