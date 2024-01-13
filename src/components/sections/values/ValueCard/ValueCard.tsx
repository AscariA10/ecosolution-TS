import { IvalueCard } from "../../../../interfaces/component-int";

export const ValueCard: React.FC<IvalueCard> = ({ children, title, description }: IvalueCard) => {
   return (
      <div>
         <span>{children}</span>
         <h3>{title}</h3>
         <p>{description}</p>
      </div>
   );
};
