import { useState } from "react";

import {
  Container,
  Description,
  Title,
  ErrorMessage
} from "./styles"
import { FileUploader } from "./components/FileUploader/FileUploader";
import { JsonValue } from "./components/JsonTreeViewer/types";
import { JsonTreeViewer } from "./components/JsonTreeViewer/JsonTreeViewer";
import { Loader } from "./components/Loader/styles";

const App = () => {
  const [json, setJSON] = useState<JsonValue>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [filename, setFilename] = useState<string>('');

  const handleFileUploaded = (file: File) => {
    setLoading(true);
    setFilename(file.name);
    setError('')

    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      try {
        const jsonString: string = e.target?.result as string;
        const jsonParser: JsonValue = JSON.parse(jsonString);
        setJSON(jsonParser);
        setError('')
      } catch (error) {
        setJSON(null)
        setError('Invalid file. Please load a valid JSON file.');
      } finally {
        setLoading(false);
      }
    }

    fileReader.readAsText(file);
  }

  return (
    <Container>
      <Title>JSON Tree Viewer</Title>

      <Description>
        Simple JSON Viewer that runs completely on-client. No data exchange.
      </Description>

      <FileUploader
        onFileSelected={handleFileUploaded}
        accept="application/JSON"
      />

      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}

      {loading && <Loader />}

      {!loading && json && (
        <JsonTreeViewer
          data={json}
          title={filename}
        />
      )}
    </Container>
  )
}

export default App;
