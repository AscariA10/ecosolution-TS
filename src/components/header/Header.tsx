import { MainHeader } from "./Header.styled";
import { PageLogo } from "../../assets/svg-components/PageLogo/PageLogo";

export const Header: React.FC = () => {
   return (
      <MainHeader>
         <PageLogo />
      </MainHeader>
   );
};
