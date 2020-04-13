import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import Counter from './components/counter/Counter';

const Wrapper = styled.main`
  max-width: 520px;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  const nextYear = (new Date()).getFullYear() + 1;
  const nextPartyDate = dayjs(process.env.REACT_APP_PARTY_DATE).year(nextYear);

  return (
    <Wrapper>
      Adam { nextPartyDate.format('YYYY-MM-DD HH:mm:ss') }
      Odliczanie daty
      <Counter toDate={ nextPartyDate } />
    </Wrapper>
  );
}

export default App;
