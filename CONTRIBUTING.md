# Introduction

> People like yourself being willing to share code with others that use our platform is what makes a free serverless platform like Cloudflare Workers possible. So, thank you!

> Following these guidelines helps to keep our templates consistent and deliver the best developer experience for those using them. Cloudflare developer experience team maintains the template gallery. (..add more..?)

> There are several ways to contribute to the Cloudflare Workers platform. The template gallery is focussed on streamlining the contribution of templates. When a template makes it through the process it will be made public in [our template gallery](https://workers.cloudflare.com/docs/templates/). Since several developers - even beginners - will be using these templates, we must be scrupulous in the approval process. If you’re looking for a more relaxed way of sharing code, no worries! For other ways to contribute your Worker scripts see [our community]().

# How to make a Template

To start making a template, first one must decide what to build.

### Snippets versus Boilerplates

Template is an umbral term for both snippets and boilerplate. Our gallery uses both. A template will likely, though not required, distinguish itself as a template or a boilerplate. We define them as:

**boilerplate**: a reusable project likely containing _more than one file_ that can serve as a skeleton code for those beginning a project

​ Boilerplates will be displayed in the template gallery as `wrangler generate` commands

​ Examples (will add links):

- Rust Wasm
- Image Compression
- Create React App
- GraphQL

**snippet**: copy-pastable code for either those beginning a project or adding into a project. Meant to not depend on multiple files.

​ Snippets will be displayed by default in the template gallery as the code collapsed with the `addEventListener('fetch',..)` appended. Any imported helper functions with be appended. A user could still use `wrangler generate projName snippets` which would serve as a boilerplate for all the snippets

​ Examples (will add links):

- Modify header
- Bulk redirects

**both(rare)**: a simple project that consists of a single file that one would use as a boilerplate for building out a project but could also easily copy-paste (e.g. hello-world)

## Snippet

## Boilerplate

### What makes a Good Template

The goal of any template is to be reusable amongst several projects, developers and entities; therefore, any template must be able to be used in a generic form. That does not mean that one can't use things like hardcoded constants, it just means those constants must be obvious and the logic must be generic.

Examples of good templates:

- How to send a redirect

### What makes a Bad Template

Custom solutions that would could not clearly be reused make bad templates.

Examples of bad templates:

- Building out a full blown OAuth authentication server

### Name your Template

Your template should have a programmatically name (I will refer to as `name`) and human one

Examples:

- Redirects `redirects`
- Fetch HTML `fetchHTML`

You'll want to make sure your name does not conflict with existing snippet names.

# Building a Template

### Create a Boilerplate

First clone the [template creator](https://github.com/victoriabernard92/workers-template-creator) and follow the instructions in the README to get your project started.

### Create a Snippet

First clone the [snippet project](https://github.com/victoriabernard92/workers-template-creator), then add a file to the `snippets` directory with the `name` of your template. In the `index.js` file import and add an endpoint to your snippet.

```javascript
import { handleRequest as fetchHTML } from './snippets/fetchHTML'
...
import { handleRequest as name } from './snippets/name'

addEventListener('fetch', event => {
    ...
    if (url.endsWith('/name')) {
        response = name(request)
    }
```

# Writing Templates

## Format

### Snippets

For snippets, the meat of the logic should be in a function called `handleRequest`, which should always exist in either forms:

```javascript
function handleRequest(request: Request): Promise<Response>
function handleRequest(request: Request): Response
```

For helper functions used across multiple snippets, you can add to the `lib` folder and use `import`. We realize this violates the concept of no multiple files for snippets, but this is for organizational purposes for the overall snippet project. When imported into the template gallery

If you are just designing a snippet, you can skip the setup and move to writing template

### Variables
