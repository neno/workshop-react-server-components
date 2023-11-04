# Hands on workshop with Server Comnponents


## Topics

* When and where: 'use client' and 'use server'
  * Server Components are the default
  * Add 'use client' whenever you need interaction or you are using browser APIs
* Architecture the boundaries
  * Lots of sites and applications have parts that are static and don't need to re-render, eg: Netflix, Twitter, etc.
  * This does not mean that they never update. They do, but not necesseraly as a response in real time.
  * You can put Client Components into Server Components. But you cannot put Server Components into Client Components. The Server Component becomes a Client Component, too. This means you will looses the benefits of a Server Component, like shipping less Javascript to the client, not including big libraries, etc.  
  _-> show example_
  * 

## Why Server Components

* Faster time to first byte
* Faster time to first paint
* Faster time to interactive
* Smaller bundle size
* Less Javascript
* Less dependencies
* Less security issues

### Composability like in Frontend

* New data fetching - right inside the component
* Streaming as a new, non-blocking way of communication between client and server

### What's so cool about it?

We have server only and client only pieces. They are running on 2 different places: server and client. But we can still compose them together. This is what we call "Isomorphic Composition".

```jsx
<Modal> ----------------------------------------------> Client
  <Movie>
    <MovieHero>
      <Add/Remove Watchlist /> -----------------------> Client
    </MovieHero>
    <Suspense>
      <Reviews />
    </Suspense>
  </Movie>
</Modal>
```

And, by the way, you don't need to learn a new language or even a new framework. You can use the same React you already know.


## What are Server Components

  * Server Components are only rendered on the server
  * They are rendered only once
  * They only send the rendered result to the client
  * They are now the default in React


## Server Components are static

  * No interaction, no state, no browser APIs available
  * No re-rendering needed
  * No Javascript needed
  * Smaller bundle size


## Updating Server Components

  * Server Components can be updated. But not as a response in real time.

  ## When and where: 'use client' and 'use server'
