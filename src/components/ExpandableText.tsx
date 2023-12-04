import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [extended, setExtended] = useState(false);

  if (!children) return null;

  const limit = 300;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = extended ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
        onClick={() => setExtended(!extended)}>
        {extended ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
