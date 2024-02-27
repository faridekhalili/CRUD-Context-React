import { Styles } from "./styles";

interface IProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  onChangeText?(value: string): void;
  onBlur?(): void;
  autoFocus?: boolean;
  value?: any;
  defaultValue?: string | number;
}

export const Input = ({
  type = "text",
  name,
  label,
  placeholder,
  onChangeText,
  onBlur,
  autoFocus = false,
  value,
  defaultValue,
}: IProps) => {
  return (
    <Styles.Container>
      {!!label && <Styles.Label htmlFor={type}>{label}</Styles.Label>}
      <Styles.Input
        placeholder={placeholder ?? label}
        type={type}
        name={name}
        id={type}
        autoComplete="off"
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        value={value}
        {...(!!onChangeText && {
          onChange: (event) => onChangeText(event?.target?.value),
        })}
        {...(onBlur && {
          onBlur: () => onBlur(),
        })}
      />
    </Styles.Container>
  );
};
