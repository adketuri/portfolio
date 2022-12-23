import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    body: `Roboto, sans-serif`,
    heading: `'Roboto Slab', serif`,
  },
  components: {
    Link: {
      variants: {
        outgoing: (props) => ({
          color: props.colorMode === "dark" ? "red.200" : "red.600",
          _hover: {
            color: props.colorMode === "dark" ? "red.50" : "red.700",
            textDecoration: "none",
          },
        }),
      }
    }
  }
}

const theme = extendTheme(config)

export default theme