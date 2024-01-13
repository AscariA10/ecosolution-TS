import { InnerContainer } from "../../common/InnerContainer/InnerContainer";
import { Section } from "../../common/Section/Section";
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";

import { Definition } from "./Values.styled";

export const Values: React.FC = () => {
   return (
      <Section>
         <InnerContainer>
            <SectionTitle title="main values of our company" />
            <Definition>
               EcoSolution envisions a world where sustainable energy solutions power a brighter and
               cleaner future for all. We aspire to be at the forefront of the global shift towards
               renewable energy, leading the way in innovative technologies that harness the power
               of nature to meet the world's energy needs.
            </Definition>
            <div></div>
         </InnerContainer>
      </Section>
   );
};
