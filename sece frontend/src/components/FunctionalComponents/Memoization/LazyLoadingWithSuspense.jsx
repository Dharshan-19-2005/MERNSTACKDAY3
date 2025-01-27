import { lazy, Suspense } from "react";
const LazyComponent =  lazy(() => import("../About"))
const LazyLoadingWithSuspense =() =>{
     return(
        <div>
            <Suspense   fallback={<h1>Loading..</h1>}>
            <h2>This is LazyLoading Components with Suspense</h2>
       
            </Suspense>
            <LazyComponent/>
         </div>
     )
}
export default LazyLoadingWithSuspense