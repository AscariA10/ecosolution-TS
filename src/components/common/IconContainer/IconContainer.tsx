import { Iwidth } from "../../../interfaces/style-interfaces";

import { Container } from "./IconContainer.styled";

interface Props {
   width: Iwidth;
   children: React.ReactNode;
}

export const IconContainer: React.FC<Props> = ({ children, width }: Props) => {
   return <Container width={width}>{children}</Container>;
};
