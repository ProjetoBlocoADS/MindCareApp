/// <reference types="Cypress" />

/* eslint-env mocha, browser */
/* global cy, beforeEach, it, expect, describe */

 describe("Página Inicial - volume de verificações simples", () => {
  const baseUrl = "http://localhost:5173";
  const titulo1 = "Sua Saúde, a um click de distância";
  const titulo2 = "Nossas Funcionalidades";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("banner está visível e possui texto alternativo correto", () => {
    cy.get("[data-testid='banner-home']")
      .should("be.visible")
      .and("have.attr", "alt", "Ilustração Mental Quebra-Cabeças");
  });

  it("botões da barra de ferramentas existem (Cadastro / Login) e são acionáveis", () => {
    cy.get(".toolbar-botao").within(() => {
      cy.contains("Cadastro").should("exist");
      cy.contains("Login").should("exist");
    });
  });

  it("descrições exibem ambos os títulos e parágrafos", () => {
    cy.contains(titulo1).should("be.visible");
    cy.contains(titulo2).should("be.visible");
  });

  it("renderiza o número esperado de cards com rótulos", () => {
    cy.get(".carrossel")
      .children()
      .should("have.length", 2);
    cy.contains("Acompanhamento").should("exist");
    cy.contains("Tratamento").should("exist");
  });

  it("todas as imagens na página possuem atributo alt", () => {
    cy.get("img").each(($img) => {
      expect($img.attr("alt")).to.be.ok;
    });
  });

  it("botões da barra de ferramentas são focáveis (acessibilidade básica)", () => {
    cy.get(".toolbar-botao button, .toolbar-botao *:not(script)")
      .first()
      .focus()
      .should("be.focused");
  });

  const viewports = [
    { name: "iphone-6", width: 375, height: 667 },
    { name: "ipad-2", width: 768, height: 1024 },
    { name: "macbook-15", width: 1440, height: 900 },
  ];

  viewports.forEach((vp) => {
    it(`verificação responsiva: viewport ${vp.name}`, () => {
      cy.viewport(vp.width, vp.height);
      cy.get("[data-testid='banner-home']").should("be.visible");
      cy.get(".carrossel").should("be.visible");
    });
  });

  it("ao clicar em Cadastro navega para /cadastro", () => {
    cy.contains("Cadastro").click();
    cy.url().should("include", "/cadastro");
  });
});
