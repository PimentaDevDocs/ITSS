import { StatusToTextPipe } from './status-to-text.pipe';

describe('StatusToTextPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusToTextPipe();
    expect(pipe).toBeTruthy();
  });
});
