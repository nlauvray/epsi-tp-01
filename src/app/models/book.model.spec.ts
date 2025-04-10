import { Book } from './book.model';

describe('BookModel', () => {
  it('should create an instance', () => {
    expect({} as Book).toBeTruthy();
  });
});
