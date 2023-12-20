import styled from "@emotion/styled";

import { Iwidth } from "../../../interfaces/style-interfaces";

type TWidth = {
   width: Iwidth;
};

export const Container = styled.span<TWidth>`
   display: block;
`;
