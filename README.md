# Creator

This is the template creator. To make a template:

1. run `git clone https://github.com/victoriabernard92/workers-template-creator myTempName`

2. `cd myTempName`

3. Add project logic to the directory. Run `npm install`.

4. Specify the entry point of the Worker script in package.json in `main` property.

5. Replace in your source code any hard coded project names to `{{ project_name }}` and any where you reference authors to `{{ authors }}`. (e.g. in your package.json replace the value of the property `"authors"` - don't replace `"name"` just because this breaks npm)

6. Fill out the `README.md`. Make sure to include:

    - Description of what the Worker accomplishes.
    - Demo. Ideally a demo using cloudflareworkers.com, but for Worker demos requiring special headers,
      POST bodies,.. a live demo of where the Worker is running also works.

7. Commit source files omitting build files of course.

8. Host a public repo, and then test your project by running `wrangler generate https://github.com/<your-repo>`.

9. Submit a PR to add the template to the [template gallery](https://github.com/cloudflare/cloudflare-docs/edit/master/content/templates/_index.md) after having it approved.
