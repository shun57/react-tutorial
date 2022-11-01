import React from "react";
import Game from "../Game";

export default {
  component: Game,
  title: "SquareGame/Game",
};

const Template = (args) => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
};

// 課題：引き分け状態
export const Draw = Template.bind({});
Draw.args = {
  history: [
    {
      squares: ["O", "X", "O", "O", "X", "O", "X", "O", "X"],
    },
  ],
};
