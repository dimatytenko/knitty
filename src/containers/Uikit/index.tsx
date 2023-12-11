import styled from 'styled-components';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { IconImage } from '../../ui-kit/Icon/Image';
import {
  Heading2,
  Text1Bold,
  Text2Bold,
  Text3Bold,
  Heading3,
} from '../../ui-kit/Typography';
import {
  FooterLink,
  LinkWithArrow,
  MainLink,
  NavigationLink,
} from '../../ui-kit/Links';
import {
  BurgerButton,
  ButtonWithArrow,
  CartButton,
  FilterButton,
  MainButton,
} from '../../ui-kit/Buttons';
import { Container } from '../../components/Layout/styles';
import { Pagination } from '../../ui-kit/Pagination';
import { ProductCard } from '../../ui-kit/Card/Product';
import { Sort } from '../../ui-kit/Sort';
import { ScrollButton } from '../../ui-kit/ScrollButton';
import { HowItsMade } from '../HowItsMade';
import CollapseComponent from '../../components/Collapse';
import { faqList } from '../../constants/faq';
import { ImageSkeleton } from '../../ui-kit/Loader/ImageSkeleton';

const GreyText = styled(Text1Bold)`
  opacity: 0.4;
`;

export const Uikit = () => {
  return (
    <div>
      <Container>
        <div>Uikit</div>
        <div>Sort by</div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Sort />
        </div>
        <br />
        <div>icons</div>
        <IconSvg type="search" stroke="none" />
        <IconSvg type="search" fill="alert" stroke="none" />
        <IconSvg type="search" fill="back" stroke="none" />
        <IconSvg type="heart" fill="none" />
        <IconSvg type="heart" />
        <IconSvg type="arrow" width="24" height="24" viewBox="0 0 24 24" />
        <IconSvg type="close" width="24" height="24" viewBox="0 0 24 24" />
        <IconSvg type="plus" width="24" height="24" viewBox="0 0 24 24" />
        <IconSvg type="minus" width="24" height="24" viewBox="0 0 24 24" />
        <IconSvg
          type="nav-stroke"
          width="77"
          height="30"
          viewBox="0 0 77 30"
          fill="none"
        />
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
        <Heading2 $case="uppercase">Heading 2</Heading2>
        <Heading2 $case="uppercase">Heading 2</Heading2>
        <br />
        <Text1Bold>Text 1 Bold</Text1Bold>
        <Text1Bold color="secondary">Text 1 Bold</Text1Bold>
        <Text1Bold $case="uppercase">Text 1 Bold</Text1Bold>
        <GreyText $case="uppercase">Grey Text</GreyText>
        <br />
        <Text2Bold>Text 2 Bold</Text2Bold>
        <Text2Bold color="secondary">Text 2 Bold</Text2Bold>
        <Text2Bold $case="uppercase">Text 2 Bold</Text2Bold>
        <Text2Bold $decor="underline">Text 2 Bold</Text2Bold>
        <Text2Bold $decor="line-through">Text 2 Bold</Text2Bold>
        <br />
        <Text3Bold>Text 3 Bold</Text3Bold>
        <Text3Bold color="secondary">Text 3 Bold</Text3Bold>
        <Text3Bold $case="uppercase">Text 3 Bold</Text3Bold>
        <br />
        <Heading3>Text 4 Bold</Heading3>
        <Heading3 color="secondary">Text 4 Bold</Heading3>
        <Heading3 $case="uppercase">Text 4 Bold</Heading3>
        <br />
        <div>Links</div>
        <NavigationLink to="/">Navigation Link</NavigationLink>
        <LinkWithArrow to="/">Link with arrow</LinkWithArrow>
        <FooterLink to="/">Footer Link</FooterLink>
        <MainLink to="/">Main Link</MainLink>
        <br />
        <div>Buttons</div>
        <div style={{ width: '300px' }}>
          <MainButton title="Main Button" onClick={() => {}} />
        </div>
        <FilterButton title="Filter" onClick={() => {}} />
        <FilterButton title="Filter ACTIVE" onClick={() => {}} active={true} />
        <div style={{ width: '300px' }}>
          <ButtonWithArrow title="Button with arrow" onClick={() => {}} />
        </div>
        <ScrollButton />
        <CartButton />
        <BurgerButton />

        <br />
        <div style={{ width: '700px' }}>
          <Pagination total={40} defaultPageSize={8} />
        </div>
        <br />
        <div>ProductCard</div>
        <div style={{ width: '320px', height: '450px' }}>
          <ProductCard
            title="Wool sweater"
            price={150}
            id="id-15"
            setData={() => console.log('use state setter')}
            isFavourite={false}
            isInCart={false}
          />
        </div>
        <br />
        <HowItsMade />
        <CollapseComponent list={faqList['Returns & refunds']} />
        <div>Image skeleton</div>
        <ImageSkeleton />
      </Container>
    </div>
  );
};
