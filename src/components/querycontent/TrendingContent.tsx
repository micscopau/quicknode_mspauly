
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { flattenTrendingQueryData, isNullOrUndefined } from "../../utils/functions";
import { fetchTrending } from "../../utils/requests";
import ContentTable from "./table/ContentTable";
import { trendingColumns } from "./table/TrendingColumns";

// TODO QN7: Genericize this - abstract out the "Trending Content" specifics (fetch, flatten, classnames)
function TrendingContent(): JSX.Element {
  const [ component, setComponent ] = useState<JSX.Element | undefined>(undefined);
  const [ data, setData ] = useState<any>(undefined);
  const userContext = useContext(UserContext);
  const { userAddress } = userContext;

  useEffect( () => {
    if(!isNullOrUndefined(userAddress)){
      setComponent(<div>Fetching Data</div> );

      // TODO QN2: Update return type.
      const fetchData = async (): Promise<any> => {
        setData(await fetchTrending());
      }
      
      fetchData().catch( console.error );
    } else {
      setComponent(<div> Please Connect your wallet to view data</div>)
    }

  }, [userAddress]);


  useEffect( () => {
    if(!isNullOrUndefined(data)) {
      setComponent(<ContentTable data={flattenTrendingQueryData(data)} columns={trendingColumns} />)
    } else {
      // TODO QN6: Better handle no data returned
      // setComponent(<div>No Data Retrieved</div>)
    }
  }, [data])

  return (
    <div className="query-content-wrapper box">
      {component}
    </div>
  )
}

export default TrendingContent