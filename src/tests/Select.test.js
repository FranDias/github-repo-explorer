import React from "react";
import Select from "../components/Select";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const testFunction = () => {};

const selectOptions = {
  name: "testSelect",
  onChange: testFunction,
  options: ["zero", "one", "two"]
};

describe("Dropdown Select", () => {
  it("renders a select element", () => {
    const component = renderer.create(<Select {...{ selectOptions }} />);
    expect(component).toMatchSnapshot();
  });

  describe("props", () => {
    Object.keys(selectOptions).map(key => {
      it(`renders ${key}`, () => {
        const component = mount(
          <Select {...{ [key]: selectOptions[key] }} />
        );
        expect(component.find(Select).props()[key]).toEqual(selectOptions[key]);
      });
    });
  });
});
