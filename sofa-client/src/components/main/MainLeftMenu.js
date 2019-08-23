import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MainLeftMenu = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
`;

const MenuItem = styled(Link)`
    text-decoration: none;
`;

const MainLeftMenuComponent = () => (
    <MainLeftMenu>
        <MenuItem to="/board">
            Board
        </MenuItem>
    </MainLeftMenu>
);

export default MainLeftMenuComponent;
