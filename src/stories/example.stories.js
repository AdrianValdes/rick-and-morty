// YourComponent.stories.js

import React from "react";
import { Button } from "./Button";

// This default export determines where your story goes in the story list
export default {
  title: "YourComponent",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
