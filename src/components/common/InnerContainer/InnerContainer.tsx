import { Wrapper } from "./InnerContainer.styled";

interface IProps {
   children: React.ReactNode;
}

export const InnerContainer: React.FunctionComponent<IProps> = ({ children }: IProps) => {
   return <Wrapper>{children}</Wrapper>;
};
