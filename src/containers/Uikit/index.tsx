import styled from 'styled-components';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { IconImage } from '../../ui-kit/Icon/Image';
import {
  Heading2,
  Text1Bold,
  Text2Bold,
  Text3Bold,
  Text4Bold,
} from '../../ui-kit/Typography';
import {
  FooterLink,
  LinkWithArrow,
  MainLink,
  NavigationLink,
} from '../../ui-kit/Links';

const GreyText = styled(Text1Bold)`
  opacity: 0.4;
`;

export const Uikit = () => {
  return (
    <div>
      <div>Uikit</div>
      <div>icons</div>
      <IconSvg type="search" stroke="none" />
      <IconSvg type="search" fill="alert" stroke="none" />
      <IconSvg type="heart" fill="none" />
      <IconSvg type="heart" />
      <IconSvg type="arrow" width="24" height="24" viewBox="0 0 24 24" />
      <br />
      <IconSvg
        type="logo"
        stroke="none"
        width="92"
        height="30"
        viewBox="0 0 92 30"
      />
      <br />
      <IconSvg
        type="logo-2"
        stroke="none"
        width="50"
        height="80"
        viewBox="0 0 280 306"
      />
      <br />
      <IconSvg
        type="logo-knitty"
        stroke="none"
        width="170"
        height="66"
        viewBox="0 0 170 66"
      />
      <br />
      <IconImage type={'decor'} width={'30px'} height={'33px'} />
      <div>Typography</div>
      <Heading2>Heading 2</Heading2>
      <Heading2 color="secondary">Heading 2</Heading2>
      <Heading2 case="uppercase">Heading 2</Heading2>
      <Heading2 case="uppercase">Heading 2</Heading2>
      <br />
      <Text1Bold>Text 1 Bold</Text1Bold>
      <Text1Bold color="secondary">Text 1 Bold</Text1Bold>
      <Text1Bold case="uppercase">Text 1 Bold</Text1Bold>
      <GreyText case="uppercase">Grey Text</GreyText>
      <br />
      <Text2Bold>Text 2 Bold</Text2Bold>
      <Text2Bold color="secondary">Text 2 Bold</Text2Bold>
      <Text2Bold case="uppercase">Text 2 Bold</Text2Bold>
      <br />
      <Text3Bold>Text 3 Bold</Text3Bold>
      <Text3Bold color="secondary">Text 3 Bold</Text3Bold>
      <Text3Bold case="uppercase">Text 3 Bold</Text3Bold>
      <br />
      <Text4Bold>Text 4 Bold</Text4Bold>
      <Text4Bold color="secondary">Text 4 Bold</Text4Bold>
      <Text4Bold case="uppercase">Text 4 Bold</Text4Bold>
      <br />

      <NavigationLink to="/">Navigation Link</NavigationLink>
      <LinkWithArrow to="/">Link with arrow</LinkWithArrow>
      <FooterLink to="/">Footer Link</FooterLink>
      <MainLink to="/">Main Link</MainLink>
    </div>
  );
};
