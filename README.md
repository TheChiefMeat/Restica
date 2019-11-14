# Restica

**A Minimal Restic GUI.**

![Restica preview image](https://raw.githubusercontent.com/TheChiefMeat/Restica/master/assets/img/preview.png)


## Usage

Before using Restica, be sure to either include a password.txt file with the folder you wish to backup, or include it in the command box when you run a command. By default, the "Initialise", "Backup" and "Restore" buttons assume you are using the included password.txt file.

Once you have supplied your password via the password.txt file, you can start the program and use the "Initialise" button.

Restica has three main functions. 

The "Backup" button simply backs up the folder given to it in the command box; supply any folder and Restica will back up that folder to the chosen backup location.

The "Restore" button simply restores the last backup to the folder given to it in the command box.

The "Run" button allows you to run any other [Restic](https://github.com/restic/restic) commands that are available, using the command box.




## Installation

Ensure that [Restic](https://github.com/restic/restic) is available in your PATH directory.

Simple download the .zip file for your operating system from the [latest release page](https://github.com/TheChiefMeat/Restica/releases/latest) and unzip the program to a folder of your choice.

## Install From Source

First make sure you have both git and node.js installed, then do the following:

```bash
# Clone this repository
git clone https://github.com/TheChiefMeat/Restica
# Go into the repository
cd Restica
# Install dependencies
npm install electron-packager -g
npm install
# Install 
npm start
```

To build the program for your system, simply run:

```bash
electron-packager .
```

## License

(C) TheChiefMeat. All rights reserved.

DISCLAIMER/LICENCE 

WHILE I HAVE MADE EVERY POSSIBLE EFFORT TO ENSURE THIS SOFTWARE IS BUG FREE, I DO NOT GUARANTEE THAT IT IS FREE FROM DEFECTS. 

THIS PROGRAM IS PROVIDED AS IS AND YOU USE THIS PROGRAM AT YOUR OWN RISK.

UNDER NO CIRCUMSTANCE SHALL I BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES, LOSSES OR THEFT FROM USE OR MISUSE OF THIS SOFTWARE. 

FOR PRIVATE USE YOU MAY:  MODIFY THIS SOFTWARE ANY WAY YOU SEE FIT, HOWEVER SAID MODIFIED VERSIONS ARE NOT TO BE REDISTRIBUTED VIA ANY MEANS.

FOR PRIVATE USE YOU MAY NOT:

REDISTRIBUTE THIS SOFTWARE.

REDISTRIBUTE MODIFIED VERSIONS OF THIS SOFTWARE.

COMMERCIALISE THIS SOFTWARE.

SELL THIS SOFTWARE.

ANY COMMERCIAL USE OF THIS SOFTWARE IS STRICTLY PROHIBITED.

ANY COMMERCIALISATION OF THIS SOFTWARE IS STRICTLY PROHIBITED.

ALL DOWNLOAD LINKS MUST POINT DIRECTLY TO THE BELOW LINK:

OFFICIAL GITHUB REPOSITORY: https://github.com/TheChiefMeat/Restica/releases/latest
