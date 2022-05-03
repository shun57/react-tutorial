import React from 'react';

import { Square } from '../index';

export default {
  component: Square,  // 対象のコンポーネントを指定
  title: 'SquareGame/Square', // Storybookのディレクトリ・ファイル名
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: [null],
};

export const Triangle = Template.bind({});
Triangle.args = {
  value: ["△"],
};

export const  Star = Template.bind({});
 Star.args = {
  value: ["☆"],
};