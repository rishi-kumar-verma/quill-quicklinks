import Quill from 'quill/core';

const BaseLink = Quill.import('formats/link') as typeof Quill.import('blots/embed');

class CustomLink extends (BaseLink as any) {
  static create(value: string | { href: string; [key: string]: any }) {
    const node = super.create(value) as HTMLElement;

    if (typeof value === 'object') {
      node.setAttribute('href', value.href);
      Object.entries(value).forEach(([key, val]) => {
        if (key !== 'href' && val != null) {
          node.setAttribute(key, val);
        }
      });
    } else {
      node.setAttribute('href', value);
    }

    return node;
  }

  static formats(domNode: HTMLElement) {
    const attrs: Record<string, string | null> = {};
    Array.from(domNode.attributes).forEach(attr => {
      attrs[attr.name] = attr.value;
    });
    return attrs;
  }

  format(name: string, value: any) {
    if (value) {
      this.domNode.setAttribute(name, value);
    } else {
      this.domNode.removeAttribute(name);
    }
  }
}

Quill.register('formats/link', CustomLink, true);