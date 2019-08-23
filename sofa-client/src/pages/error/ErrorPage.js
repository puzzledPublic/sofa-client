import React from 'react';
import styled from 'styled-components';

const ErrorPage = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
`;

const ErrorPageComponent = () => (
    <ErrorPage>
        Error Page
    </ErrorPage>
);

export default ErrorPageComponent;