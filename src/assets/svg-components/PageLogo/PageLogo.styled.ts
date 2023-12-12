import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors/colors";

export const Container = styled.span`
   display: block;
   width: 269px;
   color: ${COLORS.ACCENT_DARK};

   &: hover {
      color: ${COLORS.ACCENT};
   }
   &: focus {
      color: ${COLORS.ACCENT};
   }
`;
