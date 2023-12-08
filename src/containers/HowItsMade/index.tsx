import { Heading2, Text2Bold } from '../../ui-kit/Typography';
import { Video } from '../../ui-kit/Video';
import video from './assets/video.mp4';
import {
  StyledContent,
  StyledHeading,
  StyledInfo,
  StyledWrapper,
} from './styles';

export const HowItsMade = () => {
  return (
    <StyledWrapper>
      <Video src={video} />
      <StyledContent>
        <StyledHeading>
          <Heading2>How It's Made</Heading2>
          <Text2Bold $case="uppercase">
            we’re big on things like cotton or wool quality.
          </Text2Bold>
        </StyledHeading>
        <StyledInfo>
          <Text2Bold>
            01// <br />
            <br />
            Crafted in the Ukraine. Clean and True. We don't just make clothes.
            We craft stories. Local tales, woven with resilience and skill.
            Every thread tells of artisans, molding their histories into our
            fabrics. A commitment to change, to climate, community, and economy.
            Masters of detail, we work. Crafting tales, not just clothes.
            Because we do. It's our art. <br />
            <br />
            Most of our inspiration comes from our surroundings: the dark, inky
            skies of our winter nights, the long blades of grass and colorful
            blooming flowers in meadows throughout the country. If we spent days
            and weeks exploring it as kids in Ukraine, it’s probably something
            we’ve infused into a knit design. <br />
            <br /> We use only OEKO-TEX® non-toxic certified dyes and also work
            with a number of local artists who specialise in hand-dyeing with
            natural herbs.
          </Text2Bold>
          <Text2Bold>
            02// <br />
            <br />
            But we also like to mix the old and the new, by incorporating our
            favorite elements of free spirited pagan mythology, something that’s
            been celebrated in our region for centuries. All of our knits are
            founded on the tradition of functional design, while being stylish
            enough that there’s a good chance you might accidentally match with
            your closest friends. <br />
            <br />
            All of our yarns are biodegradable and we’re totally plastic free:
            even down to our buttons and compostable packaging. We work with
            ethical suppliers from around the world who source only natural, the
            highest quality, cruelty-free yarns, like local family-run wool
            farms. <br />
            <br />
            Our knits are always produced in small batches which, sure, means
            less profit for us but ensures we never have leftovers. We only make
            what we know we’ll sell.
          </Text2Bold>
        </StyledInfo>
      </StyledContent>
    </StyledWrapper>
  );
};
