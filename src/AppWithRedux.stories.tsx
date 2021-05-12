import React from 'react';
import {Meta, Story} from '@storybook/react';
import AppWithRedux from './AppWithRedux';

export default {
    title: 'Todolist/AppWithRedux',
    component: AppWithRedux,
    argTypes: {}
} as Meta;

const Template: Story = (args) => <AppWithRedux {...args} />;

export const AppWithReduxExample = Template.bind({});
AppWithReduxExample.args = {};
