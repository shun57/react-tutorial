import React from 'react';
import Board from '../Board';

export default {
  component: Board,  // 対象のコンポーネントを指定
  title: 'SquareGame/Bord', // Storybookのディレクトリ・ファイル名
  argTypes: { onClick: { action: 'handleClick' } },
};

const Template = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  squares: Array(9).fill(null),
};

export const Triangle = Template.bind({});
Triangle.args = {
  squares: Array(9).fill("△"),
};

export const  Star = Template.bind({});
Star.args = {
  squares: Array(9).fill("☆"),
};

export const  DefaultAndTriangle = Template.bind({});
DefaultAndTriangle.args = {
  squares: [
    "○", "○", "○",
    "×", "×", "×",
    "△", "△", "△",
  ]
};