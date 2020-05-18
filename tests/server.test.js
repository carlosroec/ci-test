test("Is equal", () => {
    const value = 2;
    const expected = 2;

    expect(value).toEqual(expected);
});

test("Test Fail", () => {
    const value = 2;
    const expected = 3;

    expect(value).toEqual(expected);
});
