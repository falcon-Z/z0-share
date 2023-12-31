"use client";

import { handlePostCreation } from "@falcon-z/app/actions";
import * as Form from "@radix-ui/react-form";
import PostImageUploader from "./postImageUploader";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function NewPostForm() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const searchparams = useSearchParams();

  const error = searchparams.get("error");
  const message = searchparams.get("message");

  const getFileUrl = (url: string | null) => setImageUrl(url);

  return (
    <Form.Root
      action={handlePostCreation}
      className="w-full flex flex-col gap-4"
    >
      <Form.Field
        name="title"
        className="flex flex-col gap2 items-baseline justify-between"
      >
        <Form.Control asChild>
          <input
            type="text"
            required
            placeholder="Title of your Post"
            className="input-field rounded-2xl"
          />
        </Form.Control>
        <Form.Message match={"valueMissing"} className="form-error-message">
          Please enter a Title
        </Form.Message>
      </Form.Field>
      <Form.Field
        name="image"
        className="flex flex-col gap2 items-baseline justify-between"
      >
        <Form.Control asChild>
          <input
            type="url"
            required
            placeholder="Enter Image Url"
            className="input-field rounded-2xl"
            hidden
            value={imageUrl ? imageUrl : undefined}
            minLength={5}
          />
        </Form.Control>
        <Form.Message match={"typeMismatch"} className="form-error-message">
          Invalid Url
        </Form.Message>
        <Form.Message match={"valueMissing"} className="form-error-message">
          Please select an Image
        </Form.Message>
      </Form.Field>

      <Form.Field
        name="tags"
        className="flex flex-col gap2 items-baseline justify-between"
      >
        <Form.Control asChild>
          <input
            type="text"
            placeholder="Enter tags in a comma seperated list"
            className="input-field rounded-2xl"
          />
        </Form.Control>
      </Form.Field>
      <div className="p-2 rounded-2xl border-2 border-dashed border-gray-700/25">
        <PostImageUploader sendFileUrl={getFileUrl} />
      </div>

      <Form.Submit className="my-4 rounded-full bg-gray-800 w-full p-4 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-700 transition-all duration-200">
        Submit
      </Form.Submit>
    </Form.Root>
  );
}
