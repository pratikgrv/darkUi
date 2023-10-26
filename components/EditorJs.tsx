     import { Editor } from '@editorjs/editorjs';

     // Import the required tools from the Editor.js package
     import Header from '@editorjs/header';
     import Paragraph from '@editorjs/paragraph';
     // Import other blocks as needed

     // Create a function that accepts the Editor.js JSON data and renders it
     export default function EditorRenderer({ data }) {
       // Create a new instance of the Editor class
       const editor = new Editor({
         holder: 'editor',
         // Define the available blocks and their configurations
         tools: {
           header: Header,
           paragraph: Paragraph,
           // Add other blocks as needed
         },
         // Pass the Editor.js JSON data to be rendered
         data: data,
       });

       // Render the editor
       editor.render();

       return <div id="editor"></div>;
     }
     
