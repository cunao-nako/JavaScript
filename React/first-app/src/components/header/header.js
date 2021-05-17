import React from 'react';

import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${props => props.colored ? 'lightgreen' : 'black'};
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

// const StyledHeaderDiv = styled(HeaderDiv)`
//   background-color: grey;
// `;

const Header = ({totalPosts}) => {
  return(
    <HeaderDiv>
      <h1>Twider</h1>
      <h2>posts: {totalPosts} liked: 0</h2>
    </HeaderDiv>
  );
}

export default Header;