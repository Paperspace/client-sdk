# @paperspace/client-sdk

Paperspace SDK for client-side browser environments

## Install module

The module is published as a node_module under the same name [`@paperspace/client-sdk`](https://www.npmjs.com/package/@paperspace/client-sdk) on [NPM](www.npmjs.com). You can install it like so:

```sh
$ yarn add @paperspace/client-sdk
```

## Run example

This will run the build and serve an example page with some examples on it:

```sh
$ yarn
$ yarn start
```

## Build for development

If you are developing this repository in conjunction with another or just want to test it as you develop, you can preferrably run the development build, which gives you a version that is easier to debug:

```sh
$ yarn
$ yarn build:dev
```

## Build for production

If you are looking to try out the production build, you can run the production build like this:

```sh
$ yarn
$ yarn build:prod
```

## Environment variables

You can set the host the client points to by running it with the following environment variable:
```sh
$ STREAM_HOST=http://localhost:3002 yarn start
```

## Developing in conjunction with another repository

If you are developing this repository in conjunction with another, you can [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) your local version of the @paperspace/client-sdk into the host repository:

```sh
$ yarn link # In a separate terminal window from your (development) build
```
After this, you want to run `yarn link @paperspace/client-sdk` in the host repository to activate it.

**NB**: Remember to `yarn unlink @paperspace/client-sdk` in the host repository and `yarn unlink` in the root of this repository when you are done developing client-sdk! This link will otherwise stay active, even if you switch branches or pull changes.

**NBB**: Yarn does not work very well with passphrase prompts - [it basically ignores them](https://github.com/yarnpkg/yarn/issues/3699) - so if you use that for you ssh-key, please use [`ssh-add`](https://www.ssh.com/ssh/add) to remember your authentication for the given session.

## Publish a new version

This repository is set up to *publish a new version on a new tag*. To publish a new version follow these steps, where `X.Y.Z` is the new version you are about to publish:

*Pro-tip*: use `--patch`, `--minor` or `--major` flags for `yarn version` to automatically increment the version. You can also use a [pre-release version](https://semver.org/#spec-item-9) before you release an actual version change.

```sh
$ git pull --rebase
$ git checkout -b release_vX.Y.Z
$ yarn version # This will create a tag, run `preversion` and `postversion` scripts and push the tag to remote
info Current version: 1.0.0
question New version: X.Y.Z # Do not prefix with 'v'!
...
✨ Successfully released version vX.Y.Z! The tag build process will publish it ✨
```
CircleCI will pick up on the newly created tag and automatically publish the version.

Now push your branch to remote and create a PR to see the status of the publish build and get your version change merged back into development:
```sh
$ git push --set-upstream origin release_vX.Y.Z
$ open https://github.com/Paperspace/client-sdk/compare/release_vX.Y.Z
```
That's it! You can now install this module with either `yarn add @paperspace/client-sdk@latest` or `yarn add @paperspace/client-sdk@X.Y.Z`.

**NB**: Even if the version number is lower than a previously released version, it will be installed as the latest version!

**NBB**: You cannot publish over an existing version. The best way to handle this situation is to release a new patch or minor version.
