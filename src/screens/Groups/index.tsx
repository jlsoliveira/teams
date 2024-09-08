import * as S from "./styles";

import { Button, GroupCard, Header, Highlight, ListEmpty } from "@/components";

import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function Groups() {
  const navigation = useNavigation();
  const [groups, setGrups] = useState<string[]>([
    "Turma hanna",
    "Turma evandro",
  ]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma." />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
