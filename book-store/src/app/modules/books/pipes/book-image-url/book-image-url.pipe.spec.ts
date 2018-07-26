import { BookImageUrlPipe } from './book-image-url.pipe';

describe('BookImageUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new BookImageUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
