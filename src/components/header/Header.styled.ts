import styled from "@emotion/styled";

import { COLORS } from "../../styles/colors/colors";

export const HeaderContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const MenuButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 12px;

   background-color: ${COLORS.MENU_PRIMARY};

   border: 0px;
   border-radius: 50%;
`;
