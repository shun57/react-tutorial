describe("The Game Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const squareSelector = "[data-cy=square]";

  // 課題1の1つ目
  it("ゲームページ表示", () => {
    cy.get(".game-info div").should("have.text", "Next player: X");

    cy.get(".game-info ol li:first-child button").should(
      "have.text",
      "Go to game start"
    );
  });

  it("最初のプレイヤーが左上のSquareをクリックするとXが入る", () => {
    cy.get(squareSelector).first().click();

    cy.get(squareSelector).first().should("have.text", "X");

    cy.get(".game-info div").should("have.text", "Next player: O");

    cy.get(".game-info ol li:nth-child(2) button").should(
      "have.text",
      "Go to move #1"
    );
  });

  it("次のプレイヤーが左上の右隣SquareをクリックするとOが入る", () => {
    cy.get(squareSelector).first().click();

    cy.get(squareSelector + ":nth-child(2)")
      .first()
      .click();

    cy.get(squareSelector + ":nth-child(2)")
      .first()
      .should("have.text", "O");

    cy.get(".game-info div").should("have.text", "Next player: X");

    cy.get(".game-info ol li:nth-child(3) button").should(
      "have.text",
      "Go to move #2"
    );
  });

  it("Go to game startを押下で初期状態の盤面に戻る", () => {
    cy.get(squareSelector).first().click();

    cy.get(squareSelector).first().should("have.text", "X");

    cy.get(".game-info div").should("have.text", "Next player: O");

    cy.get(".game-info ol li:nth-child(2) button").should(
      "have.text",
      "Go to move #1"
    );

    cy.get(".game-info ol li:nth-child(1) button").click();

    cy.get(squareSelector).first().should("have.text", "");

    cy.get(".game-info div").should("have.text", "Next player: X");

    cy.get(".game-info ol li:nth-child(2) button").should(
      "have.text",
      "Go to move #1"
    );
  });

  // 課題1の2つ目
  it("片方のプレイヤーが勝利する", () => {
    cy.get(squareSelector).first().click();

    cy.get(squareSelector + ":nth-child(2)")
      .first()
      .click();

    cy.get(squareSelector + ":nth-child(1)")
      .eq(1)
      .click();

    cy.get(squareSelector + ":nth-child(2)")
      .eq(1)
      .click();

    cy.get(squareSelector + ":nth-child(1)")
      .eq(2)
      .click();

    cy.get(".game-info div").should("have.text", "Winner: X");
  });

  // 課題1の4つ目
  it("引き分け状態", () => {
    cy.get(squareSelector).first().click();

    cy.get(squareSelector + ":nth-child(2)")
      .first()
      .click();

    cy.get(squareSelector + ":nth-child(1)")
      .eq(1)
      .click();

    cy.get(squareSelector + ":nth-child(2)")
      .eq(1)
      .click();

    cy.get(squareSelector + ":nth-child(2)")
      .last()
      .click();

    cy.get(squareSelector + ":nth-child(1)")
      .last()
      .click();

    cy.get(squareSelector + ":nth-child(3)")
      .first()
      .click();

    cy.get(squareSelector + ":nth-child(3)")
      .last()
      .click();

    cy.get(squareSelector + ":nth-child(3)")
      .eq(1)
      .click();

    cy.get(".game-info div").should("have.text", "Draw!");
  });
});
