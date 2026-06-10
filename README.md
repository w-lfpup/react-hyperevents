# react-superaction

Turn the virtual-dom into a declarative event-bus.

(a port of [superaction](https://github.com/w-lfpup/superaction-js) for React)

## Install

Install via npm.

```sh
npm install --save-dev @w-lfpup/react-superaction
```

Or install directly from github.

```sh
npm install --save-dev https://github.com/w-lfpup/react-superaction
```

## Setup

Add a `SuperActionProvider` component to broadcast action events.

The `SuperActionProvider` component below listens for click events. React developers can access action events.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HyperEvents } from "@w-lfpup/hyperevents";
import { SuperActionProvider } from "@w-lfpup/react-hyperevents";
import { Counter } from "./counter.js";

let rootEl = document.querySelector("#root")!;
const root = ReactDOM.createRoot(rootEl);

let _hyperEvents = new HyperEvents({
	host: rootEl,
	connected: true,
	eventNames: ["click"];
});

root.render(
	<SuperActionProvider eventNames={eventNames}>
		<Counter />
	</SuperActionProvider>,
);
```

## Declare

Add an attribute with the pattern `event-=action`.

```html
<button click-="increment">+</button>
```

Now the button dispatches ActionEvents when clicked.

## Listen

The `useAction` hook connects action events to react-land.

```tsx
import React, { useState } from "react";
import { useAction } from "@w-lfpup/react-superaction";

export function Counter() {
  let [count, setCount] = useState(0);

  useAction((action) => {
    if ("increment" === action.type) setCount(count + 1);
  });

  return <button click-="increment">{count}</button>;
}
```

## Discrepencies

JSX and consequently React does not follow HTML spec. It transpiles HTML-looking
syntax into a series of calls to a `pragma` function. It calls the function
as many times as there are gator tags `<` declared.

In `superaction` the syntax looks like:

```html
<button click:="do_something">click me!</button>
```

HTML considers `: _ @` all valid characters for attributes. It's very flexible.

React / JSX is not HTML and restricts attribute characters to `-` and also `_`
but only AFTER a `-`.

So the syntax for `superaction` in react is limited to:

```html
<button click-="do_something">click me!</button>
```

## License

React-superaction is released under the BSD-3 Clause License.
