import "regenerator-runtime/runtime";
import { wallet, contractId } from "../../wallet";
import { useEffect, useState } from "react";

const Company = () => {
  const [id, setid] = useState("");

  // use the wallet to send the greeting to the contract
  const hire = () => {
    wallet
      .callMethod({ method: "hireEmployee", args: { employee_id: id }, contractId })
      .then((d) => console.log(d))
      .finally(() => {
        alert("Hired!");
      });
  };

  const get = () => {
    wallet.callMethod({ method: "getEmployees", contractId }).then((d) => console.log(d));
  };

  useEffect(() => {
    wallet
      .startUp()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <input type="text" onChange={setid} />
      <button onClick={hire}>Hire!</button>
      <button onClick={get}>Get!</button>
    </>
  );
};

export default Company;
