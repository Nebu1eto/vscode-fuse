#!/bin/bash
# Automatic Install Script.
# ONLY WORKS FOR OS X.

echo "Install Visual Studio Plugin for Fuse."
echo "You don't need restart Visual Studio Code."
echo ""
echo "WARNING : IT ONLY WORKS FOR OS X"
echo -n "Do you want to install? (Y / N) : "
read install;

if [ "$install" = "Y" ]
then
	echo ""
	echo "Installing..."
	cp -R vs.language.uno /Applications/Visual\ Studio\ Code.app/Contents/Resources/app/plugins/
	rm -rf /Applications/Visual\ Studio\ Code.app/Contents/Resources/app/plugins/vs.language.xml
	cp -R vs.language.xml /Applications/Visual\ Studio\ Code.app/Contents/Resources/app/plugins/
	echo "Install Complete!"
	exit 0
	break
else
	echo "Install Aborted."
	exit 0
	break
fi

