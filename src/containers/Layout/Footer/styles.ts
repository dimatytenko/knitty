import styled from 'styled-components';
import { Container } from '../../../components/Layout/styles';

export const FooterWrapper = styled.div`
  ${Container} {
    display: flex;
    gap: 157px;
    padding: 24px 0;
  }
`;

export const LinksBlockWrapper = styled.div`
  h3 {
    font-family: inherit;
    font-weight: 500;
  }
  li {
    font-family: inherit;
    font-size: 14px;
    line-height: 1;
  }
`;

export const RightBlock = styled.div`
  width: 100%;
`;
export const LeftBlock = styled.div`
  width: fit-content;
`;

export const RightBlockTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  ul {
    margin-top: 20px;

    display: flex;
    flex-direction: column;
  }
`;

export const RightBlockBottom = styled.div`
  margin-top: 131px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
