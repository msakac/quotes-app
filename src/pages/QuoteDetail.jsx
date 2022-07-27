import React from 'react'
import { Link, Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: "q1", author: "Somey", text: "Learning is fun" },
  { id: "q2", author: "Mosy", text: "Killing is fun" },
  { id: "q3", author: "Fosy", text: "Hehoulo is fun" },
];

export default function QuoteDetail() {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found</p>
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  )
}
