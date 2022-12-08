# svelte-kit-ecommerce-3d

E-commerce example using [SvelteKit](https://kit.svelte.dev), [Threlte](https://threlte.xyz), and [Stripe](https://stripe.com).

[Demo](https://svelte-kit-ecommerce-3d.vercel.app)

## Usage

To set up on your local machine:

```sh
gh repo clone joshnuss/svelte-kit-ecommerce-3d
cd svelte-kit-ecommerce-3d
pnpm install
pnpm dev
```

## Set up environment

Copy the `.env.example` and then add `STRIPE_SECRET_KEY` to `.env`:

```sh
cp .env.example .env
```

## Deploy

To deploy to vercel, run:

```sh
pnpm vercel --prod
```

Then, have fun!

## License

MIT
