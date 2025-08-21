import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Want to learn how things work under the hood?
        </h2>
        <p className="text-gray-500 my-2">
          Checkout the "Build Your Own X" repository with various projects
        </p>

        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-tl-xl rounded-bl-none">
          <a
            href="https://github.com/codecrafters-io/build-your-own-x"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build Your Own X
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          className="rounded-xl"
          src="https://freerangestock.com/sample/126126/software-developer-programming-code-on-screen.jpg"
        />
      </div>
    </div>
  );
}
