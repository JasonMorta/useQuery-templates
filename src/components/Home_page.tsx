import React from 'react'

export const Home_page: React.FC<{}> = () => {
    return (
        <div className='home_section'>
            <details>
            <summary> 
               Request object of useQuery hook: <mark>const request = useQuery()</mark>
            </summary>
            <p><b>data</b>: Object - Contains the API response.</p>
            <p><b>dataUpdatedAt</b>: number - The timestamp (in milliseconds) when the data was last updated.</p>
            <p><b>error</b>: any - The error object if the query encountered an error, otherwise null.</p>
            <p><b>errorUpdateCount</b>: number - The number of times the query encountered an error.</p>
            <p><b>errorUpdatedAt</b>: number - The timestamp (in milliseconds) when the error was last updated.</p>
            <p><b>failureCount</b>: number - The number of times the query has failed.</p>
            <p><b>isError</b>: boolean - True if the query encountered an error.</p>
            <p><b>isFetched</b>: boolean - True if the query has been fetched at least once.</p>
            <p><b>isFetchedAfterMount</b>: boolean - True if the query has been fetched at least once after the component was mounted.</p>
            <p><b>isFetching</b>: boolean - True if the query is currently fetching data.</p>
            <p><b>isIdle</b>: boolean - True if the query is idle (not fetching data and not used yet).</p>
            <p><b>isLoading</b>: boolean - True if the query is in a loading state (initial fetch or background refetch).</p>
            <p><b>isLoadingError</b>: boolean - True if the query encountered an error while loading.</p>
            <p><b>isPlaceholderData</b>: boolean - True if the query is using placeholder data.</p>
            <p><b>isPreviousData</b>: boolean - True if the query is using previous data while fetching new data.</p>
            <p><b>isRefetchError</b>: boolean - True if the query encountered an error during a refetch.</p>
            <p><b>isRefetching</b>: boolean - True if the query is currently refetching data.</p>
            <p><b>isStale</b>: boolean - True if the data is stale and needs to be refetched.</p>
            <p><b>isSuccess</b>: boolean - True if the query was successful and data is available.</p>
            <p><b>refetch</b>: function - A function to manually refetch the query data.</p>
            <p><b>remove</b>: function - A function to remove the query from the cache.</p>
            <p><b>status</b>: string - The current status of the query ("idle", "loading", "error", or "success").</p>
            </details>
        </div>
    )
}