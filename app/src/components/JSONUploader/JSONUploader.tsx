import React, { useRef } from "react";

import { StyledButton, StyledInput } from "./styles";

type Props = {
  onClick: (file: File) => void
}

const JSONUploader = ({ onClick }: Props) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInput.current !== null) {
      hiddenFileInput.current.click();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (!file) return
    if (file.size > 2000) return alert('File size is too big. Please upload a file smaller than 1MB.')
    onClick(file)
  }

  return (
    <>
      <StyledButton
        type="button"
        onClick={handleClick}
      >
        Load JSON
      </StyledButton>
      <StyledInput
        type="file"
        onChange={handleFileUpload}
        ref={hiddenFileInput}
        accept="application/JSON"
      />
    </>
  )
}

export default JSONUploader
