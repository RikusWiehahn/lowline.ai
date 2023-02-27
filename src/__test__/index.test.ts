

test("helloNpm", () => {
  const helloNpm = jest.fn();
  helloNpm();
  expect(helloNpm).toHaveBeenCalled();
});

