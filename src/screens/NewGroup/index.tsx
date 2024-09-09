import * as S from "./styles";

import { Button, Header, Highlight, Input } from "@/components";

import { Alert } from "react-native";
import { AppError } from "@/utils";
import { groupCreate } from "@/storage/group/groupCreate";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo grupo", "Informe o nome da turma.");
      }

      await groupCreate(group);
      navigation.navigate("players", { group: group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possivel criar um novo grupo.");
        console.error(error);
      }
    }
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
