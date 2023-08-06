import {
  CreateMultipartUploadCommand,
  PutObjectCommand,
  S3,
  S3Client,
} from "@aws-sdk/client-s3";
import { data } from "autoprefixer";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

export default function PostImageUploader() {
  const client = new S3Client({
    region: `${process.env.NEXT_PUBLIC_AWS_REGION}`,
    credentials: {
      accessKeyId: `${process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID}`,
      secretAccessKey: `${process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY}`,
    },
  });

  const { getInputProps, getRootProps } = useDropzone({
    maxFiles: 1,
    maxSize: 5000000,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDropAccepted(files, event) {
      const param = {
        Bucket: `${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}`,
        Key: files[0].name,
        Body: files[0],
      };

      client
        .send(new PutObjectCommand(param))
        .then((data) => console.log(data));
    },
  });

  return (
    <>
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
    </>
  );
}
