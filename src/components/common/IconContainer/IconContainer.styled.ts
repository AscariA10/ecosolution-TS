import styled from "@emotion/styled";

import { Iwidth, Iheight } from "../../../interfaces/style-interfaces";

type TOptions = {
   width: Iwidth;
   height: Iheight;
};

export const Container = styled.span<TOptions>`
   display: block;
   width: ${props => props.width.mobile};
   height: ${props => props.height.mobile};
`;
