/**
 * Important constants
 * @param {string} bucket
 * @param {string} hostname
 */
const bucket = 'cfredirect'
const hostname = '.s3.amazonaws.com'

/**
 * Module Import
 * This module lets you access your AWS buckets
 * by wrapping your calls with AWS auth headers
 * @param {string} accessKeyId
 * @param {string} secretAccessKey
 */
import { AwsClient } from 'aws4fetch'

const aws = new AwsClient({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
})

/**
 * Redirects your call to an AWS bucket
 * @param {Request} request
 */
async function handleRequest(request) {
  const { method, body } = request
  const url = new URL(request.url)
  url.hostname = bucket + hostname
  return aws.fetch(url, { method, body })
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
