import React from 'react';
import styled from "styled-components";

import { Item } from 'semantic-ui-react';

export const StyledItem = styled(Item)`
  color: '#fff';

  &&& > .content {
    &&& > .header {
      color: white;
    }
  }
`;