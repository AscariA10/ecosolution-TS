import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors/colors";

export const HeroContent = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   align-items: center;
   row-gap: 24px;
`;

export const MainTitle = styled.h1`
   font-family: Oswald;
   font-size: 36px;
   font-weight: 400;
   line-height: 1;
   text-transform: uppercase;
`;

export const Appeal = styled.p`
   text-align: justify;
`;

export const Contacts = styled.div`
   padding-top: 24px;

   border-top: 1px solid ${COLORS.ACCENT};
`;

export const Address = styled.address`
   margin-bottom: 8px;
   text-align: center;
   font-style: normal;
`;

export const Email = styled.a`
   display: block;

   text-align: center;
   text-decoration: none;
`;

export const Picture = styled.picture`
   margin-top: 12px;
`;
