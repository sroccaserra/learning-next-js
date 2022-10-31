Learning Next.js, following <https://nextjs.org/learn>

Start the dev server :
```
$ npm run dev
```

## Goals

- How does Next.js handle routing?
- How does Next.js handle server-side data?

## Learnings

- Rendering ~ <https://nextjs.org/learn/foundations/how-nextjs-works/rendering>

> Next.js pre-renders every page by default.

> You can opt to use client-side rendering for specific components in your
> Next.js application by choosing to fetch data with React’s useEffect() or a
> data fetching hook such as useSWR.

> In Next.js, you can opt to server-side render pages by using
> `getServerSideProps`.

> React 18 and Next 12 introduce an alpha version of React server components.
> Server components are completely rendered on the server and do not require
> client-side JavaScript to render.

> In Next.js, you can opt to statically generate pages by using
> `getStaticProps`.

> you can choose the most appropriate rendering method for your use case on a
> page-by-page basis

- CDNs and The Edge ~ <https://nextjs.org/learn/foundations/how-nextjs-works/cdns-and-edge>

> Similar to CDNs, Edge servers are distributed to multiple locations around
> the world. But unlike CDNs, which store static content, some Edge servers can
> run code.

> In Next.js, you can run code at the Edge with Middleware, and soon with React
> Server Components.

## References

- Getting started with Next.js ~ <https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs>
- Data fetching with React Server Components ~ <https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html>
- Data Fetching ~ <https://nextjs.org/docs/basic-features/data-fetching/overview>
- Incremental Static Generation ~ <https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration>
- Middleware ~ <https://nextjs.org/docs/advanced-features/middleware>
- Documentation ~ <https://nextjs.org/docs/getting-started>
- Routing ~ <https://nextjs.org/docs/routing/introduction>
- Examples ~ <https://nextjs.org/examples>
- Next.js 13 ~ <https://nextjs.org/blog/next-13>
- Static Generation with and without Data ~ <https://nextjs.org/learn/basics/data-fetching/with-data>
