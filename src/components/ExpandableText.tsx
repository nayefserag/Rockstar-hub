import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  children: string;
}
export const ExpandableText = ({ children }: Props) => {
  const [expand, setExpand] = useState(false);
  const limit = 100;
  if (!children) return null;
  if (children.length  <= limit) return <Text>{children}</Text>;
  const summary = expand ? children : children.substring(0, limit)+ '...';

  return (
    <Text>
      {summary}
      <Button
        colorScheme="yellow"
        size={"xs"}
        onClick={() => setExpand(!expand)}
        ml="1"

      >
        {expand ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};
