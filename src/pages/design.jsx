
import Components from "@/components";
import React from "react";

const Design = () => {
  return (
    <>
      <Components.Container>
        <Components.Button>button primary</Components.Button>

        <Components.Button buttonType="secondary">button primary</Components.Button>

        <Components.Icons name={"linkedin"} />
      </Components.Container>
    </>
  );
}

export default Design;