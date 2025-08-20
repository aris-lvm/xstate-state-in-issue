# xstate-state-in-issue

This example uses [Bun](https://bun.sh). Make sure it's set up and then run:

```sh
bun install # to set up dependencies

npx tsc --noEmit # to get the error message
```

You should expect to see such output:

```sh
➜  xstate-state-in-issue git:(main) npx tsc --noEmit
index.ts:31:9 - error TS2322: Type '{ target: string; guard: GuardPredicate<MachineContext, { type: "TOGGLE"; }, undefined, any>; }' is not assignable to type 'TransitionConfigOrTarget<MachineContext, { type: "TOGGLE"; }, { type: "TOGGLE"; }, never, never, never, never, EventObject, MetaObject>'.
  Types of property 'guard' are incompatible.
    Type 'GuardPredicate<MachineContext, { type: "TOGGLE"; }, undefined, any>' is not assignable to type 'GuardPredicate<MachineContext, { type: "TOGGLE"; }, undefined, never>'.
      Type 'any' is not assignable to type 'never'.

31         TOGGLE: { target: "on", guard: stateIn("on") },
           ~~~~~~


Found 1 error in index.ts:31
```
