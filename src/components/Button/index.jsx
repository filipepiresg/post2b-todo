import React from 'react';

import { Container } from './styles';

function Button({ children = '', onPress = null }) {
  return (
    <Container
      onClick={() => {
        if (onPress) {
          onPress();
        }
      }}
    >
      {children}
    </Container>
  );
}

export default Button;
