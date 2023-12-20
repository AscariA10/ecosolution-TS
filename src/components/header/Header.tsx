import { InnerContainer } from "../common/InnerContainer/InnerContainer";

import { PageLogo } from "../../assets/svg-components/PageLogo/PageLogo";
import { Menu } from "../../assets/svg-components/Menu";
import { HeaderContent, MenuButton } from "./Header.styled";

export const Header: React.FC = () => {
   return (
      <header>
         <InnerContainer>
            <HeaderContent>
               <PageLogo />
               <MenuButton type="button">
                  <Menu />
               </MenuButton>
            </HeaderContent>
         </InnerContainer>
      </header>
   );
};
