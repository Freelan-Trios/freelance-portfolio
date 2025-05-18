//  Resusable component types

export type LoadersProps = {
  isVisible: boolean;
};

export type CustomInputBoxProps = {
  title?: string;
  placeholder?: string;
  hintText?: string;
  errText?: string;
  inputType?:
    | "text"
    | "textArea"
    | "email"
    | "number"
    | "password"
    | "tel"
    | "url";
  value: string;
  onPressChange: (value: string) => void;
  isSecure?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  maxLength?: number;
  icon?: React.ReactNode;
};

export type SearchDropdownBoxProps<T extends Record<string, any>> = {
  options: T[];
  fieldName?: keyof T;
  onSelect: (selected: string[]) => void;
  selectedItemList: string[];
  isMulti?: boolean;
};

export type CustomModalProps = {
  title: string;
  onPressNegativeBtn: any;
  onPressPositiveBtn: any;
  onPressResetBtn?: any;
  isOpen: boolean;
  negativeText?: string;
  positiveText?: string;
  ResetText?: string;
  renderContent: any;
};

export type CustomButtonProps = {
  label: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  isdisabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};
