import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm'
import {addQuote} from '../lib/api';
import useHttp from '../hooks/use-http';

export default function NewQuote() {
  const {sendRequest, status} = useHttp(addQuote);
  const history = useHistory();

  useEffect(()=>{
    if(status === 'completed'){
      history.push('/quotes');
    }
  }, [status, history])

  function addQuoteHandler(quoteData){
    sendRequest(quoteData);
  }
  
  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
  )
}
