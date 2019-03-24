import React from "react";
import Select from "../components/Select";
import renderer from "react-test-renderer";

const selectOptions = {
  name: "test Select",
  onChange: () => {},
  options: ["zero", "one", "two"]
};

describe("Dropdown Select", () => {
  it("doesn't deviate from expected", () => {
    const component = renderer.create(<Select {...{ selectOptions }} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
