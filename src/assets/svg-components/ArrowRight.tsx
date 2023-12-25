import { IconContainer } from "../../components/common/IconContainer/IconContainer";

export const ArrowRight: React.FC = () => {
   return (
      <IconContainer
         width={{ mobile: "16px", tablet: "", desktop: "" }}
         height={{ mobile: "16px", tablet: "", desktop: "" }}
      >
         <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M9.62012 4.45312L13.6668 8.49979L9.62012 12.5465"
               stroke="#173D33"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M2.33325 8.5H13.5533"
               stroke="#173D33"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </IconContainer>
   );
};
