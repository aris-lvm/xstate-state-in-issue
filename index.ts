import { createMachine, setup, stateIn } from "xstate";

export const exampleMachine = createMachine({
  types: {
    events: {} as { type: "TOGGLE" },
  },
  initial: "idle",
  states: {
    idle: {
      on: {
        TOGGLE: { guard: stateIn("idle") },
      },
    },
  },
});

export const exampleMachineWithSetup = setup({
  types: {
    events: {} as { type: "TOGGLE" },
  },
}).createMachine({
  initial: "idle",
  states: {
    idle: {
      on: {
        TOGGLE: { guard: stateIn("idle") },
      },
    },
  },
});
