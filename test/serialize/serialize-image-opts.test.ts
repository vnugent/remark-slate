import { serialize, defaultNodeTypes } from '../../src';

it('Serialize an image from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.image,
      url: 'https://avatars.githubusercontent.com/u/2148168',
      caption: [
        { text: "Jack's profile picture with 'url' key instead of 'link" },
      ],
      children: [],
    })
  ).toMatchSnapshot();
});
