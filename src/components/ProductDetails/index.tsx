import { IconSvg } from '../../ui-kit/Icon/Svg';
import { Heading3, Text2Bold } from '../../ui-kit/Typography';
import { StyledWrapper } from './styles';

export const ProductDetails = () => {
  const items = [
    {
      title: 'Product origin',
      text: 'Lviv, Ukraine',
      icon: (
        <IconSvg
          type="product-origin"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="back"
        />
      ),
    },
    {
      title: 'Material',
      text: 'Felted wool',
      icon: (
        <IconSvg
          type="material"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="back"
        />
      ),
    },
    {
      title: 'WATERPROOF',
      text: '2/5',
      icon: (
        <IconSvg
          type="waterproof"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="back"
        />
      ),
    },
    {
      title: 'WARMTH',
      text: '4/5',
      icon: (
        <IconSvg
          type="warmth"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="back"
        />
      ),
    },
    {
      title: 'durability',
      text: '4/5',
      icon: (
        <IconSvg
          type="durability"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="back"
        />
      ),
    },
  ];

  return (
    <StyledWrapper>
      {items.map(({ title, text, icon }) => (
        <li key={title}>
          {icon}
          <div>
            <Heading3 $case="uppercase">{title}</Heading3>
            <Text2Bold color="unfocus">{text}</Text2Bold>
          </div>
        </li>
      ))}
    </StyledWrapper>
  );
};
