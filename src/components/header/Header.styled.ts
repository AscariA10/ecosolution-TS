import styled from "@emotion/styled";

import { COLORS } from "../../styles/colors/colors";

export const HeaderContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const GetButton = styled.button`
   display: none;

   @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 16px;

      background-color: ${COLORS.ACCENT};

      border: 0px;
      border-radius: 20px;

      &:hover {
         color: ${COLORS.ACCENT};
         background-color: ${COLORS.ACCENT_DARK};

         span:last-of-type {
            background-color: ${COLORS.ACCENT};
         }
      }
   }
`;

export const IconWrapper = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;

   width: 14px;
   height: 14px;
   margin-left: 12px;

   background-color: ${COLORS.ACCENT_DARK};

   border-radius: 50%;
`;

export const MenuButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 12px;

   background-color: ${COLORS.MENU_PRIMARY};

   border: 0px;
   border-radius: 50%;

   &:hover {
      background-color: ${COLORS.ACCENT};
   }

   @media screen and (min-width: 768px) {
      margin-left: auto;
      margin-right: 12px;
   }
`;
