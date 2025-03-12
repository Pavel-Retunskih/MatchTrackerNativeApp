import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Match} from "../model/type";

export const matchesApi = createApi({
  reducerPath: 'matchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app.ftoyd.com/fronttemp-service'
  }),
  endpoints: (builder) => ({
    getMatches: builder.query<{ data: { matches: Match[] } }, void>({
      query: () => '/fronttemp',
      async onCacheEntryAdded(arg,{updateCachedData,cacheDataLoaded,cacheEntryRemoved}){
        const ws = new WebSocket('wss://app.ftoyd.com/fronttemp-service/ws')
        try{
          await cacheDataLoaded
          const  listener = (e:MessageEvent) =>{
            const data = JSON.parse(e.data)
            updateCachedData(draft=> {
              draft.data.matches = data.data
                }
            )
          }

ws.addEventListener('message',listener)
        }catch (err){
          console.log(err)
        }
        await cacheEntryRemoved
        ws.close()
      }
    })
  })
})

export const {useGetMatchesQuery} = matchesApi