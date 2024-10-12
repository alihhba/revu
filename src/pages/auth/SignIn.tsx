import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CustomCheck from "../../components/checkBox/CustomCheck";
import CustomInput from "../../components/inputs/CustomInput";
import UserImage from "../../components/UserImage";
import AuthWrapper from "./AuthWrapper";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <AuthWrapper>
      <div className="w-full h-full justify-center items-center mx-auto flex-col max-w-[437px]  md:pt-p-40">
        {/* icon */}
        <div className="max-md:hidden">
          <UserImage image="/public/logo/logo.svg" className="w-[113px] " />
        </div>

        <div className="md:pt-p-30 max-md:text-center">
          <p className="text-h1 font-black"> Sign in</p>

          <p className="text-base-14 font-regular text-font-storm">
            Enter your account details or use QR code
          </p>
        </div>

        <div className="pt-p-36 flex flex-col gap-p-8">
          <CustomInput label="Email" type="email" name="email" />
          <CustomInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between mt-p-20">
          <CustomCheck title="Remember me" />
          <p className="text-base-12 font-black">Recover password</p>
        </div>

        <div className="pt-p-28">
          <Button
            type="purple"
            className="w-full py-p-16"
            content={"Sign in"}
          />
        </div>

        <div className="py-p-20 flex items-center max-w-[75%] mx-auto">
          <div className="border-b border-outline-default w-full"></div>
          <div className="px-p-10 text-base-14 font-regular text-font-storm">
            or
          </div>
          <div className="border-b border-outline-default w-full"></div>
        </div>

        <Button
          type="border"
          className="w-full py-p-16"
          content={"Login with Qr code"}
        />

        <div className="flex items-center gap-p-5 pt-p-100 text-base-14 font-regular md:pb-p-40">
          <p>You don’t have an account</p> <span>?</span>{" "}
          <p
            onClick={() => navigate("/sign-up")}
            className="text-font-blue cursor-pointer"
          >
            Create an account
          </p>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
