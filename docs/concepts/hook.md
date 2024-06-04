# Hook

Hook is likely the most powerful feature of Novi. There're two kinds of hooks: core hooks and normal hooks.

## Core hooks

A core hook is a function that is called when a specific object event occurs. The core hook system is different from [subscription](./subscribe) in that core hooks are called exactly in the place where the event occurs and can affect the control flow, while in subscription, object events are queued and dispatched later.

The available hook points are:

- `BEFORE_CREATE`
- `AFTER_CREATE`
- `BEFORE_UPDATE`
- `AFTER_UPDATE`
- `BEFORE_DELETE`
- `AFTER_DELETE`
- `BEFORE_VIEW`

A simple example: I want to validate the value before changes are made to `@rating` tag. I can hook to `BEFORE_CREATE` and `BEFORE_UPDATE` to check the value, and raise an error if it's invalid, causing the operation to fail.

Another real-world example: You surely don't want users to see the value of `@user.password` (though it's hashed) when they view a user object. You can hook to `BEFORE_VIEW` and remove the `@user.password` property from the object if the user doesn't have the permission to view it.

## Normal hooks

You can hook user-defined [functions](./function.md) using normal hooks. You could either hook before or after the function is executed, and can either do nothing, update the input, or update the output.
