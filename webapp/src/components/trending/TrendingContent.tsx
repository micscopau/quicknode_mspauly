import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { isNullOrUndefined } from "../../utils/functions";

function TrendingContent(): JSX.Element {
  const [ component, setComponent ] = useState<JSX.Element | undefined>(undefined);
  const userContext = useContext(UserContext);
  const { userAddress } = userContext;

  useEffect( () => {
    if(!isNullOrUndefined(userAddress)){
      // fetch trending query results
      setComponent(<div>Success</div>)
    } else {
      setComponent(<div> Please Connect your wallet to view trending collections</div>)
    }

  }, [userAddress])

  return (
    <div className="trending-content-wrapper box">
      {component}
    </div>
  )
}

export default TrendingContent