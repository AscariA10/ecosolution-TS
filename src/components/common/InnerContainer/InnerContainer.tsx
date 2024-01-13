import { Wrapper } from "./InnerContainer.styled";
import { IcommonProps } from "../../../interfaces/component-int";

export const InnerContainer: React.FunctionComponent<IcommonProps> = ({
   children,
}: IcommonProps) => {
   return <Wrapper>{children}</Wrapper>;
};
