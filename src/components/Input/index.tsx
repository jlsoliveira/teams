import * as S from "./styles";

import { TextInput, TextInputProps } from "react-native";

import { useTheme } from "styled-components/native";

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: InputProps) {
  const { COLORS } = useTheme();
  return (
    <S.Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    ></S.Container>
  );
}
