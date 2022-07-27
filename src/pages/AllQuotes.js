import React from "react";
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: "q1", author: "Somey", text: "Learning is fun" },
  { id: "q2", author: "Mosy", text: "Killing is fun" },
  { id: "q3", author: "Fosy", text: "Hehoulo is fun" },
];

export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
}
