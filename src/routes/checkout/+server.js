import { json } from '@sveltejs/kit'
import Stripe from 'stripe'
import { STRIPE_SECRET_KEY, DOMAIN } from '$env/static/private'

const stripe = new Stripe(STRIPE_SECRET_KEY)
const success_url = absoluteURL('/checkout/success')
const cancel_url = absoluteURL('/checkout/cancel')

export async function POST({ request }) {
  const { quantity = 1, options = {} } = await request.json()

  // extract metadata about product
  const metadata = {
    color: options.color,
    back: options.back,
    stretcher: options.stretcher
  }
  const description = `Color: ${options.color}, Back: ${options.back}`

  // create a checkout
  const checkout = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url,
    cancel_url,
    line_items: [
       {
         quantity,
         // create a custom price and product on-demand
         price_data: {
           currency: 'usd',
           unit_amount: 7900,
           product_data: {
             name: 'Custom Chair',
             description,
             metadata
           }
         }
       }
    ]
  })

  return json({ url: checkout.url })
}

function absoluteURL(path) {
  const url = new URL(path, DOMAIN)

  return url.toString()
}
