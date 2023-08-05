import { CreateMultipartUploadCommand, S3 } from "@aws-sdk/client-s3";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

export default function PostImageUploader() {
  const awsClient = new S3({
    region: "us-east-1",
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
      if (files.length > 0) {
        const file = files[0];
        const params = {
          Bucket: `${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}`,
          Key: `${file.name}`,
          Body: file,
        };

        awsClient
          .send(new CreateMultipartUploadCommand(params))
          .then((data) => {
            const url = `https://${data.Bucket}.s3.amazonaws.com/${data.Key}`;

            console.log(url);
            console.log(data);
          })
          .catch((error) => console.error(error));
      }
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
