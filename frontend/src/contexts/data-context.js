import { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { domain } from 'src/config';
import { getDashBoardInfo } from 'src/api/api';

const DATA_HANDLERS = {
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',
  SET_LOADING: 'SET_LOADING'
};

const initialDataState = {
  data: null,
  error: null,
  isLoading: false
};

const dataHandlers = {
  [DATA_HANDLERS.FETCH_DATA_SUCCESS]: (state, action) => ({
    ...state,
    data: action.payload,
    isLoading: false,
    error: null
  }),
  [DATA_HANDLERS.FETCH_DATA_FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload
  }),
  [DATA_HANDLERS.SET_LOADING]: (state, action) => ({
    ...state,
    isLoading: action.payload
  })
};

const dataReducer = (state, action) =>
  dataHandlers[action.type] ? dataHandlers[action.type](state, action) : state;

export const DataContext = createContext({ undefined });

export const DataProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(dataReducer, initialDataState);
  const initialized = useRef(false);
  const [loading, setLoading] = useState(false);


  const initializeDataFromServer = async () => {
    try {
      dispatch({ type: DATA_HANDLERS.SET_LOADING, payload: true });
      const result = await getDashBoardInfo()
      // console.log(result);
      dispatch({ type: DATA_HANDLERS.FETCH_DATA_SUCCESS, payload: result });
    } catch (error) {
      dispatch({ type: DATA_HANDLERS.FETCH_DATA_FAILURE, payload: error.message });
    } finally {
      dispatch({ type: DATA_HANDLERS.SET_LOADING, payload: false });
    }
  };

  useEffect(() => {
    if (!initialized.current) {
      initializeDataFromServer();
      initialized.current = true;
    }
  }, []);


  return (
    <DataContext.Provider
      value={{
        ...state,
        loading,
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node
};

export const DataConsumer = DataContext.Consumer;

export const useDataContext = () => useContext(DataContext);
