/// <reference types="Cypress" />

/* eslint-env mocha, browser */
/* global cy, beforeEach, it, describe */

describe("Página Inicial do Paciente - cenários essenciais", () => {
  const baseUrl = "http://localhost:5173/home-paciente";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("deve acessar a url correta", () => {
    cy.url().should("include", "/home-paciente");
  });

  it("deve exibir o nome do usuário", () => {
    cy.contains("Daniel Marini").should("be.visible");
  });

  it("deve exibir o título 'Consultas'", () => {
    cy.contains("Consultas").should("be.visible");
  });

  it("deve exibir a lista de psicólogos", () => {
    cy.get(".lista-psicologos, [data-testid='lista-psicologos']").should("exist");
  });

  it("deve exibir a lista de agendamentos", () => {
    cy.get(".lista-agendamentos, [data-testid='lista-agendamentos']").should("exist");
  });

  it('deve abrir modal de agendamento para um profissional', () => {
  cy.get('[data-testid="profissional-card"]').first().click();

  cy.get('[data-testid="modal-agendar"]').should('be.visible');

  cy.get('[data-testid="modal-title"]')
    .should('contain.text', 'Agendar com Dr.');
  });
});
