import "regenerator-runtime/runtime";
import { useState, useEffect } from "react";
import { wallet, contractId } from "../../wallet";

import "../../assets/global.css";

import { EducationalText, SignInPrompt, SignOutButton } from "../../ui-components";

export default function Hello() {
  const [valueFromBlockchain, setValueFromBlockchain] = useState();

  const [uiPleaseWait, setUiPleaseWait] = useState(true);

  const [isSignedIn, setIsSignedIn] = useState(false);
  // Get blockchian state once on component load
  useEffect(() => {
    wallet
      .startUp()
      .then((data) => {
        setIsSignedIn(data);
      })
      .catch((err) => {
        console.log(err);
      });

    getGreeting()
      .then(setValueFromBlockchain)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }, []);

  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()} />;
  }

  function changeGreeting(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    const { greetingInput } = e.target.elements;

    // use the wallet to send the greeting to the contract
    wallet
      .callMethod({ method: "set_greeting", args: { message: greetingInput.value }, contractId })
      .then(async () => {
        return getGreeting();
      })
      .then(setValueFromBlockchain)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }

  function getGreeting() {
    // use the wallet to query the contract's greeting
    return wallet.viewMethod({ method: "get_greeting", contractId });
  }

  return (
    <>
      <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()} />
      <main className={uiPleaseWait ? "please-wait" : ""}>
        <h1>
          The contract says: <span className="greeting">{valueFromBlockchain}</span>
        </h1>
        <form onSubmit={changeGreeting} className="change">
          <label>Change greeting:</label>
          <div>
            <input autoComplete="off" defaultValue={valueFromBlockchain} id="greetingInput" />
            <button>
              <span>Save</span>
              <div className="loader"></div>
            </button>
          </div>
        </form>
        <EducationalText />
      </main>
    </>
  );
}
