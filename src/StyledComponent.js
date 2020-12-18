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
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.5rem 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
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
      <TomatoButton>Tomato Button</TomatoButton>
    </div>
  );
}

export default StyledComponent;
