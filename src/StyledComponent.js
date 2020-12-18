import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4rem;
  background: papayawhip;
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.5rem 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
function StyledComponent() {
  return (
    <div>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Button>Normal Button</Button>
      <Button as="a" href="https://github.com/seunghwako">
        Link with Button styles
      </Button>
      <TomatoButton as="a" href="https://google.com">
        Link with Tomato Button styles
      </TomatoButton>
    </div>
  );
}

export default StyledComponent;
