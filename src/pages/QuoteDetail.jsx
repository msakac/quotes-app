import React from 'react'
import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments';
export default function QuoteDetail() {
    const params = useParams();
  return (
    <div>
        <h1>Quotes</h1>
        <h4>{params.quoteId}</h4>
        <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments/>
        </Route>
    </div>
  )
}
