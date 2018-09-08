import { digitGrouping } from '@Helpers/formatter';

describe('formatter specs', () => {
  describe('digitGroupeding specs', function () {
    it('should return grouped digit if the input has more than 3 digits', () => {
      // arrange
      let expectedState = "1,234.34";

      // act
      let actualState = digitGrouping("1234.34");

      // assert
      expect(actualState).toEqual(expectedState);
    });

    it('should return the same value when the input has less than 3 digits', () => {
      // arrange
      let expectedState = "234.34";

      // act
      let actualState = digitGrouping("234.34");

      // assert
      expect(actualState).toEqual(expectedState);
    });
  })
});