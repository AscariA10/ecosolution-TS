import { Iheight, Iwidth } from "./style-interfaces";

export interface IcommonProps {
   children: React.ReactNode;
}

export interface IsizeProps extends IcommonProps {
   width: Iwidth;
   height: Iheight;
}

export interface Ibutton {
   title: string;
}

export interface IsectionTitle {
   title: string;
}

export interface IvalueCard extends IcommonProps {
   title: string;
   description: string;
}
