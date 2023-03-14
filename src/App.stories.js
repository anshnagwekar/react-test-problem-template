// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories
import App from "./App";

// we include the component of interest (App) in the default export
export default {
    title: "App",
    component: App,
};

const Template = (args) => <App {...args} />;

// export the story with no args (since we do not have an alterable state to test)
export const Default = Template.bind({});
Default.args = {};