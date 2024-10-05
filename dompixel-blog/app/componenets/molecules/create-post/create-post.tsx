"use client";
import { Input, Text } from "@mantine/core";
import { FormText } from "../../atoms/text-editor/text-editor";
import { ButtonProgress } from "../../atoms/text-editor/button/button";

interface InputComponentProps {
  placeholder: string;
}

function InputComponent({ placeholder }: InputComponentProps) {
  return <Input placeholder={placeholder} />;
}

const CreatePostComponent = () => {
  return (
    <div>
      <div className="px-5 md:px-20 lg:px-40">
        <h3 className="mt-8 bg-brand-primary-10 w-[12rem] text-brand-secondary-10 pl-2 font-semi-bold">
          CREATE A NEW POST
        </h3>
        <div className="flex gap-2 flex-col my-4">
            <Text>Url of Image</Text>
            <InputComponent placeholder="Type the url of image" />
          <Text>Title</Text>
          <InputComponent placeholder="Type the title of the content" />
          <Text>Description</Text>
          <InputComponent placeholder="Type a short description of the content" />
          <Text>Content</Text>
          <FormText />

          <ButtonProgress/>
        </div>
      </div>
    </div>
  );
};

export default CreatePostComponent;
