import React from 'react';
import {Story, Meta} from '@storybook/react';
import {AddItemForm} from './AddItemForm';
import {AddItemFormPropsType} from './AddItemForm';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Todolist/AddItemForm',
    component: AddItemForm,
    argTypes: {
        onClick: {
            description: 'Button inside form clicked'
        },
    },
} as Meta;

const Template: Story<AddItemFormPropsType> = (args) => <AddItemForm {...args} />;

export const AddItemFormExample = Template.bind({});
AddItemFormExample.args = {
    addItem: action('Button inside form clicked')
};

export const AddItemFormDisabledExample = (props: any) => {
    return (
        <AddItemForm addItem={action('Button inside form clicked')} disabled={true}/>
    )
};
