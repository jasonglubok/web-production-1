This is the folder that will store all your class demos.

In order to get your participation for the day, you will need to upload your code to each class folder (eg. `/class-demos/class1`).

At the end of each class, you will upload your code via the Terminal (or GitBash) using git CLI with the following commands:

1. Check which files you updated

```sh
git status
```

2. Add the files you want to upload. You can add all the files:

```sh
git add .
```

If you want to add specific files, you can specifify which file or folder:

```sh
git add /class-demos/class4/
```

3. Commit your changes, with a relevant message.

```sh
git commit -m 'added class 4'
```

4. Upload your changes

```sh
git push
```

5. Retrieve the url and upload it to the respective participation assignment in Brightspace. Eg: `https://github.com/samheckle/web-production-1/tree/main/class-demos/class4`

If you have errors, be sure to read the message. Likely it will tell you the exact line of code you need to copy and paste into the Terminal prompt.

For example:

```sh
fatal: The current branch main has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin main

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.
```

So you would copy and paste into your Terminal:

```sh
git push --set-upstream origin main
```
