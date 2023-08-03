import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { NewHeader } from './new-header';

test(`[NewHeader Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<NewHeader />);
  expect(screen.innerHTML).toContain('NewHeader works!');
});
