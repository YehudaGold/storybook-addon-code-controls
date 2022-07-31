import React, { useCallback } from "react";
import { useGlobals, useStorybookApi, useArgs } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const a = useStorybookApi();

  const [args, updateArgs, resetArgs] = useArgs();
  const [globals, updateGlobals] = useGlobals();

  window.__storybook = {
    api: a,
    updateGlobals,
    args,
    // context,
    globals,
    // parameter,
    resetArgs,
    updateArgs,
  };

  return null;
};
