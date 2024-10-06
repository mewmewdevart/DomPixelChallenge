"use client";

import { Input, Text } from "@mantine/core";
import { FormTextComponent } from "@atoms/text-editor/text-editor";
import { ButtonProgressComponent } from "@atoms/button-progress/button";

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
        <h3 className="mt-4 bg-brand-primary-10 w-[12rem] text-brand-secondary-10 pl-2 font-semi-bold">
          Create a new post
        </h3>
        <div className="flex gap-2 flex-col my-4">
          <Text className="font-semibold">Url of Image</Text>
          <InputComponent placeholder="Type the url of image" />
          <Text className="font-semibold">Title</Text>
          <InputComponent placeholder="Type the title of the content" />
          <Text className="font-semibold">Description</Text>
          <InputComponent placeholder="Type a short description of the content" />
          <Text className="font-semibold">Content</Text>
          <FormTextComponent />

          <ButtonProgressComponent />
        </div>
      </div>
    </div>
  );
};

export default CreatePostComponent;
