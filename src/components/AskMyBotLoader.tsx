import { useEffect } from "react";

const WIDGET_SRC =
  "https://www.askmybot.ai/p/officekit-hr-qa84/widget.js";
const SCRIPT_ID = "askmybot-widget";

/**
 * Loads AskMyBot after the app has mounted so it does not block React paint.
 */
export function AskMyBotLoader() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = WIDGET_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
