const FIREBASE_DOMAIN =
  "https://react-daf75-default-rtdb.europe-west1.firebasedatabase.app";

export async function getAllQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fatch quotes");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quote = {
      id: key,
      ...data[key],
    };
    transformedQuotes.push(quote);
  }

  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote");
  }

  const fetchedQuote = { id: quoteId, ...data };
  return fetchedQuote;
}

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote");
  }

  return null;
}

export async function addComment(commentData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments.json`, {
    method: "POST",
    body: JSON.stringify(commentData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote");
  }
  return null;
}

export async function getAllComments() {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch comments");
  }

  const transformedComments = [];

  for (const key in data) {
    const comment = { id: key, ...data[key] };
    transformedComments.push(comment);
  }
  return transformedComments;
}
