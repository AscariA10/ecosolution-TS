import { IconContainer } from "../../components/common/IconContainer/IconContainer";

export const ArrowDown = () => {
   return (
      <IconContainer
         width={{ mobile: "8px", tablet: "8px", desktop: "" }}
         height={{ mobile: "9px", tablet: "8px", desktop: "" }}
      >
         <svg fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M7.27588 5.31006L4.99963 7.33339L2.72338 5.31006"
               stroke="#173D33"
               strokeWidth="0.833607"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M4.99951 1.66675L4.99951 7.27675"
               stroke="#173D33"
               strokeWidth="0.833607"
               strokeMiterlimit="10"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </IconContainer>
   );
};
