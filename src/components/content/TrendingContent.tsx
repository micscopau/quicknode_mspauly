import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { isNullOrUndefined } from "../../utils/functions";
import { fetchTrending } from "../../utils/requests";

function TrendingContent(): JSX.Element {
  const [ component, setComponent ] = useState<JSX.Element | undefined>(undefined);
  const [ data, setData ] = useState<any>(undefined);
  const userContext = useContext(UserContext);
  const { userAddress } = userContext;

  useEffect( () => {
    if(!isNullOrUndefined(userAddress)){
      setComponent(<div>Fetching Data</div> );

      // fetch trending query results
      // TODO: Update return type.
      const fetchData = async (): Promise<any> => {
        setData(await fetchTrending());
        
        //TODO: replace/remove this 
        setComponent(<div>Successfully fetched data</div>);
      }
      
      fetchData().catch( console.error );
    } else {
      setComponent(<div> Please Connect your wallet to view trending collections</div>)
    }

  }, [userAddress]);


  useEffect( () => {
    // TODO: properly pass/handle the data (send to a ReactTable component?)
    console.log("data updated:", data)
    setComponent(<div>Data has updated... </div>)
  }, [data])

  return (
    <div className="trending-content-wrapper box">
      {component}
    </div>
  )
}

export default TrendingContent