import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box ml={10}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exists."
            : "Sorry, an unexpected error has occurred."}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
