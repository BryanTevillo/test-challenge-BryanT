// You already have the methods imported
const users = require("../data");
const {
  getUserById,
  getUserByUsername,
  validatePassword,
} = require("../users");

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation
describe("USer functions test ", () => {
  it("Should get the user by its id ", () => {
    expect(getUserById(1)).toEqual({
      id: 1,
      username: "hpLover4",
      email: "sirious90@gmail.com",
      password: "hArrydotCom",
    });
  });

  it("Should get the user by its username ", () => {
    expect(getUserByUsername("hpLover4")).toEqual({
      id: 1,
      username: "hpLover4",
      email: "sirious90@gmail.com",
      password: "hArrydotCom",
    });
  });

  it("Should get true validate user with id =1  and password = hArrydotCom", () => {
    expect(validatePassword(1, "hArrydotCom")).toEqual(true);
  });

  it("Should get false validate user with id= 2 and password  = hArrydotCom incorrect  ", () => {
    expect(validatePassword(2, "hArrydotCom")).toEqual(false);
  });
});
