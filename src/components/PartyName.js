import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const PartyName = ({ number }) => {
    return (
        <Wrapper>
            Waszej <Featured>{ number }</Featured> { process.env.REACT_APP_PARTY_NAME }
        </Wrapper>
    );
};

PartyName.propTypes = {
    number: PropTypes.number
};

export default PartyName;