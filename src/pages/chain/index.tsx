// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import styled from 'styled-components';

import PushLogo from '@site/static/assets/website/brb/pushIcon.svg';
import ChainLogoDark from '@site/static/assets/website/chain/ChainLogoDark.svg';

import { ItemV } from '../../../src/css/SharedStyling';

function PushChain() {
  const history = useHistory();

  // Redirect to Home Page
  useEffect(() => {
    history.push('/');
  }, []);

  return (
    <Container>
      <PushLogoBlackContainer className='headerlogo' flex='initial'>
        <PushLogo style={{ margin: '0px 9px 0px 4px' }} />
        <ChainLogoDark />
      </PushLogoBlackContainer>
      <Message>Redirecting...</Message>
    </Container>
  );
}

export default PushChain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: white;
  text-align: center;
`;

const PushLogoBlackContainer = styled(ItemV)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
`;

const Message = styled.p`
  font-size: 18px;
  margin-top: 8px;
`;
