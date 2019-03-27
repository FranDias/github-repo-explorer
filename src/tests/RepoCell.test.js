import React from "react";
import Select from "../components/Select";
import renderer from "react-test-renderer";
import RepoCell from "../components/RepoDisplay/RepoCell";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const repoCellProps = {
  label: "hi",
  text: "How is everyone?",
  expands: false
};
const repoCellPropsURL = {
  ...repoCellProps,
  url: "http://frandi.as",
  expands: true
};

describe("RepoCell", () => {
  describe("snapshots", () => {
    it("matches its snapshot with no props", () => {
      const component = renderer.create(<RepoCell />);
      expect(component).toMatchSnapshot();
    });

    it("matches snapshot with props", () => {
      const component = renderer.create(<RepoCell {...{ repoCellProps }} />);
      expect(component).toMatchSnapshot();
    });

    it("matches snapshot with props", () => {
      const component = renderer.create(<RepoCell {...{ repoCellPropsURL }} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe("renders props", () => {
    Object.keys(repoCellPropsURL).map(key => {
      it(`renders ${key}`, () => {
        const component = mount(<RepoCell {...repoCellPropsURL} />);
        expect(component.find(RepoCell).props()[key]).toEqual(
          repoCellPropsURL[key]
        );
      });
    });
  });
});
