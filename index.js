addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Return a simple Hello World response
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello worker!', { status: 200 })
}
