import React from 'react';
import styled, {css} from "styled-components";

const Container = styled.div`
  display: flex;
`
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: blue;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
            background: #282c34;
            color: white;
          `};
`;

export const StyledComponent = () => {
    return (
        <Container>
            <Button>Not Primary</Button>
            <Button primary={true}>Primary</Button>
        </Container>
    );
};