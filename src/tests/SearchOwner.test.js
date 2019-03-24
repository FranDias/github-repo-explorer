import React from "react";
import renderer from "react-test-renderer";
import SearchOwner from "../components/Select";

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("Search Owner", () => {
  it("matches its snapshot default props", () => {
    const component = renderer.create(<SearchOwner />);
    expect(component).toMatchSnapshot();
  });

  it("matches its ", () => {
    const component = renderer.create(
      <SearchOwner onChange={() => {}} placeholder="hi" />
    );
    expect(component).toMatchSnapshot();
  });

  it("calls onChange function", () => {
    const testFunction = jest.fn();
    const component = mount(<SearchOwner onChange={testFunction} />);
    component.simulate("focus");
    component.simulate("change", { target: { value: "Changed" } });
    expect(testFunction).toHaveBeenCalled();
  });
  xit("only calls once every 300ms", () => {});
  xit("provides a browser event in callback", () => {});
});
