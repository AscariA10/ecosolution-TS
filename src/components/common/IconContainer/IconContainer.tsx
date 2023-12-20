import { Iwidth, Iheight } from "../../../interfaces/style-interfaces";

import { Container } from "./IconContainer.styled";

interface Props {
   width: Iwidth;
   height: Iheight;
   children: React.ReactNode;
}

export const IconContainer: React.FC<Props> = ({ children, width, height }: Props) => {
   return (
      <Container width={width} height={height}>
         {children}
      </Container>
   );
};
