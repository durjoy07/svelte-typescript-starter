# Welcome to Lemon Hive SvelteKit Starter
![Screenshot 2023-01-25 at 6 01 35 PM](https://user-images.githubusercontent.com/102900234/214559046-d0595348-7761-48e3-a000-37c20ab82c16.png)
## Get started

Clone the repo and Install the dependencies...

```bash
cd lh-svelte-starter
npm install
```

...then start:

```bash
npm run dev
```

...run storybook

```bash
npm run storybook
```

...for test

```bash
npm run test:unit
```

... for docker build

```bash

docker build -t <image-name>:<unique-tag> .
docker build -t lh-svelte-starter:0.0.1 .

```

... for docker run

```bash

docker run -d -p <local-port>:<container-port> --name <container-name> <image-name>

// in our case
docker run -d -p 4040:3000 --name sveltestarter lh-svelte-starter:0.0.1

```

## This template build with...
* Svelte Kit
* TypeScript
* Tailwind
* Storybook
* Jest/Vitest
* Husky
* Docker
