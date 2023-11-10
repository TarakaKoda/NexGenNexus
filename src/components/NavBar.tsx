import { HStack, Image, Text, Show } from "@chakra-ui/react";
import logo from "../assets/logo3.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Show above="lg">
          <Image mixBlendMode='difference' boxSize="40px" src={logo} />
        </Show>
        <Text fontFamily="futurama">
          NexGen Nexus
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
