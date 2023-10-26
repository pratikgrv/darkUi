import EditorJs from '@/components/EditorJs'
import React from 'react'


const EditorJsPage = () => {

   const editorData = {
			time: 1610367908180,
			blocks: [
				{
					type: "header",
					data: {
						text: "Hello, world!",
						level: 1,
					},
				},
				{
					type: "paragraph",
					data: {
						text: "This is a sample paragraph.",
					},
				},
			],
			version: "2.22.2",
		};

  return (
		<div>
			
		</div>
	);
}

export default EditorJsPage