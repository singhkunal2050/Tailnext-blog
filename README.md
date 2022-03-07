## Next Blog with Sanity 

- Started with Next Tailwind Starter 
- Initialised Sanity at nextblogsanity directory with a Blog Schema Template    
- queries with no sql Gruq(Like Graphql)
- getServerSideProps for getting Dynamic Data in Static Pages (Also refer react Suspense)
- 2051 is used for sanity 

## Running Sanity Server 
```sanity start```
- Sanity Schemas at /nextblogsanity/schemas

### Query Example 

```
*[_type == 'post']{
  _id
} 

```

### Getting Related Data from Foreign Table

```
*[_type == 'post']{
  _id,
  slug,
  author ->{
   name,
   image
  }
} 

```

## Insall next-sanity for helpers

- Create sanity.js at root dir for config and helpers
- For project id and dataset env variables refer sanity.json inside `nextblogsanity`
- create .env.local for env variables
- `NEXT_PUBLIC` prepend in env var makes it available  for API Routes & clientside otherwise its only available for api


## Running Next Server 
```npm run dev``` 


## pushed on githb


## Created [slug.tsx] for  /post/post-item route 

## Used getStaticPaths and Props 

## Installed Tailwind Typography for blog page

## Installed Portable text for parsing body from json


## Installed react-hook-form

## Create API Routes from /api/apiname.ts
## install sanity-client for the same 

## Created API Token for editor and added to env file

## created custom schema for comment 
## Add comment to schema.js 


____________________________________________________________________________--

# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
