import * as Form from "@radix-ui/react-form";
import IconWrapper from "../wrappers/iconWrapper";
import handleLogin from "@falcon-z/app/actions";
import { useSearchParams } from "next/navigation";

export default function SignInForm() {
  const searchparams = useSearchParams();

  const error = searchparams.get("error");
  const message = searchparams.get("message");

  return (
    <Form.Root
      action={handleLogin}
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
      </Form.Field>
      <Form.Submit className="my-4 rounded-full bg-gray-800 w-full p-4 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-700 transition-all duration-200 ">
        Submit
      </Form.Submit>
    </Form.Root>
  );
}
