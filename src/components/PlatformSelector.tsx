import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import PlatformSelectorSkeleton from "./PlatformSelectorSkeleton";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();

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
