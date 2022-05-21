import initStoryshots from '@storybook/addon-storyshots';
import { createSerializer } from '@emotion/jest';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
  snapshotSerializers: [createSerializer()],
  suite: 'Image storyshots',
  test: imageSnapshot()
});