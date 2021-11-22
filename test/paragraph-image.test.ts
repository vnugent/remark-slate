import unified from 'unified';
import markdown from 'remark-parse';
import slate from '../src';

const md = `This is a paragraph.

![my cat one](https://images.unsplash.com/photo-1489084917528-a57e68a79a1e)
![my cat two](https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba)

The end.
`;
it('Use unified to turn markdown into slate state', () => {
  unified()
    .use(markdown)
    .use(slate)
    .process(md, (err, file) => {
      if (err) throw err;
      // @ts-expect-error
      expect(file.result).toMatchSnapshot();
    });
});
