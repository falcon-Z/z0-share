"use client";

import { CreateMultipartUploadCommand, S3 } from "@aws-sdk/client-s3";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import PostImageUploader from "./postImageUploader";

export default function NewPost() {
  return (
    <div className="w-full rounded-2xl border-dashed border-2 border-gray-700 p-8 gap-4 grid place-items-center">
      <PostImageUploader />
    </div>
  );
}
