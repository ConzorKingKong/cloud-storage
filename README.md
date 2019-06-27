# Creator

This is the template creator. To make a template:

1. run `wrangler generate myTempName https://github.com/victoriabernard92/workers-template-creator` but with the name of your template

2. `cd myTempName`

3. Add project logic to the directory.
4. Replace in your source code any hard coded project names to `{{ project_name }}` and any where you reference authors to `{{ authors }}`. (e.g. in your project.json replace the value of the property `"authors"` - don't replace `"name"` just because this breaks the linter)

5. Fill out the `README.md`. Make sure to include:
    - Description of what the Worker accomplishes.
    - Demo. Ideally a demo using cloudflareworkers.com, but for Worker demos requiring special headers,
      POST bodies,.. a live demo of where the Worker is running also works.
6. Commit source files omitting build files

7. Host a public repo, and then test your project by running `wrangler generate https://github.com/<your-repo>`.
8. Submit a PR to add the template to the [template gallery](https://github.com/cloudflare/cloudflare-docs/) after having it approved.
