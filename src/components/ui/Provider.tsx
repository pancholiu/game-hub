import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { system } from "../../theme";

interface Props {
  children: ReactNode;
}

export function Provider({ children }: Props) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
