import * as Form from "@radix-ui/react-form";
import IconWrapper from "../wrappers/iconWrapper";
import { handleRegistration } from "@falcon-z/app/actions";
import { useSearchParams } from "next/navigation";

export default function SignUpForm() {
  const searchparams = useSearchParams();

  const error = searchparams.get("error");
  const message = searchparams.get("message");

  return (
    <Form.Root
      action={handleRegistration}
      className="w-full flex flex-col items-center justify-center gap-4"
    >
      <div
        className={`form-error-message flex items-center gap2 justify-center ${
          error ? "block" : "hidden"
        }`}
      >
        <span className="mr-4">
          <IconWrapper icon={"carbon:warning"} />
        </span>
        {message}
      </div>

      <Form.Field
        name="name"
        className="flex justify-between items-baseline flex-col  gap-2 w-full "
      >
        <Form.Control asChild>
          <input
            type="text"
            placeholder="Enter your Name here"
            required
            minLength={3}
            maxLength={128}
            className="input-field text-center rounded-xl"
          />
        </Form.Control>
        <Form.Message
          match={"valueMissing"}
          className="form-error-message flex items-center gap2 justify-center"
        >
          <span className="mr-4">
            <IconWrapper icon={"carbon:warning"} />
          </span>
          Please Enter your Name
        </Form.Message>
        <Form.Message
          match={"tooShort"}
          className="form-error-message flex items-center justify-center"
        >
          <span className="mr-4">
            <IconWrapper icon={"carbon:warning"} />
          </span>
          Name must be atleast 3 Charecters long
        </Form.Message>
        <Form.Message
          match={"tooLong"}
          className="form-error-message flex items-center justify-center"
        >
          <span className="mr-4">
            <IconWrapper icon={"carbon:warning"} />
          </span>
          Too Long, Conder using less Charecters or Space
        </Form.Message>
      </Form.Field>
      <Form.Field
        name="email"
        className="flex justify-between items-baseline flex-col  gap-2 w-full "
      >
        <Form.Control asChild>
          <input
            type="email"
            placeholder="Enter your e-mail here"
            required
            className="input-field text-center rounded-xl"
          />
        </Form.Control>
        <Form.Message
          match={"valueMissing"}
          className="form-error-message flex items-center gap2 justify-center"
        >
          <span className="mr-4">
            <IconWrapper icon={"carbon:warning"} />
          </span>
          Please Enter your email
        </Form.Message>
        <Form.Message
          match={"typeMismatch"}
          className="form-error-message flex items-center justify-center"
        >
          <span className="mr-4">
            <IconWrapper icon={"carbon:warning"} />
          </span>
          Please, Enter Valid email
        </Form.Message>
      </Form.Field>
      <Form.Field
        name="password"
        className="flex justify-between items-baseline flex-col  gap-2 w-full "
      >
        <Form.Control asChild>
          <input
            type="password"
            placeholder="Enter your Password here"
            required
            minLength={8}
            maxLength={128}
            className="input-field text-center rounded-xl"
          />
        </Form.Control>
        <Form.Message
          match={"valueMissing"}
          className="form-error-message flex items-center gap2 justify-center"
        >
          <span className="mr-4">
            <IconWrapper icon={"carbon:warning"} />
          </span>
          Please Enter your Password
        </Form.Message>
        <Form.Message
          match={"tooShort"}
          className="form-error-message flex items-center gap2 justify-center"
        >
          <span className="mr-4">
            <IconWrapper icon={"carbon:warning"} />
          </span>
          Password must contain atleast 8 Charecters
        </Form.Message>
        <Form.Message
          match={"tooLong"}
          className="form-error-message flex items-center gap2 justify-center"
        >
          <span className="mr-4">
            <IconWrapper icon={"carbon:warning"} />
          </span>
          Password too long
        </Form.Message>
      </Form.Field>
      <Form.Submit className="my-4 rounded-full bg-gray-800 w-full p-4 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-700 transition-all duration-200 ">
        Submit
      </Form.Submit>
    </Form.Root>
  );
}
