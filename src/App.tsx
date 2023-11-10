import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem area="nav" bgColor="red">
        NavBar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bgColor="gold">
          SideBar
        </GridItem>
      </Show>
      <GridItem area="main" bgColor="deeppink">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
