# Creator

This is the template creator. To make a template:

1. run `wrangler generate myTempName https://github.com/victoriabernard92/workers-template-creator` but with the name of your template

2. `cd myTempName`

3. Add template logic to `index.js`

4. Fill out the `README.md` here is the example:

    ## {{ project-name }}

    TODO: give description of {{ project-name }} here's an example:

    Examples of sending single and bulk redirects from a Worker script.

    TODO: replace link [`index.js`](https://github.com/cloudflare/worker-template-redirects/blob/master/redirect.js) is the content of the Workers script.

    TODO: replace demo Live Demos are hosted on `workers-tooling.cf/demos/redirect`:

    [Demo Generate](https://workers-tooling.cf/demos/redirect/send) | [Demo Bulk](https://workers-tooling.cf/demos/redirect/bulk1)

    #### Wrangler

    To generate using [wrangler](https://github.com/cloudflare/wrangler)

    ```
    wrangler generate myApp https://github.com/cloudflare/worker-template-redirect TODO replace
    ```

    #### Serverless

    To deploy using serverless add a [`serverless.yml`](https://serverless.com/framework/docs/providers/cloudflare/) file.

5. Run `npm install`

6. Now some weird steps that I hope to change...

    a. Commit files changes to run linter

    b. Rename name in package.json to `"name": "{{ project-name }}",`. 

    c. This will cause errors when you run #5 and #a, so now commit the package.json and bypass linter `git add package.json && git commit --amend --no-verify`

7. Add the template to the template gallery after having it approved
