import { ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px" display="flex" gap={3}>
      <Skeleton boxSize="40px" borderRadius={8} paddingY="5px" />
      <SkeletonText height="30px" width="100px" borderRadius="10px" />
    </ListItem>
  );
};

export default GenreListSkeleton;
