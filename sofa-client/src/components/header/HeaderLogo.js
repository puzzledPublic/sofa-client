import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderLogo = styled(Link)`
    text-decoration: none;
`;

const HeaderLogoComponent = () => (
    <HeaderLogo to="/">
        logo
    </HeaderLogo>
);

export default HeaderLogoComponent;