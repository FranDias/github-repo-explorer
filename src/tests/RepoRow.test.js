import React from "react";
import renderer from "react-test-renderer";
import RepoRow from "../components/RepoDisplay/RepoRow";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const repoRowProps = {
  url: "http://frandi.as",
      name: "github-repo-explorer",
      description: "good way to play with jest",
      stargazers_count: 0, // lets be real
      forks_count: 0,
      open_issues_count: 5,
      open_issues_url: "https://github.com/frandias/github-repo-explorer/issues"
};

describe("RepoCell", () => {
  describe("snapshots", () => {
    it("matches its snapshot with no props", () => {
      const component = renderer.create(<RepoRow/>);
      expect(component).toMatchSnapshot();
    });

    it("matches snapshot with props", () => {
      const component = renderer.create(<RepoRow {...repoRowProps} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe("renders props", () => {
    Object.keys(repoRowProps).map(key => {
      it(`renders ${key}`, () => {
        const component = mount(<RepoRow {...repoRowProps} />);
        expect(component.find(RepoRow).props()[key]).toEqual(
          repoRowProps[key]
        );
      });
    });
  });
});
