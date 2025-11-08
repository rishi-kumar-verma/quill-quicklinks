import * as React from "react";
import Quill from "quill/core";

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
  quill: Quill | null;
  quickLinks?: QuickLink[];
  show?: boolean;
  defaultModule?: string;
};

const QuickLinksMenu: React.FC<Props> = ({
  quill,
  quickLinks = [],
  show = true,
  defaultModule = "link",
}) => {
  const insertLink = (link: QuickLink) => {
    if (quill) {
      const range = quill.getSelection();
      if (range) {
        const module = link.module || defaultModule;
        const value = link.attributes
          ? { href: link.url, ...link.attributes }
          : link.url;

        quill.insertText(range.index, link.text, module, value);
        quill.setSelection(range.index + link.text.length, 0);
      }
    }
  };

  if (!show || quickLinks.length === 0) return null;

  return (
    <div style={{ marginBottom: "8px" }}>
      {quickLinks.map((link, i) => (
        <button key={i} onClick={() => insertLink(link)}>
          {link.label}
        </button>
      ))}
    </div>
  );
};

export default QuickLinksMenu;
