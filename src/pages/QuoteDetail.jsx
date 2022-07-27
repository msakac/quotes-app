import React from 'react'
import { useParams } from 'react-router-dom'
export default function QuoteDetail() {
    const params = useParams();
  return (
    <div>
        <h1>Quotes</h1>
        <h4>{params.quoteId}</h4>
    </div>
  )
}
