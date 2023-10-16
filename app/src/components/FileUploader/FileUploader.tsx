import React, { useRef } from "react";

import { StyledButton, StyledInput } from "./styles";
import { bytesToMB } from "../../utils";

type FileUploaderProps = {
  onFileSelected: (file: File) => void
  maxFileSize?: number;
  accept?: string;
}

const MAX_FILE_SIZE = 1048576;

export const FileUploader = ({
  onFileSelected,
  maxFileSize = MAX_FILE_SIZE,
  accept
}: FileUploaderProps) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInput.current !== null) {
      hiddenFileInput.current.click();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (!file) return
    if (file.size > maxFileSize) {
      alert(
        `File size is too big. Please upload a file smaller than ${bytesToMB(maxFileSize)}MB.
        `
      )
      return
    }
    onFileSelected(file)
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
        accept={accept}
      />
    </>
  )
}
