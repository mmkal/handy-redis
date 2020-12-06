import { maybeDo } from "../util";

test('maybe do', () => {
  const mock = jest.fn()

  maybeDo(false, mock)
  expect(mock).toHaveBeenCalledTimes(0)

  maybeDo(true, mock)
  expect(mock).toHaveBeenCalledTimes(1)
})