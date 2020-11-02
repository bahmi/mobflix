import React from "react";
import { render } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature />", () => {
  it("renders the <Feature /> with polulated data", () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at anytime.</Feature.SubTitle>
      </Feature>
    );

    expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
    expect(getByText("Watch anywhere. Cancel at anytime.")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Feature /> with just a title", () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
      </Feature>
    );

    expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
    expect(queryByText("Watch anywhere. Cancel at anytime.")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Feature /> with just a subtitle", () => {
    const { container, getByText, queryByText } = render(
      <Feature>
         <Feature.SubTitle>Watch anywhere. Cancel at anytime.</Feature.SubTitle>
      </Feature>
    );

    expect(queryByText("Unlimited films, TV programmes and more.")).toBeFalsy();
    expect(getByText("Watch anywhere. Cancel at anytime.")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
