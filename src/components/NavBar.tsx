import { HStack, Image, Text, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack marginLeft="-12px">
        <Show above="lg">
          <Image boxSize="60px" src={logo} />
        </Show>
        <Text fontFamily="futurama" marginLeft="-12px">
          NexGen Nexus
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
