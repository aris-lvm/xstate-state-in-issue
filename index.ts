import { createMachine, setup, stateIn } from "xstate";

export const lightsMachine = createMachine({
  types: {
    events: {} as { type: "TOGGLE" },
  },
  initial: "off",
  states: {
    off: {
      on: {
        TOGGLE: { target: "on", guard: stateIn({ first: "on" }) },
      },
    },
    on: {
      on: {
        TOGGLE: { target: "off" },
      },
    },
  },
});

export const lightsMachineWithSetup = setup({
  types: {
    events: {} as { type: "TOGGLE" },
  },
}).createMachine({
  initial: "off",
  states: {
    off: {
      on: {
        TOGGLE: { target: "on", guard: stateIn({ first: "on" }) },
      },
    },
    on: {
      on: {
        TOGGLE: { target: "off" },
      },
    },
  },
});
