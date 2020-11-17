import React from 'react';
import { Box } from '@chakra-ui/core';
import Nav from '../components/Nav';
import { StyledMainContainer } from '../styles/mainStyle';

const Main = ({ children }) => (
    <Box>
        <Nav />
        <StyledMainContainer>
            { children }
        </StyledMainContainer>
    </Box>
);

export default Main;