import React, { useCallback, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Editor: React.FC = () => {
  const [htmlInput, setHtmlInput] = useState('');
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>Начните писать здесь...</p>`,
  });

  const handleImportHtml = () => {
    if (editor) {
      editor.commands.setContent(htmlInput);
      setHtmlInput('');
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="editor">
      <div className="html-import">
        <textarea
          value={htmlInput}
          onChange={(e) => setHtmlInput(e.target.value)}
          placeholder="Вставьте HTML для импорта"
        />
        <button onClick={handleImportHtml}>Импорт HTML</button>
      </div>
      <div className="toolbar">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          Жирный
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          Курсив
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;