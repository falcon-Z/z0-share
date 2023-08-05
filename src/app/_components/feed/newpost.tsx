"use client";

import { CreateMultipartUploadCommand, S3 } from "@aws-sdk/client-s3";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

export default function NewPost() {
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      maxFiles: 1,
      maxSize: 5000000,
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
      onDropAccepted(files, event) {
        const file = files[0];
      },
    });

  const file = acceptedFiles[0];

  return (
    <div className="w-full rounded-2xl border-dashed border-2 border-gray-700 p-8 gap-4 grid place-items-center">
      <div
        {...getRootProps({
          className: "dropzone grid place-items-center gap-8",
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
        </div>
      </div>
    </div>
  );
}
