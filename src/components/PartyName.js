import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const Wrapper = styled.div`
    max-width: 390px;
    width: 100%;
    margin: 0 auto;
    font-size: 38px;
    color: #ffffff;

    @media (max-width: 567px) {
        font-size: 20px;
    }
`;

const Featured = styled.span`
    font-size: 64px;
    color: #ffe561;

    @media (max-width: 567px) {
        font-size: 32px;
    }
`;

const number = dayjs().diff(dayjs(process.env.REACT_APP_PARTY_DATE), 'year');

const PartyName = () => {
    return (
        <Wrapper>
            Waszej <Featured>{ number }</Featured> { process.env.REACT_APP_PARTY_NAME }
        </Wrapper>
    );
};

export default PartyName;