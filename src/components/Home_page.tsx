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
            <details>
                <summary>
                    Configuration options of useQuery hook: <mark>const query = useQuery('key', fetchFunction, config)</mark>
                </summary>
                <p><b>enabled</b>: boolean - If false, the query will not automatically run. Default: true.</p>
                <p><b>staleTime</b>: number - How long the data is considered fresh (in milliseconds). Default: 0 (data is considered stale immediately).</p>
                <p><b>cacheTime</b>: number - How long the data stays in the cache after it's no longer used (in milliseconds). Default: 5 minutes (300000 milliseconds).</p>
                <p><b>refetchOnWindowFocus</b>: boolean - If true, the query will refetch when the window is refocused. Default: true.</p>
                <p><b>refetchInterval</b>: number - The interval (in milliseconds) for automatic refetching. Default: 0 (disabled).</p>
                <p><b>refetchOnReconnect</b>: boolean - If true, the query will refetch when the network reconnects. Default: true.</p>
                <p><b>retry</b>: number | boolean - The number of times to retry failed queries. Default: 3. If false, it will not retry.</p>
                <p><b>retryDelay</b>: number | function - The delay (in milliseconds) before retrying a failed query. Default: exponential backoff (starting at 1000 milliseconds).</p>
                <p><b>onSuccess</b>: function - A callback function that runs when the query is successful. Default: undefined.</p>
                <p><b>onError</b>: function - A callback function that runs when the query fails. Default: undefined.</p>
                <p><b>onSettled</b>: function - A callback function that runs when the query either succeeds or fails. Default: undefined.</p>
                <p><b>select</b>: function - A function to transform or select a subset of the query data. Default: undefined. "extract just the necessary fields from the API response"</p>
            </details>

        </div>
    )
}