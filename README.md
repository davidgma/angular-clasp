# angular-clasp
A failed attempt to see whether Google Apps Scripts can be written in Angular and clasp. I couldn't get it to work.

## Prerequisites

### Linux 

I used Linux. I don't know whether it will be the same in other operating systems.

### Nodejs

Node is needed. I use the [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) to install node.

Once nvm is installed, this installs the latest LTS (long term support) version of Node and the Node Package Manager (npm):

```bash
nvm install --lts
nvm ls
npm install npm -g
```

### Typescript 

This is written in Typescript so you need the compiler.

```bash
npm install -g typescript
```

### Angular

See [Angular website](https://angular.io).

```bash
npm install -g @angular/cli
```

### Clasp

See [clasp guide](https://developers.google.com/apps-script/guides/clasp) on the [Google Apps Script website](https://developers.google.com/apps-script).

```bash
npm install @google/clasp -g
```

## Initial set-up

### Create a new Angular project

```bash
ng new angular-clasp
```
### Create a new Google Docs spreadsheet

Do this in [Google Drive](https://drive.google.com/drive/my-drive).

Then you need to get the script ID of the spreadsheet. In the spreadsheet: Tools, Script editor to open the script editor. Then: File, Project Properties and name the project. Or just click in the 'untitled' name and rename it. Then again: File, Project Properties, and get the script ID. It's also the code in the address between the /d/ and the &.

### Create a new Clasp project

From inside the new Angular project main directory:

```bash
mkdir clasp 
cd clasp
clasp clone SCRIPT_ID
cd ..
```

where SCRIPT_ID comes from the previous step.

### Build the Angular project

Change build output path from build/angular-clasp to build.

```bash

```
### Google Apps Typescript type definitions