/**
 * Convert TEXT nodes into CSS classes
 */
import Figma from 'figma-js';
import merge from 'deepmerge';
import { camelCase } from '../utils/string';
import { DesignTokens, CSS } from '../../types/design-tokens';

export function isTypography(meta: Figma.FullStyleMetadata): boolean {
  return meta.style_type === 'TEXT';
}

function figmaStyleToCSS(style: Figma.TypeStyle) {
  const css: CSS = {};

  const replacementFont: { [key: string]: string | undefined } = {
    'SF Pro Text':
      '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    'IBM Plex Mono':
      '"IBM Plex Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
  };

  Object.entries(style).forEach(([attr, val]) => {
    switch (attr) {
      case 'fontFamily': {
        // replace SF Pro with default font
        css.fontFamily = replacementFont[val] || val;
        break;
      }
      case 'fontSize': {
        css.fontSize = `${val}px`;
        break;
      }
      case 'fontWeight': {
        css.fontWeight = `${val}`;
        break;
      }
      case 'letterSpacing': {
        css.letterSpacing = `${val / style.fontSize}em`;
        break;
      }
      case 'lineHeightPercent': {
        css.lineHeight = `${Math.round(val) / 100}`;
        break;
      }
      case 'textCase': {
        if (val === 'UPPER') {
          css.textTransform = 'uppercase';
        }
      }
    }
  });

  return css;
}

export default function transform(
  styles: Figma.FullStyleMetadata[],
  fileMap: { [key: string]: Figma.FileNodesResponse['nodes'] }
): DesignTokens['typography'] {
  const sorted = merge(styles, []);
  sorted.sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically

  const typography: DesignTokens['typography'] = {};

  sorted.forEach((c) => {
    const node = fileMap[c.file_key][c.node_id];
    if (!node || !isTypography(c)) {
      return;
    }

    const document = node.document as Figma.Text;

    typography[camelCase(c.name)] = figmaStyleToCSS(document.style);
  });

  return typography;
}
