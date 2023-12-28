import heroImg from "../../../assets/images/hero/hero_img.jpg";
import heroImg2x from "../../../assets/images/hero/hero_img@2x.jpg";
import heroImgTablet from "../../../assets/images/hero/hero_img_tablet.jpg";
import heroImgTablet2x from "../../../assets/images/hero/hero_img_tablet@2x.jpg";

import { InnerContainer } from "../../common/InnerContainer/InnerContainer";
import { Section } from "../../common/Section/Section";
import { LightButton } from "../../common/LightButton/LightButton";

import { HeroContent, MainTitle, Appeal, Contacts, Address, Email, Picture } from "./Hero.styled";

export const Hero: React.FC = () => {
   return (
      <Section>
         <InnerContainer>
            <HeroContent>
               <MainTitle>renewable energy for any task</MainTitle>
               <Appeal>
                  Development and implementation of renewable non-polluting energy sources,
                  generating power generation using energy wind, sun, water, biomass
               </Appeal>
               <LightButton title="Learn more" />
               <Contacts>
                  <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
                  <Email type="mail" href="office@ecosolution.com">
                     office@ecosolution.com
                  </Email>
                  <p>ecosolution &#169; 2023</p>
               </Contacts>
               <Picture>
                  <source
                     srcSet={`${heroImgTablet} 1x, ${heroImgTablet2x} 2x`}
                     media="(min-width: 768px)"
                  />
                  <source srcSet={`${heroImg} 1x, ${heroImg2x} 2x`} />
                  <img src={`${heroImg}`} alt="hero_image" />
               </Picture>
            </HeroContent>
         </InnerContainer>
      </Section>
   );
};
