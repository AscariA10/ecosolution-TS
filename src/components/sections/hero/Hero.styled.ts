import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors/colors";

export const HeroContent = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   align-items: center;
   gap: 24px;

   @media screen and (min-width: 768px) {
      grid-template-areas:
         "title appeal"
         "title button"
         "contacts contacts"
         "picture picture";

      grid-template-columns: 301px 342px;
      column-gap: 65px;
   }
   @media screen and (min-width: 1280px) {
      grid-template-columns: 485px 363px;
      column-gap: 296px;
      row-gap: 20px;
   }
`;

export const MainTitle = styled.h1`
   font-family: Oswald;
   font-size: 36px;
   font-weight: 400;
   line-height: 1;
   text-transform: uppercase;

   @media screen and (min-width: 768px) {
      grid-area: title;

      font-size: 48px;
      letter-spacing: 0;
   }
   @media screen and (min-width: 1280px) {
      font-size: 64px;
   }
`;

export const Appeal = styled.p`
   text-align: justify;

   @media screen and (min-width: 768px) {
      grid-area: appeal;

      text-align: start;
   }
`;

export const Contacts = styled.div`
   padding-top: 24px;

   border-top: 1px solid ${COLORS.ACCENT};

   @media screen and (min-width: 768px) {
      grid-area: contacts;

      display: flex;
      padding-top: 16px;
   }
   @media screen and (min-width: 1280px) {
      width: 1240px;
      margin-top: 4px;
      padding-top: 12px;
   }
`;

export const Address = styled.address`
   margin-bottom: 8px;
   text-align: center;
   font-style: normal;

   @media screen and (min-width: 768px) {
      margin-bottom: 0px;
      margin-right: 77px;
   }
   @media screen and (min-width: 1280px) {
      margin-right: 492px;
   }
`;

export const Email = styled.a`
   display: block;

   text-align: center;
   text-decoration: none;

   @media screen and (min-width: 768px) {
      margin-right: 50px;
   }
   @media screen and (min-width: 1280px) {
      margin-right: 167px;
   }
`;

export const Trademark = styled.p`
   display: none;
   @media screen and (min-width: 768px) {
      display: block;
   }
`;

export const Picture = styled.picture`
   margin-left: auto;
   margin-right: auto;
   margin-top: 12px;
   @media screen and (min-width: 768px) {
      grid-area: picture;
      margin-top: 16px;
   }
   @media screen and (min-width: 1280px) {
      width: 1240px;
   }
`;
