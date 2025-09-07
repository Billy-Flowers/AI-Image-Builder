import styled from "styled-components";
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.bg};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary};
  margin: 30px 0 15px 0;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 15px;
`;

const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
`;

const TechItem = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 15px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary + '20'};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const About = () => {
  return (
    <Container>
      <Content>
        <Title>About This Project</Title>
        
        <Text>
          AI Image Builder is an AI-powered image generation platform that brings your creative ideas to life! 
          This project demonstrates the integration of modern web technologies with artificial intelligence.
        </Text>

        <Subtitle>How It Works</Subtitle>
        <Text>
          Users enter a text prompt describing their desired image. The application sends this prompt to OpenAI's DALL·E 2 API, 
          which generates a unique image. The image is then uploaded to Cloudinary for storage, and metadata is saved in MongoDB 
          for community browsing and sharing.
        </Text>

        <Subtitle>Tech Stack</Subtitle>
        <TechStack>
          <TechItem>
            <strong>Frontend:</strong> React, Styled Components, Material-UI
          </TechItem>
          <TechItem>
            <strong>Backend:</strong> Node.js, Express.js
          </TechItem>
          <TechItem>
            <strong>Database:</strong> MongoDB
          </TechItem>
          <TechItem>
            <strong>AI:</strong> OpenAI DALL·E 2
          </TechItem>
          <TechItem>
            <strong>Storage:</strong> Cloudinary
          </TechItem>
          <TechItem>
            <strong>Deployment:</strong> Render, Netlify
          </TechItem>
        </TechStack>

        <Subtitle>Features</Subtitle>
        <Text>• Generate unique AI images from text prompts</Text>
        <Text>• Browse community-generated images</Text>
        <Text>• Search images by prompt or author</Text>
        <Text>• Download generated images</Text>
        <Text>• Responsive design for all devices</Text>

        <Subtitle>Development Journey</Subtitle>
        <Text>
          This project was built to explore the intersection of AI and web development. 
          It showcases full-stack development skills while integrating AI technology 
          to create a practical and engaging user experience.
        </Text>

        <SocialLinks>
          <SocialLink href="https://github.com/Billy-Flowers" target="_blank">
            <GitHub sx={{ fontSize: 32 }} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/milind-bhonsale/" target="_blank">
            <LinkedIn sx={{ fontSize: 32 }} />
          </SocialLink>
          <SocialLink href="mailto:milindbhonsalework@gmail.com">
            <Email sx={{ fontSize: 32 }} />
          </SocialLink>
        </SocialLinks>
      </Content>
    </Container>
  );
};

export default About;
