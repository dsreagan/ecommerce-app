import { extendTheme } from "@chakra-ui/react"

const colors = {
  black: "RGBA(0, 0, 0, 0.92)",
}

const theme = extendTheme({
  colors,
  components: {
    Button: {
      variants: {
        primary: {
          bg: "white",
          color: "black",
          _hover: {
            bg: "blackAlpha.50",
          },
        },
        secondary: {
          bg: "white",
          color: "black",
          boxShadow: "md",
          _hover: {
            bg: "blackAlpha.50",
          },
        },
      },
    },
    // Input: {
    //   baseStyle: {
    //     field: {
    //       bgColor: "blackAlpha.300",
    //       color: "black",
    //       _placeholder: { color: "blackAlpha.500" },
    //       errorBorderColor: "#FC8181",
    //     },
    //   },
    // },
    Checkbox: {
      baseStyle: {
        control: {
          bg: "lightgray",
        },
      },
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: "whitesmoke",
        color: "black",
      },
      option: {
        backgoundColor: "white",
        color: "black",
      },
    }),
  },
})

export default theme
