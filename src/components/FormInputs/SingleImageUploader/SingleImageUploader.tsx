import React from "react";
import "./SingleImageUploader.css";
import { Image, Header, Icon, Loader } from "semantic-ui-react";
import noImage from "./noImage.jpg";

interface SingleImageUploaderProps {
  url: string | undefined;
  handleUpload: (file: File) => Promise<any>;
  onChange: (url: string) => void;
}

export const SingleImageUploader = ({
  url,
  handleUpload,
  onChange,
}: SingleImageUploaderProps) => {
  const [uploading, setUploading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const fileRef = React.useRef({} as any);
  const openFileDialog = () => fileRef.current.click();

  const handleFile = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files?.length) {
      setUploading(true);
      handleUpload(files[0])
        .then((url) => onChange(url))
        .catch(() => setError(true))
        .finally(() => setUploading(false));
    }
  };

  return (
    <div className="img-uploader-wrapper">
      <input
        ref={fileRef}
        type="file"
        onChange={handleFile}
        accept="image/*"
        style={{ display: "none" }}
      />
      <div className="img-container">
        {!uploading && (
          <div className="upload-hint-container">
            <Header content={"Upload new Image"} as="h4" />
            <Icon
              className="upload-icon"
              name="upload"
              size="large"
              onClick={openFileDialog}
            />
          </div>
        )}
        {error && (
          <div className="upload-error-container">
            <Header content={"Error upload new Image"} as="h4" color="red" />
          </div>
        )}
        {uploading && (
          <div className="upload-loading-container">
            <Loader
              size="large"
              active
              inline="centered"
              inverted
              content="Uploading..."
            />
          </div>
        )}

        <Image src={url || noImage} className="img" />
      </div>
    </div>
  );
};
