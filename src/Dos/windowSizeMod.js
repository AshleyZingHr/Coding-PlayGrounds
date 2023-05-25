import * as React from "react";
import { useState, useEffect } from "react";
import useMediaQuery from "./useMediaQuery";
import { phone, tablet, laptop, desktop } from "./icons";

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
