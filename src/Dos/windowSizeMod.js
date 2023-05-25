import * as React from "react";
import { useState, useEffect } from "react";
import useMediaQuery from "./useMediaQuery";
import { phone, tablet, laptop, desktop } from "./icons";

/*
INSTRUCTIONS:
useMediaQuery is a custom hook that listens for media query changes and returns whether the query currently matches. 
(It is a wrapper around the matchMedia API.) To implement this hook, you will need to complete the following tasks:

TASKS:
The hook should accept a single argument, query, which is a string representing a valid CSS media query.
Should set up an event listener for the "change" event on the matchMedia object and returns a cleanup function to remove the event listener.
The hook must return the current matching status of the media query (a boolean) as its output.
The hook should properly clean up the event listener when the component using the hook is unmounted or the media query changes.
 */

export default function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );

  const [trigger, setTrigger] = useState(false);
  const clickHandler = (e) => {
    if (e.target.className == "active") {
      setTrigger(true);
      window.matchMedia(trigger);
    }
  };

  useEffect(() => {
    return () => {
      setTrigger(false);
    };
  }, [trigger]);

  return (
    <section>
      <h1>useMediaQuery</h1>
      Resize your browser windows to see changes.
      <article>
        <figure
          onClick={(e) => clickHandler(e)}
          className={isSmallDevice ? "active" : ""}
        >
          {phone}
          <figcaption>Small</figcaption>
        </figure>
        <figure
          onClick={(e) => clickHandler(e)}
          className={isMediumDevice ? "active" : ""}
        >
          {tablet}
          <figcaption>Medium</figcaption>
        </figure>

        <figure
          onClick={(e) => clickHandler(e)}
          className={isLargeDevice ? "active" : ""}
        >
          {laptop}
          <figcaption>Large</figcaption>
        </figure>
        <figure
          onClick={(e) => clickHandler(e)}
          className={isExtraLargeDevice ? "active" : ""}
        >
          {desktop}
          <figcaption>Extra Large</figcaption>
        </figure>
      </article>
    </section>
  );
}
