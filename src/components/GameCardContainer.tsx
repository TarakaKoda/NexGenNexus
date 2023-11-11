import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const GameCardContainer = ({children}: Props) => {
  return (
    <Box width={{ sm: 450, md: 350, lg: 300, xl:230}} borderRadius={10} overflow={"hidden"}>{children}</Box>
  )
}

export default GameCardContainer;