import React from "react";
import renderer from "react-test-renderer";
import SortOrderButton from "../components/SortOrderButton";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SortOrderButton", () => {
  let component;
  const testFunction = jest.fn();

  it("matches its snapshot with minimal props", () => {
    const component = renderer.create(<SortOrderButton onClick={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  beforeEach(() => {
    component = shallow(<SortOrderButton onClick={() => {}} />);
  });

  it("renders a • when no sort order is given", () => {
    expect(component.find("button").text()).toEqual("•");
  });

  it('renders a "⬆" with sort order asc', () => {
    component.setProps({ sortDirection: "asc" });
    expect(component.find("button").text()).toEqual("⬆");
  });

  it('renders a "⬇" with sort order dec', () => {
    component.setProps({ sortDirection: "dec" });
    expect(component.find("button").text()).toEqual("⬇");
  });

  it("calls onClick when clicked", () => {
    const testFunction = jest.fn();
    component.setProps({ onClick: testFunction });
    component.simulate("click");
    expect(testFunction).toHaveBeenCalled();
  });
});
