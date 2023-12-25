import { ArrowRight } from "../../../assets/svg-components/ArrowRight";

import { Ibutton } from "../../../interfaces/component-int";
import { Button, IconCircle } from "./LightButton.styled";

export const LightButton: React.FC<Ibutton> = ({ title = "button" }) => {
   return (
      <Button type="button">
         {title}
         <IconCircle>
            <ArrowRight />
         </IconCircle>
      </Button>
   );
};
