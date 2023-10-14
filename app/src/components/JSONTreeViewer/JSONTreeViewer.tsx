import { JSONValue } from "../../types";
import {
  Filename,
  JSONTreeViewerContainer
} from "./styles";
import RenderJSONTree from "./RenderJSONTree";

type Props = {
  data: JSONValue;
  filename: string;
}

function JSONTreeViewer({ data, filename }: Props) {
  if (!data) return null

  return (
    <JSONTreeViewerContainer>
      <Filename>{filename}</Filename>
      {data && RenderJSONTree(data)}
    </JSONTreeViewerContainer>
  );
}

export default JSONTreeViewer;
