import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderLink = styled(Link)`
    text-decoration: none;
    margin-left: 40px;
`;

const HeaderLinkComponent = ({link, name}) => (
    <HeaderLink to={link}>
        {name}
    </HeaderLink>
);

export default HeaderLinkComponent;