import * as S from "./styles";

import { Button, Header, Highlight, Input } from "@/components";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate("players", { group: group });
  }

  return (
    <S.Container>
      <Header showBackButton />
      <S.Containt>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </S.Containt>
    </S.Container>
  );
}
