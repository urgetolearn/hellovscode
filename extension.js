const vscode = require('vscode');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('hellovscode.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World- Thank You for using this extension!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated - it will clean up
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
