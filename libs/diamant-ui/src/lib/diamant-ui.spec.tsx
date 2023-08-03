import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { DiamantUi } from './diamant-ui';

test(`[DiamantUi Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<DiamantUi />);
  expect(screen.innerHTML).toContain('DiamantUi works!');
});
