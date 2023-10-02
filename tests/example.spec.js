// @ts-check
const { test, expect } = require('@playwright/test');


test('Login com sucesso @login', async ({ page }) => {
  await page.goto('https://qv-simulator.hypesoft.com.br');
  await page.getByRole('heading', { name: 'Bem vindo ao Simulador QV' }).click();
  await page.getByPlaceholder('Insira seu e-mail').click();
  await page.getByPlaceholder('Insira seu e-mail').fill('kelli.prates@hypesoft.com.br');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.getByPlaceholder('Insira sua senha').click();
  await page.getByPlaceholder('Insira sua senha').fill('R5hojrbj');
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'Entrar' }).click();
});

test('Adesão com sucesso', async ({ page }) => {
  await page.goto('https://qv-simulator.hypesoft.com.br');
  await page.getByRole('heading', { name: 'Bem vindo ao Simulador QV' }).click();
  await page.getByPlaceholder('Insira seu e-mail').click();
  await page.getByPlaceholder('Insira seu e-mail').fill('kelli.prates@hypesoft.com.br');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.getByPlaceholder('Insira sua senha').click();
  await page.getByPlaceholder('Insira sua senha').fill('R5hojrbj');
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.getByRole('button', { name: 'Adesão' }).click();
  await page.getByPlaceholder('Digite seu nome completo').click();
  await page.getByPlaceholder('Digite seu nome completo').fill('Andressa Soares');
  await page.getByPlaceholder('DD/MM/AAAA').click();
  await page.getByPlaceholder('DD/MM/AAAA').fill('10/05/1988');
  await page.getByPlaceholder('Digite seu email').click();
  await page.getByPlaceholder('Digite seu email').fill('email.teste@teste.com.br');
  await page.getByPlaceholder('(22) 22222-2222').click();
  await page.getByPlaceholder('(22) 22222-2222').fill('(11) 95496-5685');
  await page.getByPlaceholder('Insira sua profissão').click();
  await page.getByPlaceholder('Insira sua profissão').fill('Administrador');
  await page.getByRole('button', { name: 'Confirmar' }).click();
});