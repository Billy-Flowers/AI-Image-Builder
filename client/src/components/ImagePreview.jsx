import React from 'react';
import styled from "styled-components";
import { CloseRounded } from '@mui/icons-material';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const Content = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.menu_primary_text};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 90vh;
  border-radius: 8px;
  object-fit: contain;
`;

const ImagePreview = ({ image, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Image src={image} alt="Preview" />
        
        <CloseButton onClick={onClose}>
          <CloseRounded />
        </CloseButton>
      </Content>
    </Overlay>
  );
};

export default ImagePreview;
