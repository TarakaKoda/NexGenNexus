import { HStack, Image, Text} from "@chakra-ui/react"
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack>
        <Image boxSize="60px" src={logo}/>
        <Text marginLeft='-12px' color="#FFF" className="logo-text">NexGen Nexus</Text>
    </HStack>
  )
}

export default NavBar