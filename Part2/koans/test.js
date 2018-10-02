var _; //globals

describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3,4,5,6];
    var even = _(numbers).filter(function (x) { return x % 2 === 0 });

    expect(FILL_ME_IN).toEqual([2,4,6]);
    expect(FILL_ME_IN).toBe(3);
    expect(numbers.length).toBe(FILL_ME_IN);
  });
  });

  describe("About Objects", function () {

  describe("Properties", function () {
    var object;

    beforeEach(function () {
       object = {  firstName: "Jack", lastName: "Harry" };
    });

    it("should confirm objects are collections of properties", function () {
      expect(FILL_ME_IN).toBe("Jack");
    });

    it("should confirm that properties are case sensitive", function () {
      expect(object.lastname).toBe(FILL_ME_IN);
      expect(FILL_ME_IN).toBe("Harry");
    });
  });
  });
  describe("About Arrays", function() {
  it("should know about shifting arrays", function () {
  //Write unit test for shift and unshift array methods.
  //your code is here 
  });
  });
  

  
