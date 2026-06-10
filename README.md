# react-hyperevents

A virtual-dom extension.

(an integration of [hyperevents](https://github.com/w-lfpup/hyperevents-js) to React)

## Install

Install via npm.

```sh
npm install --save-dev @w-lfpup/react-hyperevents
```

Or install directly from github.

```sh
npm install --save-dev https://github.com/w-lfpup/react-hyperevents
```

## Setup

Add a `HyperEventsProvider` component to broadcast hyperevers events.

The `HyperEventsProvider` component below listens for click events. React developers can access action events.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HyperEvents } from "@w-lfpup/hyperevents";
import { HyperEventsProvider } from "@w-lfpup/react-hyperevents";
import { Counter } from "./counter.js";

let rootEl = document.querySelector("#root")!;
const root = ReactDOM.createRoot(rootEl);

let _hyperEvents = new HyperEvents({
	host: rootEl,
	connected: true,
	eventNames: ["click"];
});

root.render(
	<HyperEventsProvider target={rootEl}>
		<Counter />
	</HyperEventsProvider>,
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
import { useAction } from "@w-lfpup/react-hyperevents";

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

In `hyperevents` the syntax looks like:

```html
<button click:="do_something">click me!</button>
```

HTML considers `: _ @` all valid characters for attributes. It's very flexible.

React / JSX is not HTML and restricts attribute characters to `-` and also `_`
but only AFTER a `-`.

So the syntax for `hyperevents` in react is limited to:

```html
<button click-="do_something">click me!</button>
```

## License

React-hyperevents is released under the BSD-3 Clause License.
