_LinkedIn - [React: Software Architecture](https://www.linkedin.com/learning/react-software-architecture/)_

# Code Split Blog

## 2. Server-Side Rendering (SSR)

- [ ] React SSR/SSR routing/SSR styling
  - not used

## 3. State Management Architecture

- [x] small state using the useState hook
  - to toggle post information
- [x] small state using context/accessing context inside components
  - to share Prismic client
- [ ] medium state with Recoil/big state with Redux/big state with MobX
  - not used

## 4. Data Loading

- [ ] data loading with SSR/rendering server-side API data/enhancing SSR with context
  - not used

## 5. Code Splitting

- [x] code splitting basics
  - to lazy load post information
- [x] route-based code splitting
  - to lazy load routes
- [x] error boundaries
  - to catch pages and components’ lazy load errors

## 6. Folder Structure and Naming Conventions

- [x] function vs feature-based organization
  - function organization used
- [x] monoliths, multi-repos, and monorepos
  - monolith used

# Preview

| Home                                                                                                                               | Route error boundary                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [![code-split-blog-home-success.png](https://i.postimg.cc/NF82yxsr/code-split-blog-home-success.png)](https://postimg.cc/wRvjZLs6) | [![code-split-blog-home-error.png](https://i.postimg.cc/Jnkk8LSx/code-split-blog-home-error.png)](https://postimg.cc/ftML76zS) |

| Post                                                                                                                                                 | Metadata error boundary                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [![code-split-blog-post-metadata-success.png](https://i.postimg.cc/zDTgPqCX/code-split-blog-post-metadata-success.png)](https://postimg.cc/9zF0D5gv) | [![code-split-blog-post-metadata-error.png](https://i.postimg.cc/4NZhDjPv/code-split-blog-post-metadata-error.png)](https://postimg.cc/fk2LX26k) |

| About                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| [![code-split-blog-about-success.png](https://i.postimg.cc/hvR7PYBB/code-split-blog-about-success.png)](https://postimg.cc/DJ5zxB0j) |
