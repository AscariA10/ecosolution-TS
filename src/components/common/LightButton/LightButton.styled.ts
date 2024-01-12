import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors/colors";

export const Button = styled.button`
   margin-left: auto;
   margin-right: auto;
   display: flex;
   align-items: center;
   width: fit-content;

   padding: 4px 4px 4px 16px;

   background-color: ${COLORS.BACKGROUND_LIGHT};
   color: ${COLORS.ACCENT_DARK};
   line-height: 1.13;
   letter-spacing: -0.039em;

   border-radius: 19px;
   border: 1px solid ${COLORS.ACCENT};

   @media screen and (min-width: 768px) {
      grid-area: button;
      margin-top: 19px;
      margin-left: 0;
   }
   @media screen and (min-width: 1280px) {
      grid-area: button;
      margin-top: 0;
      margin-top: 0;
   }
`;

export const IconCircle = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 12px;
   width: 32px;
   height: 32px;
   background-color: ${COLORS.ACCENT};

   border-radius: 50%;
`;
