import { Select, TextInput, FileInput, Button } from "flowbite-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const createPost = () => {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="reactjs">Full stack</option>
            <option value="javascript">JavaScript</option>
            <option value="nextjs">Java</option>
            <option value="nextjs">Python</option>
            <option value="nextjs">AI</option>
            <option value="nextjs">DSA</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            outline
            className="text-gray-900 dark:text-white bg-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800"
          >
            Upload image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
        />

        <Button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:ring-purple-200"
        >
          Publish
        </Button>
      </form>
    </div>
  );
};

export default createPost;
