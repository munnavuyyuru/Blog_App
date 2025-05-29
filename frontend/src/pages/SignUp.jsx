import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-5xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Bhargav's
            </span>
            Blog
          </Link>
          <p className="mt-5 text-md">
            Share your thoughts, write articles, and connect with a community of
            passionate bloggers.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4 ">
            <div>
              <Label>your userName</Label>
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label>your email</Label>
              <TextInput type="text" placeholder="name@email.com" id="eamil" />
            </div>
            <div>
              <Label>your password</Label>
              <TextInput type="text" placeholder="password" id="password" />
            </div>

            <Button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
