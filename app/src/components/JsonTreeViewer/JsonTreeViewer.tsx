import {
  Title,
  JsonTreeViewerContainer
} from "./styles";
import { JsonValue } from "./types";
import { JsonNode } from "./JsonNode";

type JsonTreeViewerProps = {
  data: JsonValue;
  title: string;
}

export const JsonTreeViewer = ({ data, title }: JsonTreeViewerProps) => {
  if (!data) return null

  return (
    <JsonTreeViewerContainer>
      <Title>{title}</Title>
      {data && <JsonNode node={data} />}
    </JsonTreeViewerContainer>
  );
}
