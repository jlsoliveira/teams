import * as S from "./styles";

import { Alert, FlatList } from "react-native";
import {
  Button,
  GroupCard,
  Header,
  Highlight,
  ListEmpty,
  Loading,
} from "@/components";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { groupGetAll } from "@/storage/group/groupsGetAll";

export function Groups() {
  const navigation = useNavigation();
  const [groups, setGrups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupGetAll();

      setGrups(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Turmas", "Não foi possível carregar as turmas");
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma." />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
