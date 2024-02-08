import { Static } from '../../../components/Static';
import useStatic from './useStatic';

const RefundPolicy = () => {
  const { data } = useStatic();
  return <Static data={data} />;
};

export default RefundPolicy;
