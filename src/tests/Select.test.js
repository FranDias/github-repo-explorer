import React from "react";
import Select from "../components/Select";
import renderer from "react-test-renderer";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const testFunction = () => {};

const selectProps = {
  name: "testSelect",
  onChange: testFunction,
  options: ["zero", "one", "two"]
};

describe("Dropdown Select", () => {
  it("matches its snapshot", () => {
    const component = renderer.create(<Select {...{ selectProps }} />);
    expect(component).toMatchSnapshot();
  });

  it("matches its default snapshot", () => {
    const component = renderer.create(<Select />);
    expect(component).toMatchSnapshot();
  });

  describe("props", () => {
    Object.keys(selectProps).map(key => {
      it(`renders ${key}`, () => {
        const component = mount(<Select {...{ [key]: selectProps[key] }} />);
        expect(component.find(Select).props()[key]).toEqual(selectProps[key]);
      });
    });
    it("uses default Props for Optons", () => {
      const component = mount(<Select />);
      const componentProps = component.find(Select).props();
      expect(componentProps.name).toEqual("default");
      expect(componentProps.options).toEqual(["no options provied"]);
    });
  });
});
