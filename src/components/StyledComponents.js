import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

export const StyledContainer = styled(Container)`
  padding-top: 5rem;
`;

const test = () => {}
export default test;