import { Box, Heading, Text } from "@chakra-ui/layout";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar></NavBar>
      <Box padding={4}>
        <Heading>Ooops...</Heading>

        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
