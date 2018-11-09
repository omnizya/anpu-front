/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
import { Colors } from '../../constants';

const A = styled.a`
  color: ${Colors.ahref.default};
  text-decoration: none;
  &:hover {
    color: ${Colors.ahref.hover};
  }
`;

export default A;
