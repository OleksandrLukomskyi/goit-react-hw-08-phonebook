import { useSelector } from "react-redux"
import { globalLoadingSelector } from "store/root/rootSelectors"


const Loader = () => {
   const isLoading = useSelector(globalLoadingSelector)
  return isLoading ? <div>Loadin....!!!!!</div> : <></>
  
}

export default Loader
