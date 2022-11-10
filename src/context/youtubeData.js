
import React, { useReducer } from "react";


const initialState = {
  loading: false,
  data: null,
  error: false,
}


const reducer = (state, action) => {
  switch (action.type) {
    case 'startFetch':
      return {
        loading: true,
        data: null,
        error: false,
      }
    case 'fetchSuccess':
      return {
        loading: false,
        data: action.payload,
        error: false,
      }
    case 'fetchMore':
        return {
          loading: false,
          data: {...action.payload, items: [...state.data.items, ...action.payload.items]},
          error: false,
        }
    case 'fetchFailed':
      return {
        loading: false,
        data: {},
        error: true,
      }
    default:
      return state
  }
}

const YoutubeDataContext = React.createContext([() => {}]);

const YoutubeDataProvider = ({ children }) => {
  const [data, dispatchData] = useReducer(reducer, initialState);
    
  return (
    <YoutubeDataContext.Provider value={[data, dispatchData]}>
      {children}
    </YoutubeDataContext.Provider>
  );
};

export { YoutubeDataProvider, YoutubeDataContext };
