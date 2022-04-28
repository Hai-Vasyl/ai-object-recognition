import { MouseEvent, ReactNode } from "react";

// form

export interface IFormField {
  value: string;
  msg: string;
  hidden: boolean;
  title: string;
  type: string;
  Element: any;
}

export interface IFormFields {
  [key: string]: IFormField;
}

// button

export interface IButtonProps {
  title: string;
  click: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: ReactNode;
}
