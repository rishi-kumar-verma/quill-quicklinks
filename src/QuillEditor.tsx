import * as React from 'react';
import Quill from 'quill/core';
import QuickLinksMenu from './QuickLinksMenu';
import 'quill/dist/quill.snow.css';
import './formats/CustomLink';

type QuickLink = {
  label: string;
  text: string;
  url: string;
  module?: string;
  attributes?: {
    id?: string;
    "data-identifier"?: string;
    utm_source?: string;
    utm_medium?: string;
  };
};

type Props = {
  showQuickLinksMenu?: boolean;
  modules?: Record<string, any>;
  quickLinks?: QuickLink[];
  defaultModule?: string;
};

const QuillEditor: React.FC<Props> = ({
  showQuickLinksMenu = true,
  modules,
  quickLinks,
  defaultModule,
}) => {
  const editorRef = React.useRef<HTMLDivElement>(null);
  const [quill, setQuill] = React.useState<Quill | null>(null);

  React.useEffect(() => {
    if (editorRef.current && !quill) {
      const q = new Quill(editorRef.current, {
        theme: 'snow',
        modules: modules || {
          toolbar: [['bold', 'italic'], ['link']],
        },
      });
      setQuill(q);
    }
  }, [editorRef, quill, modules]);

  return (
    <div>
      <QuickLinksMenu
        quill={quill}
        show={showQuickLinksMenu}
        quickLinks={quickLinks}
        defaultModule={defaultModule}
      />
      <div ref={editorRef} />
    </div>
  );
};

export default QuillEditor;
