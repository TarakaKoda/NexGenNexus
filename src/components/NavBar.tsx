import { HStack, Text, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Show above="lg">
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
        </Show>
        <Text fontFamily="futurama">NexGen Nexus</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
