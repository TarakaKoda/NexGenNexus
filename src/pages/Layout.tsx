import { Box } from "@chakra-ui/layout";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={4}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
