import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import PlatformSelectorSkeleton from "./PlatformSelectorSkeleton";
import { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatformId,
}: Props) => {
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId)

  if (error) return null;

  return (
    <>
      {isLoading ? (
        <PlatformSelectorSkeleton />
      ) : (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || "Platforms"}
          </MenuButton>
          <MenuList>
            {data?.results.map((platform) => (
              <MenuItem
                onClick={() => onSelectedPlatform(platform)}
                key={platform.id}>
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default PlatformSelector;
