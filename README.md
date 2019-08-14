# Cloud Storage

This Worker allows you to put things into - and pull things out of - cloud storage from AWS.

To use this template in wrangler, run:

`wrangler generate cloud-storage https://github.com/ConzorKingKong/cloud-storage`

Make sure to add a `.env` file to the root directory for the `accessKeyId` and `secretAccessKey` values in the `index.js` file.

## Demo

Due to the nature of this proxying requests from a private bucket, this demo only supports GET requests. You can try getting from index.html, index2.html, or image.jpg

https://cloud-storage.streamblog.website/index.html
