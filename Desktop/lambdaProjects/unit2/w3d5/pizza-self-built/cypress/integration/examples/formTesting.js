describe("Pizza order app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const mainButt = () => cy.get("button").contains("Pizza?");
  const nameInp = () => cy.get("input[name=name]");
  const sizeInp = () => cy.get("select");
  const bbqInp = () => cy.get("input[value=bbq]");
  const toppingInp = () => cy.get("input[name=saus]");
  const submitButt = () => cy.get("button[type=submit]");

//   testing cypress is working
  it("We can complete form", () => {
    expect(1 + 1).to.equal(2);
  });

  // test runs from home page to order form and ends on succesful submit page
  it("check inputs are working", () => {
    mainButt().click();
    nameInp().type("Johhn Big Boy");
    nameInp().should("have.value", "Johhn Big Boy");
    sizeInp().select("medium");
    bbqInp().click();
    toppingInp().click();
    submitButt().click();
  });
});
