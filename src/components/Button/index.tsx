import * as S from "./styles";

import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: "PRIMARY" | "SECONDARY";
};
export function Button({ title, variant = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <S.Container variant={variant} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
