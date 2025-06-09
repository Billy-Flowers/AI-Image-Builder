import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
import GenerateImageForm from '../form/GenerateImageForm';
import GeneratedImageCard from '../components/GeneratedImageCard';

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 20px 30px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 768px) {
    padding: 10px;
  } 
`;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;


const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setcreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          createPostLoading={createPostLoading}
          setcreatePostLoading={setcreatePostLoading}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
          post={post}
          setPost={setPost}
        />
        <GeneratedImageCard loading={generateImageLoading} src={post.photo} />
      </Wrapper>
    </Container>
  );
};


export default CreatePost;