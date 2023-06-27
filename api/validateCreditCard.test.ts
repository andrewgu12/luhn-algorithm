import { calculateValidCard } from "./validateCreditCard";

// Cards are generated from https://www.coderstool.com/fake-credit-cards
describe("calculateValidCard", () => {
  describe("visa cards", () => {
    it("should test valid numbers", () => {
      const fakeCards = [
        "4556001145853493",
        "4532228205613538",
        "4556563464879359",
        "4485712083637021",
      ];

      fakeCards.forEach((card) => {
        expect(calculateValidCard(card)).toBeTruthy();
      });
    });

    it("should test invalid numbers", () => {
      const fakeCards = [
        "4556101145853493",
        "4532528205613538",
        "4556563464779359",
        "4485712083037021",
      ];

      fakeCards.forEach((card) => {
        expect(calculateValidCard(card)).toBeFalsy();
      });
    });
  });

  describe("amex cards", () => {
    it("should test valid numbers", () => {
      const fakeCards = [
        "343637791241735",
        "372300496371992",
        "344317996194414",
        "371653060405484",
      ];

      fakeCards.forEach((card) => {
        expect(calculateValidCard(card)).toBeTruthy();
      });
    });
    it("should test invalid numbers", () => {
      const fakeCards = [
        "343637791243735",
        "372300499371992",
        "344317996294414",
        "371653160405484",
      ];

      fakeCards.forEach((card) => {
        expect(calculateValidCard(card)).toBeFalsy();
      });
    });
  });

  describe("mastercards", () => {
    it("should test valid numbers", () => {
      const fakeCards = [
        "5500648417399250",
        "5352684658198415",
        "5471340118941425",
        "5397575559502035",
      ];

      fakeCards.forEach((card) => {
        expect(calculateValidCard(card)).toBeTruthy();
      });
    });

    it("should test invalid numbers", () => {
      const fakeCards = [
        "5500148417399250",
        "5352684668198415",
        "5471340218941425",
        "5397576559502035",
      ];

      fakeCards.forEach((card) => {
        expect(calculateValidCard(card)).toBeFalsy();
      });
    });
  });

  describe("discover cards", () => {
    it("should test valid numbers", () => {
      const fakeCards = [
        "6011362426981690",
        "6011289951411548",
        "6011759602744505",
        "6011829027345012",
      ];
      fakeCards.forEach((card) => {
        expect(calculateValidCard(card)).toBeTruthy();
      });
    });

    it("should test invalid numbers", () => {
      const fakeCards = [
        "6011372426981690",
        "6011289961411548",
        "6011859602744505",
        "6011829027345112",
      ];
      fakeCards.forEach((card) => {
        expect(calculateValidCard(card)).toBeFalsy();
      });
    });
  });
});
