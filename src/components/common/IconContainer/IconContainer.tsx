import { Container } from "./IconContainer.styled";

interface Props {
   width: string;
   children: React.ReactNode;
}

export const IconContainer: React.FC<Props> = ({ children, width }: Props) => {
   return <Container>{children}</Container>;
};
