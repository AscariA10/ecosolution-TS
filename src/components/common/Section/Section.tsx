import { IcommonProps } from "../../../interfaces/component-int";
import { Wrapper } from "./Section.styled";

export const Section: React.FC<IcommonProps> = ({ children }) => {
   return <Wrapper>{children}</Wrapper>;
};
