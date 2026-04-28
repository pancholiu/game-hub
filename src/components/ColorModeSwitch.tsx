import { HStack, Switch, Text } from "@chakra-ui/react";
import { useTheme } from "next-themes";

const ColorModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <HStack>
      <Switch.Root
        colorPalette="green"
        checked={isDark}
        onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
      >
        <Switch.HiddenInput />
        <Switch.Control />
      </Switch.Root>
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
