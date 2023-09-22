// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/Kenzie-Academy-Brasil-Developers/kenzie-portifolio-2`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"79px"}
                height={"79px"}
              />
              <Text type="heading2" color="grey4">
                Hello, my name is {userData.nameUser}!
              </Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              I{" "}
              <Text as="span" type="span" color="brand2">
                love
              </Text>{" "}
              creating and{" "}
              <Text as="span" type="span" color="brand2">
                developing
              </Text>{" "}
              projects
            </Text>
            <Text type="body1" color="grey2">
              Full-Stack Web Developer, I have studied programming with the help
              of Kenzie Academy Brasil's Web Full-Stack course, having already
              carried out more than ten projects between the Front end and Back
              end, with a specialty in React, Javascript Vanilla, express,
              PostgreSQL among other languages and libraries.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                See my portfolio source code
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey5">
                My projects
              </Text>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circleGT"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
