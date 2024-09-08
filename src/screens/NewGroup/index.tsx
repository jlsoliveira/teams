import * as S from "./styles";

import { Button, Header, Highlight, Input } from "@/components";

export function NewGroup() {
  return (
    <S.Container>
      <Header showBackButton />
      <S.Containt>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </S.Containt>
    </S.Container>
  );
}
