import { styled } from "@/styles/stitches.config";
import { colors } from "@/styles/Global";

const headingsDefaultConfig = {
  fontFamily: "$titles",
};

const bodyDefaultConfig = {
  fontFamily: "$texts",
};

export const Text = styled("p", {
  color: "$grey5",
  fontSize: "$title2",
  fontWeight: 700,
  variants: {
    type: {
      heading1: {
        fontSize: "$title1",
        lineHeight: "$title1",
        fontWeight: 700,
        ...headingsDefaultConfig,

        "@mobile": {
          fontSize: "$title4",
          lineHeight: "$title4",
        },
      },
      heading2: {
        fontSize: "$title2",
        lineHeight: "$title2",
        fontWeight: 700,
        ...headingsDefaultConfig,
        "@mobile": {
          fontSize: "$title4",
          lineHeight: "$title4",
        },
      },
      heading3: {
        fontSize: "$title3",
        lineHeight: "$title3",
        fontWeight: 700,
        ...headingsDefaultConfig,
      },
      heading4: {
        fontSize: "$title1",
        lineHeight: "$title1",
        fontWeight: 700,
        ...headingsDefaultConfig,
        "@mobile": {
          fontSize: "$title2",
          lineHeight: "$title2",
        },
      },
      body1: {
        fontSize: "$text1",
        lineHeight: "$text1",
        ...bodyDefaultConfig,
        "@mobile": {
          fontSize: "$text4",
          lineHeight: "$text4",
        },
      },
      body2: {
        fontSize: "$text2",
        lineHeight: "$text2",
        ...bodyDefaultConfig,
      },
      span: {
        fontSize: "$title1",
        lineHeight: "$title1",
        fontWeight: 700,
        backgroundImage:
          "linear-gradient(60deg,  rgba(54,9,121,0.8968837535014006) , rgba(0,212,255,1))",
        backgroundClip: "text",
        color: "transparent",
        ...headingsDefaultConfig,
        "@mobile": {
          fontSize: "$title4",
          lineHeight: "$title4",
        },
      },
      JavaScript: {
        fontSize: "$text2",
        lineHeight: "$text2",
        color: "black",
        width: "90px",
        height: "25px",
        backgroundColor: "#FFD700",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...bodyDefaultConfig,
      },
      TypeScript: {
        fontSize: "$text2",
        lineHeight: "$text2",
        color: "white",
        width: "90px",
        height: "25px",
        backgroundColor: "#2a30ee",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...bodyDefaultConfig,
      },
      HTML: {
        fontSize: "$text2",
        lineHeight: "$text2",
        color: "white",
        width: "90px",
        height: "25px",
        backgroundColor: "#FF6347",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...bodyDefaultConfig,
      },
      Python: {
        fontSize: "$text2",
        lineHeight: "$text2",
        color: "white",
        background: "linear-gradient(to left,#FFD700, #191970) border-box",
        width: "90px",
        height: "25px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...bodyDefaultConfig,
      },
      notFound: {
        fontSize: "$text2",
        lineHeight: "$text2",
        color: "white",
        width: "120px",
        height: "25px",
        backgroundColor: "#FF0000",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...bodyDefaultConfig,
      },
      ...colors,
    },
  },
});
