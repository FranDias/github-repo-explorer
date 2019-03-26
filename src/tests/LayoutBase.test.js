import React from "react";
import renderer from "react-test-renderer";
import LayoutBase from "../components/LayoutBase";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("LayoutBase", () => {
  function HeaderContent() {
    return <div />;
  }
  HeaderContent.displayName = "HeaderContent";

  function BodyContent() {
    return <body />;
  }
  BodyContent.displayName = "BodyContent";

  it("matches its snapshot with minimal props", () => {
    const component = renderer.create(<LayoutBase />);
    expect(component).toMatchSnapshot();
  });

  it("matches its snapshot with header props", () => {
    const component = renderer.create(<LayoutBase header={HeaderContent} />);
    expect(component).toMatchSnapshot();
  });

  it("matches its snapshot with children props", () => {
    const component = renderer.create(<LayoutBase>{BodyContent}</LayoutBase>);
    expect(component).toMatchSnapshot();
  });

  describe("renders", () => {
    let component;
    beforeEach(() => {
      component = shallow(
        <LayoutBase header={HeaderContent}>{BodyContent}</LayoutBase>
      );
    });
    debugger
    it("a header", () => {
      expect(component.find(HeaderContent).exists()).toBe(true);
    });

    it("body", () => {
      expect(component.find(BodyContent).exists()).toBe(true);
    });
  });
});
