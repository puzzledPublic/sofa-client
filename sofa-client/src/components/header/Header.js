import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderLink from './HeaderLink';

const Header = styled.div`
    display: flex;
    height: 2.7rem;
    border-bottom: 1px solid black;
`;

const HeaderLeft = styled.div`

`;

const HeaderRight = styled.div`
    margin-left: auto;
`;

const HeaderComponent = () => (
    <Header>
        <HeaderLeft>
            <HeaderLogo/>
            <HeaderLink link="docs" name="document"/>
            <HeaderLink link="list" name="list"/>
        </HeaderLeft>
        <HeaderRight>
            <HeaderLink link="docs" name="login"/>
        </HeaderRight>
    </Header>
);

export default HeaderComponent;