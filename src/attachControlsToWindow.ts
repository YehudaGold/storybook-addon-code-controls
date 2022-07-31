import { DecoratorFunction, useGlobals, useArgs } from "@storybook/addons";
import { toId, sanitize } from '@storybook/csf';


export const attachControlsToWindow: DecoratorFunction = (StoryFn, context) => {
  const [ args, updateArgs, resetArgs ] = useArgs();
  const [ globals, updateGlobals ] = useGlobals();

  window.__storybook = {
    updateGlobals,
    args,
    context,
    globals,
    resetArgs,
    updateArgs,
  };


  return StoryFn();
};
