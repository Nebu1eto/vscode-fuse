# Fuse Helper for Visual Studio Code

## Features

My Fuse Helper has **only two features** on now. I'll still working now, so please stay tune at this project. :)

* Syntax Highlighting for Fuse-relative Files (UX Markup, Uno Code, Fuse Project files)
* Intellisense FuseJS's Javascript API by Typescript Define Code. (It doesn't support auto-setup. It needs to set manually to your project.)

## Version 
It's for Visual Studio Code 0.9.1. If you using previous version, please check legacy branch.

## Install

### OS X or Linux
Use install.sh. That script will install plugin for you.

### Windows
Move uno, unoproj, ux folders to `%USERPROFILE%\.vscode\extensions` directory.

## How to setup Intellisense for FuseJS?

1. Download this project.
2. Open your project, and copy `fuse.d.ts` file to your project directory.
3. Add comments on your javascript file like this. Please check file's directory. :D
4. It'll be work on VS Code. Happy Hacking Now!

```javascript
/// <reference path="../vscode.d.ts" /> 
```

## Example

### UX File
![UX File](https://raw.githubusercontent.com/Realignist/vscode-fuse/master/uxfile.png)

### Uno File
![Uno File](https://raw.githubusercontent.com/Realignist/vscode-fuse/master/unofile.png)