import { InnerContainer } from "../common/InnerContainer/InnerContainer";

import { PageLogo } from "../../assets/svg-components/PageLogo/PageLogo";
import { ArrowDown } from "../../assets/svg-components/ArrowDown";
import { Menu } from "../../assets/svg-components/Menu";
import { MainHeader, GetButton, HeaderContent, MenuButton, IconWrapper } from "./Header.styled";

export const Header: React.FC = () => {
   return (
      <MainHeader>
         <InnerContainer>
            <HeaderContent>
               <PageLogo />
               <MenuButton type="button">
                  <Menu />
               </MenuButton>
               <GetButton type="button">
                  <span>Get in touch</span>
                  <IconWrapper>
                     <ArrowDown />
                  </IconWrapper>
               </GetButton>
            </HeaderContent>
         </InnerContainer>
      </MainHeader>
   );
};
