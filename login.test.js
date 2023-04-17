function login(email, password) {
  if (email === "joao@email.com" && password === "12345") {
    return true;
  } else {
    return false;
  }
}

describe("login", () => {
  it("returns true if the username and password are correct", () => {
    expect(login("joao@email.com", "12345")).toBe(true);
  });

  it("returns false if the username is incorrect", () => {
    expect(login("foo", "12345")).toBe(false);
  });

  it("returns false if the password is incorrect", () => {
    expect(login("joao@email.com", "54321")).toBe(false);
  });

  it("returns false if both the username and password are incorrect", () => {
    expect(login("foo", "54321")).toBe(false);
  });
});
