/**
 * Here are what developers are expected to fill in
 * Replace url with the host you wish to send requests to
 * @param {string} url
 */
const url = 'https://example.com'

/**
 * Helper function
 * Here is what my help does
 * @param {string} path
 */
function helper(path) {
  return url + '/' + path
}

/**
 * Return a simple Hello World response
 * @param {Request} request
 */
async function handleRequest(request) {
  helper(request.url.path)
  return new Response('Hello worker!', { status: 200 })
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
