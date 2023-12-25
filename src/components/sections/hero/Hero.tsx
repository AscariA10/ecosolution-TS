import { InnerContainer } from "../../common/InnerContainer/InnerContainer";
import { Section } from "../../common/Section/Section";
import { LightButton } from "../../common/LightButton/LightButton";

import { MainTitle, Appeal } from "./Hero.styled";

export const Hero: React.FC = () => {
   return (
      <Section>
         <InnerContainer>
            <MainTitle>renewable energy for any task</MainTitle>
            <Appeal>
               Development and implementation of renewable non-polluting energy sources, generating
               power generation using energy wind, sun, water, biomass
            </Appeal>
            <LightButton title="Learn more" />
         </InnerContainer>
      </Section>
   );
};
