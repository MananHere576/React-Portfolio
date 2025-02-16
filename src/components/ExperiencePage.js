import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import LogoComponent from '../subComponents/LogoComponent'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background: ${(props) => props.theme.body};
  min-height: 100vh;
  position: relative;
`;

const SocialWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 10;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 3rem;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 90%;
  max-width: 1200px;
`;

const Card = styled(motion.div)`
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Role = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Date = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const Description = styled.ul`
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1rem;
  padding-left: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const CertificateButton = styled.a`
  display: inline-block;
  padding: 10px 16px;
  font-size: 1rem;
  text-decoration: none;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const experiences = [
  {
    role: "Content Creator - Team Member",
    company: "Google Developers Group on Campus(GDGoC)",
    startDate: "November 2024",
    endDate: "October 2025",
    description: [
      "Created engaging content for GDGoC's online platforms.",
      "Designed posts, wrote articles, and contributed to community growth.",
      "Leveraged social media trends to maximize engagement.",
    ],
    certificate: "https://www.linkedin.com/in/manan-mishra576/details/experience/", 
  },
  {
    role: "Artificial Intelligence Intern",
    company: "Infosys Springboard",
    startDate: "October 2024",
    endDate: "December 2024",
    description: [
      "Developed AI solutions for real-world applications.",
      "Worked on NLP and machine learning models.",
      "Optimized AI models for better performance.",
    ],
    certificate: "https://www.linkedin.com/in/manan-mishra576/details/experience/",
  },
  {
    role: "Campus Ambassador",
    company: "eDC IIT Delhi",
    startDate: "January 2024",
    endDate: "February 2024",
    description: [
      "Led targeted marketing campaigns.",
      "Executed data-driven strategies for engagement.",
      "Collaborated with teams for outreach optimization.",
    ],
    certificate: "https://www.linkedin.com/in/manan-mishra576/details/experience/",
  },
];

const ExperiencePage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
      <LogoComponent theme="dark" /> 
        <PowerButton />
        <SocialWrapper>
          <SocialIcons theme="light" />
        </SocialWrapper>
        <ParticleComponent theme="light" />
        <Title>My Experience</Title>
        <ExperienceGrid>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <Role>{exp.role}</Role><br/>
              <Company>{exp.company}</Company>
              <Date>
                {exp.startDate} - {exp.endDate}
              </Date>
              <Description>
                {exp.description.map((point, i) => (
                  <ListItem key={i}>{point}</ListItem>
                ))}
              </Description>
              <CertificateButton href={exp.certificate} target="_blank">
                View Certificate
              </CertificateButton>
            </Card>
          ))}
        </ExperienceGrid>
      </Container>
    </ThemeProvider>
  );
};

export default ExperiencePage;
