# @paperspace/client-sdk

Paperspace SDK for client-side browser environments

## Install module

The module is published as a node_module under the same name [`@paperspace/client-sdk`](https://www.npmjs.com/package/@paperspace/client-sdk) on [NPM](www.npmjs.com). You can install it like so:

```
yarn add @paperspace/client-sdk
```

## Run example

This will run the build and serve an example page with some examples on it:

```
yarn
yarn start
```

## Build for development

If you are developing this repository in conjunction with another or just want to test it as you develop, you can preferrably run the development build, which gives you a version that is easier to debug:

```
yarn
yarn dev
```

## Build for production

If you are looking to try out the production build, you can run the production build like this:

```
yarn
yarn dist
```

## Developing in conjunction with another repository

If you are developing this repository in conjunction with another, you can [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) your local version of the @paperspace/client-sdk into the host repository:

```
yarn link
```

After this, you want to run `yarn link @paperspace/client-sdk` in the host repository to activate it.

**NB**: Once you are done developing @paperspace/client-sdk remember to run `yarn unlink @paperspace/client-sdk` in the host repository and `yarn unlink` in the root of this repository! This link will stay active, even if you switch branches or pull the latest changes until you unlink them.

**NBB**: Yarn does not work very well with passphrase prompts - [it basically ignores them](https://github.com/yarnpkg/yarn/issues/3699) - so if you use that for you ssh-key, please use [`ssh-add`](https://www.ssh.com/ssh/add) to remember your authentication for the given session.

## Publish a new version

This repository is set up to publish a new version on a new tag. To publish a new version, first pull latest changes from development, and checkout a new release branch (if you are not quite sure yet you can use a [pre-release version](https://semver.org/#spec-item-9)), where `<new-version>` is the new version you are about to publish:
```
$ git pull --rebase
$ git checkout release_v<new-version>
```

After this run `yarn version` (pro-tip: use `--patch`, `--minor` or `--major` flags to automatically increment the version) and type in the new version:
```
$ yarn version
info Current version: 1.0.0
question New version: <new-version> # Do not prefix with 'v'!
...
✨ Successfully released version v<new-version>! The tag build process will publish it ✨
```
Yarn will run `preversion` and `postversion` scripts to commit the version change and the new tag. CircleCI will pick up on the newly created tag and automatically publish the version.

Be sure to create a pull request to merge your version change back into development!

That's it! Now you can install it with either `yarn add @paperspace/client-sdk@latest` or `yarn add @paperspace/client-sdk@<new-version>`.

**NB**: Even if the version number is lower than a previously released version, it will be installed as the latest version!

**NBB**: You cannot publish over an existing version. The best way to handle this situation is to release a new patch or minor version.
