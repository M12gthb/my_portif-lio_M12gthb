import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

import backgroundImg from "@/public/static/img/background/Code-typing-bro.svg";

import dots from "@/public/static/img/background/dots.svg";

export const Header = styled("header", {
  backgroundColor: "$grey1",
  padding: "9rem 0 8rem 0",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundAttachment: "fixed",
  borderBottom: "2px solid $grey5",
  "@tablet": {
    backgroundPosition: "right -10% center",
  },
  "@mobile": {
    padding: "7rem 0 6rem 0",
    backgroundImage: `none`,
  },
  "@mobileLittle": {
    padding: "7rem 0 0 0",
  },
});

export const HeaderContent = styled("div", {
  maxWidth: "100%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  "@tablet": {
    width: "36rem",
  },
  "@mobile": {
    width: "100%",
  },
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",

  [`& ${Button}`]: {
    marginRight: "$2",
    overflow: "hidden",
  },
  [`& ${Button}:hover`]: {
    color: "$gray1",
  },

  "@mobile": {
    [`& ${Button}`]: {
      marginRight: "$2",
      overflow: "hidden",
      width: "100%",
    },

    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gridGap: "$2",
    marginBottom: "$2",
  },
});

export const UserImage = styled("img", {
  border: "3px solid transparent",
  background:
    "linear-gradient(rgba(54,9,121,0.8968837535014006), rgba(0,212,255,1)) border-box",
  borderRadius: "50%",
  "@mobile": {
    width: "5rem",
    height: "5rem",
  },
});

export const StackSection = styled("div", {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
});

export const StackCards = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  padding: "0.5rem 0",
  gap: "6rem",
  marginTop: "$4",

  "@tablet": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },

  "@mobile": {
    gridTemplateColumns: "1fr 1fr",
  },

  "@mobileLittle": {
    display: "flex",
    overflow: "auto",
    margin: "0 -1rem",
    paddingInline: "1rem",
  },
});

export const ProjectsArea = styled("section", {
  padding: "$section 0",
  backgroundColor: "$grey0",
  backgroundImage: `url(${dots})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left top 11rem",
  "@tablet": {
    backgroundPosition: "right top 8rem",
    padding: "$sectionMobile 0",
  },
});

export const ProjectsAreaSocialMediaMessage = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
  alignItems: "center",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "1.5rem",
  },
});

export const ProjectsAreaContent = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "0.5rem",
  "@mobile": {
    gridTemplateColumns: "1fr",
    overflow: "hidden",
  },
});

export const ProjectAreaWrapperColumns = styled("div", {
  position: "relative",
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
});
