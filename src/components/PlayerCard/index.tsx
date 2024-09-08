import * as S from "./styles";

import { ButtonIcon } from "../ButtonIcon";

type PlayersCardProps = {
  name: string;
  onRemove: () => void;
};

export function PlayersCard({ name, onRemove }: PlayersCardProps) {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </S.Container>
  );
}
