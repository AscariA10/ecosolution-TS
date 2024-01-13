import { IsectionTitle } from "../../../interfaces/component-int";

import { Title } from "./SectionTitle.styled";

export const SectionTitle: React.FC<IsectionTitle> = ({ title }: IsectionTitle) => {
   return <Title>{title}</Title>;
};
