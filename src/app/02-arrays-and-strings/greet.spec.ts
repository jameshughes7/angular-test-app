import { greet } from './greet';

describe('grret', () => {
  it('should include the name in the message', () => {
    expect(greet('james')).toContain('james');
  });
});
