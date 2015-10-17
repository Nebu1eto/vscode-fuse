#!/bin/bash
# Automatic Install Script.
# ONLY WORKS FOR *NIX

echo "Install Visual Studio Plugin for Fuse."
echo "You don't need restart Visual Studio Code."
echo ""
echo "WARNING : IT ONLY WORKS FOR OS X OR LINUX"
echo -n "Do you want to install? (Y / N) : "
read install;

if [ "$install" = "Y" ]
then
	echo ""
	echo "Installing..."
	mkdir -p $HOME/.vscode/extensions
	cp -R uno $HOME/.vscode/extensions/
	cp -R ux $HOME/.vscode/extensions/
	cp -R unoproj $HOME/.vscode/extensions/
	echo "Install Complete!"
	exit 0
	break
else
	echo "Install Aborted."
	exit 0
	break
fi

