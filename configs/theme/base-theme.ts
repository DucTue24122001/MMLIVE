import { StyleFunctionProps, extendTheme } from "@chakra-ui/react"
import { colors } from "./colors"
import bg from "../../public/img/bg-gra.png"

const baseTheme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        boxSizing: "border-box",
        fontFamily: `"DM Sans", sans-serif`,
        color: colors.primary.text,
        minH: "100dvh",
        maxW: "100%",
        mx: "auto",
        fontSize: "14px",
        fontWeight:"400",
        bg: colors.primary.bg ,
        bgImage: bg.src,
        bgRepeat: "no-repeat",
        bgSize: "cover",
        bgPosition: "center",
      },
    })
  },
  colors: {
    
  },
})

export default baseTheme