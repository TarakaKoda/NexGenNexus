import { HStack, Text, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding={4}>
      <Link to="/">
        <HStack>
          <Text
            alignContent="center"
            alignItems="center"
            border="2px solid"
            borderRadius="10px"
            display="flex"
            fontFamily="Monoton"
            fontSize="30px"
            height="40px"
            justifyContent="center"
            paddingTop="3px"
            width="40px">
            N
          </Text>
          <Show above="lg">
            <Text whiteSpace="nowrap" fontFamily="futurama">
              NexGen Nexus
            </Text>
          </Show>
        </HStack>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
