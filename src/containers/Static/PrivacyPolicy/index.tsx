import { Static } from '../../../components/Static';
import useStatic from './useStatic';

const PrivacyPolicy = () => {
  const { data } = useStatic();
  return <Static data={data} />;
};

export default PrivacyPolicy;
