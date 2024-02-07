import { Static } from '../../../components/Static';
import useStatic from './useStatic';

const TermsOfService = () => {
  const { data } = useStatic();
  return <Static data={data} />;
};

export default TermsOfService;
