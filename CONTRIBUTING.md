# Contributing

To add a new extension to the directory:

1. Fork the repo (create a new branch as well if you want)
2. Modify `extensions.json` by adding your extension (do not edit `README.md`, it will be automatically generated once your change is merged)
3. Push your changes to your fork and [submit a pull request](https://github.com/turbobabr/easyeda-extension-directory/compare)

`extension.json` file is an array of entries, where each entry describes a certain extension. Each entry should contain the following properties:

```json
{
  "title": "Quick Align", // Title of the extension that shows up as a link in README.md
  "description": "Objects alignment without a hassle!", // Short description
  "author": "Andrey Shakhmin", // Author full name or nickname
  "owner": "turbobabr", // github user or org
  "name": "easyeda-quick-align-extension" // repo name
}
```

Thanks in advance!
