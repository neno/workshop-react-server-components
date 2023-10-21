import {ReactNode} from "react";

export interface TabProps {
  name: string;
  count?: number;
  children: ReactNode;
}

export const Tab = ({ children }: TabProps ) => <>{children}</>;