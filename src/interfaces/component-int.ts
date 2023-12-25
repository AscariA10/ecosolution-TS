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
