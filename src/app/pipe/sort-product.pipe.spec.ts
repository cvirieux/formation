import { SortProductPipe } from '../pipe/sort-product.pipe';

describe('SortProductPipe', () => {
  it('create an instance', () => {
    const pipe = new SortProductPipe();
    expect(pipe).toBeTruthy();
  });
});
