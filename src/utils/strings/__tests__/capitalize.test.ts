import capitalize from '../capitalize';

test('utils > strings > capitalize', () => {
  const capitalized = capitalize('test');
  expect(capitalized).toEqual('Test');
});
