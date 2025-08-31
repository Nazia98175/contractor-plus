import { SignupForm } from "@/components/SignupForm";

const SignupPage = () => {
  return (
    <div className="main-container flex flex-col items-center justify-center py-10 md:px-6">
      <div className="mb-8">
        <h1 className="text-center text-3xl font-bold">Create Your Account</h1>
        <p className="text-muted-foreground mt-2 text-center">
          Sign up for free to get unlimited material searches and save your
          lists
        </p>
      </div>

      <SignupForm />
    </div>
  );
};

export default SignupPage;
