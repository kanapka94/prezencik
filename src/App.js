import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import Counter from './components/counter/Counter';
import PartyName from './components/PartyName';
import cake from './assets/cake.svg';

const Wrapper = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 567px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  margin: 20px 0;
  font-family: 'Sacramento', cursive;
  font-size: 72px;
  font-weight: 400;
  color: #7f4646;
  text-shadow: 0 2px 5px #9c9c9c;

  @media (max-width: 567px) {
    font-size: 32px;
  }
`;

const Text = styled.p`
  margin: 0;
  color: #ffffff;
  text-shadow: 0 2px 5px #d6d6d6;
`;

const Image = styled.img`
  margin: 20px 0 0;

  @media (max-width: 567px) {
    width: 80px;
  }
`;

function App() {
  const nextYear = (new Date()).getFullYear() + 1;
  const nextPartyDate = dayjs(process.env.REACT_APP_PARTY_DATE).year(nextYear);

  return (
    <Wrapper>
      <Title>
        { process.env.REACT_APP_PERSON_1_NAME } i { process.env.REACT_APP_PERSON_2_NAME }
      </Title>
      <Text>Wszystkiego najlepszego z okazji</Text>
      <PartyName/>
      <Image src={ cake } alt="Tort" />
      <Text>{ process.env.REACT_APP_NEXT_PARTY_TITLE }</Text>
      <Counter toDate={ nextPartyDate } />
    </Wrapper>
  );
}

export default App;
