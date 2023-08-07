import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { UploadClient } from "@uploadcare/upload-client";

export default function PostImageUploader() {
  const client = new UploadClient({
    publicKey: `${process.env.NEXT_PUBLIC_UPCARE_PUBLIC_KEY}`,
  });

  const { getInputProps, getRootProps } = useDropzone({
    maxFiles: 1,
    maxSize: 5000000,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDropAccepted(files, event) {
      client.uploadFile(files[0]).then((data) => console.log(data));
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
