import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { UploadClient } from "@uploadcare/upload-client";
import { useState } from "react";

export default function PostImageUploader({
  sendFileUrl,
}: {
  sendFileUrl: (url: string | null) => void;
}) {
  const [fileRejected, setFileRejected] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);

  const client = new UploadClient({
    publicKey: `${process.env.NEXT_PUBLIC_UPCARE_PUBLIC_KEY}`,
  });

  const { getInputProps, getRootProps, acceptedFiles, fileRejections } =
    useDropzone({
      maxFiles: 1,
      maxSize: 5000000,
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
      onDropAccepted(files, event) {
        const handleUpload = async () => {
          setUploading(true);
          const upload = await client.uploadFile(files[0]);

          if (upload.uuid) {
            setUploading(false);
            setUploaded(true);
            sendFileUrl(upload.cdnUrl);
          }
        };
        handleUpload();
      },
      onDropRejected: () => setFileRejected(true),
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <>
      <div
        {...getRootProps({
          className: "dropzone relative grid place-items-center gap-8",
        })}
      >
        <input {...getInputProps()} />
        <p className="text-xl text-center text-gray-400">
          Drag & drop some files here, or click to select files
        </p>
        <div>
          <Image
            src="/images.svg"
            alt=""
            height={128}
            width={128}
            className="object-center object-cover"
          />

          <div className={uploading ? "block" : "hidden"}>
            <div className="absolute inset-0 backdrop-blur-sm grid place-items-center">
              Uploading...
            </div>
          </div>
        </div>
      </div>
      <aside>
        <h4 className={uploaded ? "block" : "hidden"}>Uploaded Successfully</h4>
        <h4>Selected file</h4>
        <ul>{acceptedFileItems}</ul>
        <h4 className={fileRejected ? "block" : "hidden"}>Rejected file</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </>
  );
}
