import { test, expect } from '@playwright/test';

test('Inscrever na newsletter com e-mail válido', async ({ page }) => {
  // 1. Abre a página inicial (usa baseURL do playwright.config.js)
  await page.goto('/');

  // 2. Preenche o campo "Seu e-mail" com "ada@example.com"
  await page.getByPlaceholder('Seu e-mail').fill('ada@example.com');

  // 3. Clica no botão "Inscrever"
  await page.getByRole('button', { name: 'Inscrever' }).click();

  // 4. Espera que apareça o texto "Inscrição confirmada!"
  await expect(page.getByText('Inscrição confirmada!')).toBeVisible();
});
