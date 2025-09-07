import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'; 
import Button from '../components/button';
import TextInput from '../components/TextInput';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';
import { CreatePost, GenerateImageFromPrompt } from "../api";

const Form = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1; 
    gap: 9%;
    padding: 16px 20px;
    justify-content: center;
`;
const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;
const Title = styled.h1`
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
`;  

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
`;

const Actions = styled.div`
    flex: 1;
    display: flex;
    gap: 8px;
    width: 100%;
`;

const GenerateImageForm = ({
    createPostLoading,
    setcreatePostLoading,
    generateImageLoading,
    setGenerateImageLoading,
    post,
    setPost,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const generateImage = async () => {
    setGenerateImageLoading(true);
    setError("");
    const promptForGeneration = post.prompt; 
    const authorForGeneration = post.name;
    await GenerateImageFromPrompt({ prompt: promptForGeneration })
      .then((res) => {
        setPost({
          ...post,
          photo: `data:image/jpeg;base64,${res?.data?.photo}`,
          generatedPrompt: promptForGeneration, 
          generatedAuthor: authorForGeneration,
        });
        setGenerateImageLoading(false);
      })
      .catch((error) => {
        alert("Unable to be generate Image. Please try a different prompt.");
        setError(error?.response?.data?.message);
        setGenerateImageLoading(false);
      });
  };

const createPost = async () => {
  setcreatePostLoading(true);
  setError("");
  const postData = {
    name: post.generatedAuthor,
    prompt: post.generatedPrompt,
    photo: post.photo,
  };
  console.log("Sending post data:", postData);
    await CreatePost(postData)
      .then((res) => {
        console.log("Post created successfully:", res);
        navigate("/");
        setcreatePostLoading(false);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        setError(error?.response?.data?.message || "Failed to create post");
        setcreatePostLoading(false);
      });
  };

  
  return (
    <Form>
      <Top>
        <Title>Generate Image with a prompt</Title>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name"
          name="name"
          value={post.name}
          handelChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image"
          name="prompt"
          textArea
          rows="8"
          value={post.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
      </Body>
      <Actions>
        <Button
          text="Generate Image"
          leftIcon={<AutoAwesome />}
          flex
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={(e) => generateImage()}
        />
        <Button
          text="Post Image"
          leftIcon={<CreateRounded />}
          type="secondary"
          flex
          isDisabled={
            !post.generatedAuthor || !post.photo || !post.generatedPrompt
          }
          isLoading={createPostLoading}
          onClick={() => createPost()}
        />
      </Actions>
    </Form>
  )
}

export default GenerateImageForm;