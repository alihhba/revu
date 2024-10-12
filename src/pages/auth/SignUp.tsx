import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CustomCheck from "../../components/checkBox/CustomCheck";
import CustomInput from "../../components/inputs/CustomInput";
import UserImage from "../../components/UserImage";
import AuthWrapper from "./AuthWrapper";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <AuthWrapper>
      <div className="w-full h-full justify-center items-center mx-auto flex-col max-w-[437px]  md:pt-p-40">
        {/* icon */}
        <div className="max-md:hidden">
          <UserImage image="/public/logo/logo.svg" className="w-[113px] " />
        </div>

        <div className="md:pt-p-30 max-md:text-center">
          <p className="text-h1 font-black">Sign up</p>

          <p className="text-base-14 font-regular text-font-storm">
            Before we start, please enter your current location
          </p>
        </div>

        <div className="pt-p-36 flex flex-col gap-p-8">
          <CustomInput
            label="Country/Area of Residence"
            type="text"
            name="Country/Area of Residence"
          />
          <CustomInput
            label="Country/Area of Residence"
            type="text"
            name="Country/Area of Residence"
          />
          <CustomInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex flex-col items-start gap-p-14 justify-start mt-p-20">
          <CustomCheck title="I agree to receive email updates" />
          <CustomCheck title="I have read and agree to Terms of Service" />
        </div>

        <div className="pt-p-28">
          <Button
            type="purple"
            className="w-full py-p-16"
            content={"Create account"}
          />
        </div>

        <div className="flex items-center gap-p-5 pt-p-100 text-base-14 font-regular md:pb-p-40">
          <p>Already registered?</p> <span>?</span>{" "}
          <p
            onClick={() => navigate("/sign-in")}
            className="text-font-blue cursor-pointer"
          >
            Sign in
          </p>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default SignUp;
