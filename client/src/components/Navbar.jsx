import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Button from './button';
import { AddRounded, ExploreRounded, DarkModeOutlined, LightModeOutlined, InfoRounded } from '@mui/icons-material'

const Container = styled.div`
    flex: 1;
    background: ${({ theme }) => theme.navbar};
    color: ${({ theme }) => theme.menu_primary_text};
    height: 80px;
    font-weight: bold;
    padding: 14px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
        height: 70px;
        padding: 10px 16px;
    }
    @media (max-width: 480px) {
        height: 60px;
        padding: 8px 12px;
    }
`;

const Logo = styled.div`
    cursor: pointer;
    font-size: 34px;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
        font-size: 28px;
    }
    @media (max-width: 480px) {
        font-size: 24px;
    }
    
    &:hover {
        color: ${({ theme }) => theme.secondary};
    }
`;


const ThemeButton = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.menu_primary_text};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
    padding: 8px;
    border-radius: 50%;
    transition: all 0.3s ease;
    
    &:hover {
        background: ${({ theme }) => theme.primary + '80'};  
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split('/');
    
    return (
        <Container>
            <Logo onClick={() => navigate("/")}>GenAI</Logo>
            <ButtonContainer>
                {path[1] === "post" ? (
                    <Button
                        type="secondary"          
                        onClick={() => navigate("/")}
                        text="EXPLORE POSTS"
                        leftIcon={<ExploreRounded sx={{ fontSize: "18px" }} />}               
                    />                
                ) : (
                    <Button
                        onClick={() => navigate("/post")}
                        text="Create new post"
                        leftIcon={<AddRounded sx={{ fontSize: "18px" }} />}
                    />              
                )}
                    <Button
                        type="secondary"
                        onClick={() => navigate("/about")}
                        text="About"
                        leftIcon={<InfoRounded sx={{ fontSize: "18px" }} />}                
                    />
                <ThemeButton onClick={toggleTheme}>
                    {isDarkMode ? 
                        <LightModeOutlined sx={{ fontSize: "24px" }} /> : 
                        <DarkModeOutlined sx={{ fontSize: "24px" }} />
                    }
                </ThemeButton>
            </ButtonContainer>
        </Container>
    );
};

export default Navbar;
