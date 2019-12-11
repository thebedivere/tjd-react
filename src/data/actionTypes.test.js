/* global describe it expect */

import * as actions from "./actionTypes";

describe("actions", () => {
  it("should create an action to set the site info", () => {
    const info = { title: "foo" };
    const expectedAction = {
      type: actions.SET_INFO,
      info
    };
    expect(actions.setInfo(info)).toEqual(expectedAction);
  });
  it("should create an action to set the user", () => {
    const user = { email: "foo@bar.com" };
    const token = "foobar";
    const expectedAction = {
      type: actions.SET_USER,
      user,
      token
    };
    expect(actions.setUser(user, token)).toEqual(expectedAction);
  });
  it("should create an action to set the links", () => {
    const links = {};
    const expectedAction = {
      type: actions.SET_LINKS,
      links
    };
    expect(actions.setLinks(links)).toEqual(expectedAction);
  });
  it("should create an action to set the blog posts", () => {
    const blogPosts = {};
    const expectedAction = {
      type: actions.SET_BLOG_POSTS,
      blogPosts
    };
    expect(actions.setBlogPosts(blogPosts)).toEqual(expectedAction);
  });
});
