import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import heartIcon from '../assets/single_heart.svg';

const Wrapper = styled.div`
    position: relative;
    width: 75px;

    @media (max-width: 567px) {
        width: 50px;
    }
`;

const Image = styled.img`
    width: 100%;
`;

const Number = styled.span`
    position: absolute;
    top: 6px;
    right: 10px;

    @media (max-width: 567px) {
        font-size: 14px;
    }
`;

const Heart = ({ number }) => {
    return (
        <Wrapper>
            <Image src={ heartIcon } alt=""/>
            <Number>{ number }</Number>
        </Wrapper>
    );
};

Heart.propTypes = {
    number: PropTypes.number
};

export default Heart;