import * as S from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: S.ButtonIconTypeStyleProps;
};

export function ButtonIcon({
  icon,
  type = "PRIMARY",
  ...rest
}: ButtonIconProps) {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon} type="PRIMARY" type={type}></S.Icon>
    </S.Container>
  );
}
