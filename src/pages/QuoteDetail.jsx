import React, { useEffect } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const DUMMY_QUOTES = [
  { id: "q1", author: "Somey", text: "Learning is fun" },
  { id: "q2", author: "Mosy", text: "Killing is fun" },
  { id: "q3", author: "Fosy", text: "Hehoulo is fun" },
];

export default function QuoteDetail() {
  const match = useRouteMatch();
  const params = useParams();

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return <div className='centered'><LoadingSpinner /></div>
  }
  if(error){
    return <p className='centere'>{error}</p>
  }
  if(!loadedQuote.text) {
    return <p>No quote found</p>
  }

  return (
    <div>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  )
}
