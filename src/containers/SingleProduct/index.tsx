import { useParams } from 'react-router-dom';
import { Container } from '../../components/Layout/styles';
import { Br } from '../../ui-kit/Br';
import { HowItsMade } from '../HowItsMade';

export const SingleProduct = () => {
  const { id } = useParams();
  return (
    <Container>
      <div>
        SINGLE PRODUCT <span style={{ color: 'red' }}>{id}</span>
      </div>
      <Br desktop={120} mobile={60} />
      <HowItsMade />
      <Br desktop={120} mobile={60} />
    </Container>
  );
};
