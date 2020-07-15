import _ from 'lodash';
import * as monaco from 'monaco-editor';

import('monaco-themes/themes/krTheme.json')
  .then(data => {
	  monaco.editor.defineTheme('monokai', data);
	  monaco.editor.setTheme('monokai');
  })

self.MonacoEnvironment = 
{
	getWorkerUrl: function (moduleId, label)
	{
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css') {
			return './css.worker.bundle.js';
		}
		if (label === 'html') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}
		return './editor.worker.bundle.js';
	}
}


monaco.editor.create(document.getElementById('container'), {
	value: [
		'function x() {',
		'\tconsole.log("Hello world!12");',
		'}'
	].join('\n'),
	language: 'php'
});