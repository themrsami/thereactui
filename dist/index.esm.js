import require$$1, { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import require$$0, { forwardRef, useState, useRef, useEffect, isValidElement, cloneElement, createContext, useContext } from 'react';
import { Check, Copy, ChevronRight, X, Book, Download, Layers, Menu, Sun, Moon, Monitor, ChevronDown, Search } from 'lucide-react';
import Prism$1 from 'prismjs';
import { createPortal } from 'react-dom';
import { ThemeProvider, useTheme } from 'next-themes';
export { useTheme } from 'next-themes';

const Button = forwardRef(({ variant = 'secondary', size = 'md', loading = false, className = '', children, disabled, ...props }, ref) => {
    // Base styles - theReactUI principles: no border-radius, pure black/white
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-transform duration-100 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current disabled:opacity-50 disabled:pointer-events-none active:translate-y-[1px] active:scale-[0.98]';
    // Variant styles - following theReactUI design: borders only, no backgrounds
    const variantStyles = {
        primary: 'bg-foreground text-background border border-foreground hover:bg-background hover:text-foreground',
        secondary: 'bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background',
        ghost: 'bg-transparent text-foreground border-none hover:bg-foreground hover:text-background',
    };
    // Size styles
    const sizeStyles = {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
    };
    const combinedClassName = [
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
    ].join(' ');
    return (jsxs("button", { ref: ref, className: combinedClassName, disabled: disabled || loading, ...props, children: [loading && (jsx("span", { className: `mr-2 h-3 w-3 animate-spin border ${variant === 'primary'
                    ? 'border-background border-t-transparent'
                    : 'border-current border-t-transparent'}` })), children] }));
});
Button.displayName = 'Button';

function ButtonGroup({ children, orientation = 'horizontal', className = '' }) {
    const baseStyles = 'inline-flex';
    const orientationStyles = {
        horizontal: 'flex-row',
        vertical: 'flex-col',
    };
    const combinedClassName = [
        baseStyles,
        orientationStyles[orientation],
        className,
    ].join(' ');
    // Clone children and add border handling
    const processedChildren = require$$0.Children.map(children, (child, index) => {
        if (!require$$0.isValidElement(child))
            return child;
        const isFirst = index === 0;
        index === require$$0.Children.count(children) - 1;
        let additionalClasses = '';
        if (orientation === 'horizontal') {
            if (!isFirst)
                additionalClasses += ' -ml-px';
        }
        else {
            if (!isFirst)
                additionalClasses += ' -mt-px';
        }
        const childProps = child.props;
        return require$$0.cloneElement(child, {
            ...childProps,
            className: `${childProps.className || ''} ${additionalClasses}`.trim(),
        });
    });
    return (jsx("div", { className: combinedClassName, role: "group", children: processedChildren }));
}

function CopyButton({ text, variant = 'ghost', size = 'sm', className = '', iconOnly = false }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            // Reset after 1 second
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }
        catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    return (jsx(Button, { variant: variant, size: size, onClick: handleCopy, className: `flex items-center gap-1 ${className}`, disabled: copied, children: copied ? (jsxs(Fragment, { children: [jsx(Check, { size: 14 }), !iconOnly && 'Copied!'] })) : (jsxs(Fragment, { children: [jsx(Copy, { size: 14 }), !iconOnly && 'Copy'] })) }));
}

const IconButton = forwardRef(({ variant = 'secondary', size = 'md', loading = false, className = '', children, disabled, 'aria-label': ariaLabel, ...props }, ref) => {
    // Base styles - theReactUI principles: no border-radius, pure black/white
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-transform duration-100 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current disabled:opacity-50 disabled:pointer-events-none active:translate-y-[1px] active:scale-[0.98]';
    // Variant styles - following theReactUI design: borders only, no backgrounds
    const variantStyles = {
        primary: 'bg-foreground text-background border border-foreground hover:bg-background hover:text-foreground',
        secondary: 'bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background',
        ghost: 'bg-transparent text-foreground border-none hover:bg-foreground hover:text-background',
    };
    // Size styles - square aspect ratio for icons
    const sizeStyles = {
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
    };
    const combinedClassName = [
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
    ].join(' ');
    return (jsx("button", { ref: ref, className: combinedClassName, disabled: disabled || loading, "aria-label": ariaLabel, ...props, children: loading ? (jsx("span", { className: `h-3 w-3 animate-spin border ${variant === 'primary'
                ? 'border-background border-t-transparent'
                : 'border-current border-t-transparent'}` })) : (children) }));
});
IconButton.displayName = 'IconButton';

const Input = forwardRef(({ className = '', variant = 'default', size = 'md', error = false, helperText, errorMessage, label, labelHidden = false, id, ...props }, ref) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    // Determine variant based on error state
    const actualVariant = error ? 'error' : variant;
    // Size classes
    const sizeClasses = {
        sm: 'h-8 text-sm px-2',
        md: 'h-10 text-base px-3',
        lg: 'h-12 text-lg px-4'
    };
    // Variant classes
    const variantClasses = {
        default: 'border-current focus:border-current focus:ring-0',
        error: 'border-red-500 focus:border-red-500 focus:ring-0 text-red-900',
        success: 'border-green-500 focus:border-green-500 focus:ring-0 text-green-900'
    };
    // Base classes following theReactUI design principles
    const baseClasses = `
      w-full
      border
      bg-background
      text-foreground
      transition-colors
      duration-200
      focus:outline-none
      placeholder:opacity-50
      disabled:opacity-50
      disabled:cursor-not-allowed
      ${sizeClasses[size]}
      ${variantClasses[actualVariant]}
    `.trim().replace(/\s+/g, ' ');
    const finalClassName = `${baseClasses} ${className}`;
    return (jsxs("div", { className: "w-full", children: [label && (jsx("label", { htmlFor: inputId, className: `
              block text-sm font-medium text-foreground mb-2
              ${labelHidden ? 'sr-only' : ''}
            `.trim().replace(/\s+/g, ' '), children: label })), jsx("input", { ref: ref, id: inputId, className: finalClassName, ...props }), (helperText || errorMessage) && (jsx("p", { className: `
            mt-2 text-sm
            ${error || errorMessage ? 'text-red-600 dark:text-red-400' : 'text-foreground opacity-70'}
          `.trim().replace(/\s+/g, ' '), children: error || errorMessage ? errorMessage : helperText }))] }));
});
Input.displayName = 'Input';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var prismTypescript = {};

var hasRequiredPrismTypescript;

function requirePrismTypescript () {
	if (hasRequiredPrismTypescript) return prismTypescript;
	hasRequiredPrismTypescript = 1;
	(function (Prism) {

		Prism.languages.typescript = Prism.languages.extend('javascript', {
			'class-name': {
				pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'builtin': /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
		});

		// The keywords TypeScript adds to JavaScript
		Prism.languages.typescript.keyword.push(
			/\b(?:abstract|declare|is|keyof|readonly|require)\b/,
			// keywords that have to be followed by an identifier
			/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
			// This is for `import type *, {}`
			/\btype\b(?=\s*(?:[\{*]|$))/
		);

		// doesn't work with TS because TS is too complex
		delete Prism.languages.typescript['parameter'];
		delete Prism.languages.typescript['literal-property'];

		// a version of typescript specifically for highlighting types
		var typeInside = Prism.languages.extend('typescript', {});
		delete typeInside['class-name'];

		Prism.languages.typescript['class-name'].inside = typeInside;

		Prism.languages.insertBefore('typescript', 'function', {
			'decorator': {
				pattern: /@[$\w\xA0-\uFFFF]+/,
				inside: {
					'at': {
						pattern: /^@/,
						alias: 'operator'
					},
					'function': /^[\s\S]+/
				}
			},
			'generic-function': {
				// e.g. foo<T extends "bar" | "baz">( ...
				pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
				greedy: true,
				inside: {
					'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
					'generic': {
						pattern: /<[\s\S]+/, // everything after the first <
						alias: 'class-name',
						inside: typeInside
					}
				}
			}
		});

		Prism.languages.ts = Prism.languages.typescript;

	}(Prism));
	return prismTypescript;
}

requirePrismTypescript();

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': {
		pattern: RegExp(
			/(^|[^\w$])/.source +
			'(?:' +
			(
				// constant
				/NaN|Infinity/.source +
				'|' +
				// binary integer
				/0[bB][01]+(?:_[01]+)*n?/.source +
				'|' +
				// octal integer
				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
				'|' +
				// hexadecimal integer
				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
				'|' +
				// decimal bigint
				/\d+(?:_\d+)*n/.source +
				'|' +
				// decimal number (integer or float) but no bigint
				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
			) +
			')' +
			/(?![\w$])/.source
		),
		lookbehind: true
	},
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: RegExp(
			// lookbehind
			// eslint-disable-next-line regexp/no-dupe-characters-character-class
			/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
			// Regex pattern:
			// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
			// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
			// with the only syntax, so we have to define 2 different regex patterns.
			/\//.source +
			'(?:' +
			/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
			'|' +
			// `v` flag syntax. This supports 3 levels of nested character classes.
			/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
			')' +
			// lookahead
			/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
		),
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	},
	'string-property': {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	}
});

Prism.languages.insertBefore('javascript', 'operator', {
	'literal-property': {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: true,
		alias: 'property'
	},
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;

(function (Prism) {

	var javascript = Prism.util.clone(Prism.languages.javascript);

	var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
	var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
	var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

	/**
	 * @param {string} source
	 * @param {string} [flags]
	 */
	function re(source, flags) {
		source = source
			.replace(/<S>/g, function () { return space; })
			.replace(/<BRACES>/g, function () { return braces; })
			.replace(/<SPREAD>/g, function () { return spread; });
		return RegExp(source, flags);
	}

	spread = re(spread).source;


	Prism.languages.jsx = Prism.languages.extend('markup', javascript);
	Prism.languages.jsx.tag.pattern = re(
		/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source
	);

	Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/;
	Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
	Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
	Prism.languages.jsx.tag.inside['comment'] = javascript['comment'];

	Prism.languages.insertBefore('inside', 'attr-name', {
		'spread': {
			pattern: re(/<SPREAD>/.source),
			inside: Prism.languages.jsx
		}
	}, Prism.languages.jsx.tag);

	Prism.languages.insertBefore('inside', 'special-attr', {
		'script': {
			// Allow for two levels of nesting
			pattern: re(/=<BRACES>/.source),
			alias: 'language-javascript',
			inside: {
				'script-punctuation': {
					pattern: /^=(?=\{)/,
					alias: 'punctuation'
				},
				rest: Prism.languages.jsx
			},
		}
	}, Prism.languages.jsx.tag);

	// The following will handle plain text inside tags
	var stringifyToken = function (token) {
		if (!token) {
			return '';
		}
		if (typeof token === 'string') {
			return token;
		}
		if (typeof token.content === 'string') {
			return token.content;
		}
		return token.content.map(stringifyToken).join('');
	};

	var walkTokens = function (tokens) {
		var openedTags = [];
		for (var i = 0; i < tokens.length; i++) {
			var token = tokens[i];
			var notTagNorBrace = false;

			if (typeof token !== 'string') {
				if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
					// We found a tag, now find its kind

					if (token.content[0].content[0].content === '</') {
						// Closing tag
						if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
							// Pop matching opening tag
							openedTags.pop();
						}
					} else {
						if (token.content[token.content.length - 1].content === '/>') ; else {
							// Opening tag
							openedTags.push({
								tagName: stringifyToken(token.content[0].content[1]),
								openedBraces: 0
							});
						}
					}
				} else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {

					// Here we might have entered a JSX context inside a tag
					openedTags[openedTags.length - 1].openedBraces++;

				} else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {

					// Here we might have left a JSX context inside a tag
					openedTags[openedTags.length - 1].openedBraces--;

				} else {
					notTagNorBrace = true;
				}
			}
			if (notTagNorBrace || typeof token === 'string') {
				if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
					// Here we are inside a tag, and not inside a JSX context.
					// That's plain text: drop any tokens matched.
					var plainText = stringifyToken(token);

					// And merge text with adjacent text
					if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
						plainText += stringifyToken(tokens[i + 1]);
						tokens.splice(i + 1, 1);
					}
					if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
						plainText = stringifyToken(tokens[i - 1]) + plainText;
						tokens.splice(i - 1, 1);
						i--;
					}

					tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
				}
			}

			if (token.content && typeof token.content !== 'string') {
				walkTokens(token.content);
			}
		}
	};

	Prism.hooks.add('after-tokenize', function (env) {
		if (env.language !== 'jsx' && env.language !== 'tsx') {
			return;
		}
		walkTokens(env.tokens);
	});

}(Prism));

(function (Prism) {
	var typescript = Prism.util.clone(Prism.languages.typescript);
	Prism.languages.tsx = Prism.languages.extend('jsx', typescript);

	// doesn't work with TS because TS is too complex
	delete Prism.languages.tsx['parameter'];
	delete Prism.languages.tsx['literal-property'];

	// This will prevent collisions between TSX tags and TS generic types.
	// Idea by https://github.com/karlhorky
	// Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928
	var tag = Prism.languages.tsx.tag;
	tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
	tag.lookbehind = true;
}(Prism));

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));

var prismScss = {};

var hasRequiredPrismScss;

function requirePrismScss () {
	if (hasRequiredPrismScss) return prismScss;
	hasRequiredPrismScss = 1;
	Prism.languages.scss = Prism.languages.extend('css', {
		'comment': {
			pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
			lookbehind: true
		},
		'atrule': {
			pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		// url, compassified
		'url': /(?:[-a-z]+-)?url(?=\()/i,
		// CSS selector regex is not appropriate for Sass
		// since there can be lot more things (var, @ directive, nesting..)
		// a selector must start at the end of a property or after a brace (end of other rules or nesting)
		// it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
		// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
		// can "pass" as a selector- e.g: proper#{$erty})
		// this one was hard to do, so please be careful if you edit this one :)
		'selector': {
			// Initial look-ahead is used to prevent matching of blank selectors
			pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
			inside: {
				'parent': {
					pattern: /&/,
					alias: 'important'
				},
				'placeholder': /%[-\w]+/,
				'variable': /\$[-\w]+|#\{\$[-\w]+\}/
			}
		},
		'property': {
			pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
			inside: {
				'variable': /\$[-\w]+|#\{\$[-\w]+\}/
			}
		}
	});

	Prism.languages.insertBefore('scss', 'atrule', {
		'keyword': [
			/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
			{
				pattern: /( )(?:from|through)(?= )/,
				lookbehind: true
			}
		]
	});

	Prism.languages.insertBefore('scss', 'important', {
		// var and interpolated vars
		'variable': /\$[-\w]+|#\{\$[-\w]+\}/
	});

	Prism.languages.insertBefore('scss', 'function', {
		'module-modifier': {
			pattern: /\b(?:as|hide|show|with)\b/i,
			alias: 'keyword'
		},
		'placeholder': {
			pattern: /%[-\w]+/,
			alias: 'selector'
		},
		'statement': {
			pattern: /\B!(?:default|optional)\b/i,
			alias: 'keyword'
		},
		'boolean': /\b(?:false|true)\b/,
		'null': {
			pattern: /\bnull\b/,
			alias: 'keyword'
		},
		'operator': {
			pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
			lookbehind: true
		}
	});

	Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;
	return prismScss;
}

requirePrismScss();

// https://www.json.org/json-en.html
Prism.languages.json = {
	'property': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'comment': {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: true
	},
	'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'punctuation': /[{}[\],]/,
	'operator': /:/,
	'boolean': /\b(?:false|true)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	}
};

Prism.languages.webmanifest = Prism.languages.json;

(function (Prism) {
	// $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
	// + LC_ALL, RANDOM, REPLY, SECONDS.
	// + make sure PS1..4 are here as they are not always set,
	// - some useless things.
	var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';

	var commandAfterHeredoc = {
		pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
		lookbehind: true,
		alias: 'punctuation', // this looks reasonably well in all themes
		inside: null // see below
	};

	var insideString = {
		'bash': commandAfterHeredoc,
		'environment': {
			pattern: RegExp('\\$' + envVars),
			alias: 'constant'
		},
		'variable': [
			// [0]: Arithmetic Environment
			{
				pattern: /\$?\(\([\s\S]+?\)\)/,
				greedy: true,
				inside: {
					// If there is a $ sign at the beginning highlight $(( and )) as variable
					'variable': [
						{
							pattern: /(^\$\(\([\s\S]+)\)\)/,
							lookbehind: true
						},
						/^\$\(\(/
					],
					'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
					// Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
					'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
					// If there is no $ sign at the beginning highlight (( and )) as punctuation
					'punctuation': /\(\(?|\)\)?|,|;/
				}
			},
			// [1]: Command Substitution
			{
				pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
				greedy: true,
				inside: {
					'variable': /^\$\(|^`|\)$|`$/
				}
			},
			// [2]: Brace expansion
			{
				pattern: /\$\{[^}]+\}/,
				greedy: true,
				inside: {
					'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
					'punctuation': /[\[\]]/,
					'environment': {
						pattern: RegExp('(\\{)' + envVars),
						lookbehind: true,
						alias: 'constant'
					}
				}
			},
			/\$(?:\w+|[#?*!@$])/
		],
		// Escape sequences from echo and printf's manuals, and escaped quotes.
		'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
	};

	Prism.languages.bash = {
		'shebang': {
			pattern: /^#!\s*\/.*/,
			alias: 'important'
		},
		'comment': {
			pattern: /(^|[^"{\\$])#.*/,
			lookbehind: true
		},
		'function-name': [
			// a) function foo {
			// b) foo() {
			// c) function foo() {
			// but not “foo {”
			{
				// a) and c)
				pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
				lookbehind: true,
				alias: 'function'
			},
			{
				// b)
				pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
				alias: 'function'
			}
		],
		// Highlight variable names as variables in for and select beginnings.
		'for-or-select': {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: 'variable',
			lookbehind: true
		},
		// Highlight variable names as variables in the left-hand part
		// of assignments (“=” and “+=”).
		'assign-left': {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
			inside: {
				'environment': {
					pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
					lookbehind: true,
					alias: 'constant'
				}
			},
			alias: 'variable',
			lookbehind: true
		},
		// Highlight parameter names as variables
		'parameter': {
			pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
			alias: 'variable',
			lookbehind: true
		},
		'string': [
			// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			// Here-document with quotes around the tag
			// → No expansion (so no “inside”).
			{
				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: true,
				greedy: true,
				inside: {
					'bash': commandAfterHeredoc
				}
			},
			// “Normal” string
			{
				// https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
				pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
				pattern: /(^|[^$\\])'[^']*'/,
				lookbehind: true,
				greedy: true
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
				pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
				greedy: true,
				inside: {
					'entity': insideString.entity
				}
			}
		],
		'environment': {
			pattern: RegExp('\\$?' + envVars),
			alias: 'constant'
		},
		'variable': insideString.variable,
		'function': {
			pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'keyword': {
			pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		// https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
		'builtin': {
			pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
			lookbehind: true,
			// Alias added to make those easier to distinguish from strings.
			alias: 'class-name'
		},
		'boolean': {
			pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'file-descriptor': {
			pattern: /\B&\d\b/,
			alias: 'important'
		},
		'operator': {
			// Lots of redirections here, but not just that.
			pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
			inside: {
				'file-descriptor': {
					pattern: /^\d/,
					alias: 'important'
				}
			}
		},
		'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		'number': {
			pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
			lookbehind: true
		}
	};

	commandAfterHeredoc.inside = Prism.languages.bash;

	/* Patterns in command substitution. */
	var toBeCopied = [
		'comment',
		'function-name',
		'for-or-select',
		'assign-left',
		'parameter',
		'string',
		'environment',
		'function',
		'keyword',
		'builtin',
		'boolean',
		'file-descriptor',
		'operator',
		'punctuation',
		'number'
	];
	var inside = insideString.variable[1].inside;
	for (var i = 0; i < toBeCopied.length; i++) {
		inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
	}

	Prism.languages.sh = Prism.languages.bash;
	Prism.languages.shell = Prism.languages.bash;
}(Prism));

(function (Prism) {

	// Allow only one line break
	var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;

	/**
	 * This function is intended for the creation of the bold or italic pattern.
	 *
	 * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
	 *
	 * _Note:_ Keep in mind that this adds a capturing group.
	 *
	 * @param {string} pattern
	 * @returns {RegExp}
	 */
	function createInline(pattern) {
		pattern = pattern.replace(/<inner>/g, function () { return inner; });
		return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
	}


	var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
	var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () { return tableCell; });
	var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;


	Prism.languages.markdown = Prism.languages.extend('markup', {});
	Prism.languages.insertBefore('markdown', 'prolog', {
		'front-matter-block': {
			pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
			lookbehind: true,
			greedy: true,
			inside: {
				'punctuation': /^---|---$/,
				'front-matter': {
					pattern: /\S+(?:\s+\S+)*/,
					alias: ['yaml', 'language-yaml'],
					inside: Prism.languages.yaml
				}
			}
		},
		'blockquote': {
			// > ...
			pattern: /^>(?:[\t ]*>)*/m,
			alias: 'punctuation'
		},
		'table': {
			pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
			inside: {
				'table-data-rows': {
					pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
					lookbehind: true,
					inside: {
						'table-data': {
							pattern: RegExp(tableCell),
							inside: Prism.languages.markdown
						},
						'punctuation': /\|/
					}
				},
				'table-line': {
					pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
					lookbehind: true,
					inside: {
						'punctuation': /\||:?-{3,}:?/
					}
				},
				'table-header-row': {
					pattern: RegExp('^' + tableRow + '$'),
					inside: {
						'table-header': {
							pattern: RegExp(tableCell),
							alias: 'important',
							inside: Prism.languages.markdown
						},
						'punctuation': /\|/
					}
				}
			}
		},
		'code': [
			{
				// Prefixed by 4 spaces or 1 tab and preceded by an empty line
				pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
				lookbehind: true,
				alias: 'keyword'
			},
			{
				// ```optional language
				// code block
				// ```
				pattern: /^```[\s\S]*?^```$/m,
				greedy: true,
				inside: {
					'code-block': {
						pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
						lookbehind: true
					},
					'code-language': {
						pattern: /^(```).+/,
						lookbehind: true
					},
					'punctuation': /```/
				}
			}
		],
		'title': [
			{
				// title 1
				// =======

				// title 2
				// -------
				pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
				alias: 'important',
				inside: {
					punctuation: /==+$|--+$/
				}
			},
			{
				// # title 1
				// ###### title 6
				pattern: /(^\s*)#.+/m,
				lookbehind: true,
				alias: 'important',
				inside: {
					punctuation: /^#+|#+$/
				}
			}
		],
		'hr': {
			// ***
			// ---
			// * * *
			// -----------
			pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
			lookbehind: true,
			alias: 'punctuation'
		},
		'list': {
			// * item
			// + item
			// - item
			// 1. item
			pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
			lookbehind: true,
			alias: 'punctuation'
		},
		'url-reference': {
			// [id]: http://example.com "Optional title"
			// [id]: http://example.com 'Optional title'
			// [id]: http://example.com (Optional title)
			// [id]: <http://example.com> "Optional title"
			pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
			inside: {
				'variable': {
					pattern: /^(!?\[)[^\]]+/,
					lookbehind: true
				},
				'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
				'punctuation': /^[\[\]!:]|[<>]/
			},
			alias: 'url'
		},
		'bold': {
			// **strong**
			// __strong__

			// allow one nested instance of italic text using the same delimiter
			pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
			lookbehind: true,
			greedy: true,
			inside: {
				'content': {
					pattern: /(^..)[\s\S]+(?=..$)/,
					lookbehind: true,
					inside: {} // see below
				},
				'punctuation': /\*\*|__/
			}
		},
		'italic': {
			// *em*
			// _em_

			// allow one nested instance of bold text using the same delimiter
			pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
			lookbehind: true,
			greedy: true,
			inside: {
				'content': {
					pattern: /(^.)[\s\S]+(?=.$)/,
					lookbehind: true,
					inside: {} // see below
				},
				'punctuation': /[*_]/
			}
		},
		'strike': {
			// ~~strike through~~
			// ~strike~
			// eslint-disable-next-line regexp/strict
			pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
			lookbehind: true,
			greedy: true,
			inside: {
				'content': {
					pattern: /(^~~?)[\s\S]+(?=\1$)/,
					lookbehind: true,
					inside: {} // see below
				},
				'punctuation': /~~?/
			}
		},
		'code-snippet': {
			// `code`
			// ``code``
			pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
			lookbehind: true,
			greedy: true,
			alias: ['code', 'keyword']
		},
		'url': {
			// [example](http://example.com "Optional title")
			// [example][id]
			// [example] [id]
			pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
			lookbehind: true,
			greedy: true,
			inside: {
				'operator': /^!/,
				'content': {
					pattern: /(^\[)[^\]]+(?=\])/,
					lookbehind: true,
					inside: {} // see below
				},
				'variable': {
					pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
					lookbehind: true
				},
				'url': {
					pattern: /(^\]\()[^\s)]+/,
					lookbehind: true
				},
				'string': {
					pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
					lookbehind: true
				}
			}
		}
	});

	['url', 'bold', 'italic', 'strike'].forEach(function (token) {
		['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (inside) {
			if (token !== inside) {
				Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
			}
		});
	});

	Prism.hooks.add('after-tokenize', function (env) {
		if (env.language !== 'markdown' && env.language !== 'md') {
			return;
		}

		function walkTokens(tokens) {
			if (!tokens || typeof tokens === 'string') {
				return;
			}

			for (var i = 0, l = tokens.length; i < l; i++) {
				var token = tokens[i];

				if (token.type !== 'code') {
					walkTokens(token.content);
					continue;
				}

				/*
				 * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
				 * is optional. But the grammar is defined so that there is only one case we have to handle:
				 *
				 * token.content = [
				 *     <span class="punctuation">```</span>,
				 *     <span class="code-language">xxxx</span>,
				 *     '\n', // exactly one new lines (\r or \n or \r\n)
				 *     <span class="code-block">...</span>,
				 *     '\n', // exactly one new lines again
				 *     <span class="punctuation">```</span>
				 * ];
				 */

				var codeLang = token.content[1];
				var codeBlock = token.content[3];

				if (codeLang && codeBlock &&
					codeLang.type === 'code-language' && codeBlock.type === 'code-block' &&
					typeof codeLang.content === 'string') {

					// this might be a language that Prism does not support

					// do some replacements to support C++, C#, and F#
					var lang = codeLang.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp');
					// only use the first word
					lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
					var alias = 'language-' + lang;

					// add alias
					if (!codeBlock.alias) {
						codeBlock.alias = [alias];
					} else if (typeof codeBlock.alias === 'string') {
						codeBlock.alias = [codeBlock.alias, alias];
					} else {
						codeBlock.alias.push(alias);
					}
				}
			}
		}

		walkTokens(env.tokens);
	});

	Prism.hooks.add('wrap', function (env) {
		if (env.type !== 'code-block') {
			return;
		}

		var codeLang = '';
		for (var i = 0, l = env.classes.length; i < l; i++) {
			var cls = env.classes[i];
			var match = /language-(.+)/.exec(cls);
			if (match) {
				codeLang = match[1];
				break;
			}
		}

		var grammar = Prism.languages[codeLang];

		if (!grammar) {
			if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
				var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
				env.attributes['id'] = id;

				Prism.plugins.autoloader.loadLanguages(codeLang, function () {
					var ele = document.getElementById(id);
					if (ele) {
						ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
					}
				});
			}
		} else {
			env.content = Prism.highlight(textContent(env.content), grammar, codeLang);
		}
	});

	var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, 'gi');

	/**
	 * A list of known entity names.
	 *
	 * This will always be incomplete to save space. The current list is the one used by lowdash's unescape function.
	 *
	 * @see {@link https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/unescape.js#L2}
	 */
	var KNOWN_ENTITY_NAMES = {
		'amp': '&',
		'lt': '<',
		'gt': '>',
		'quot': '"',
	};

	// IE 11 doesn't support `String.fromCodePoint`
	var fromCodePoint = String.fromCodePoint || String.fromCharCode;

	/**
	 * Returns the text content of a given HTML source code string.
	 *
	 * @param {string} html
	 * @returns {string}
	 */
	function textContent(html) {
		// remove all tags
		var text = html.replace(tagPattern, '');

		// decode known entities
		text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
			code = code.toLowerCase();

			if (code[0] === '#') {
				var value;
				if (code[1] === 'x') {
					value = parseInt(code.slice(2), 16);
				} else {
					value = Number(code.slice(1));
				}

				return fromCodePoint(value);
			} else {
				var known = KNOWN_ENTITY_NAMES[code];
				if (known) {
					return known;
				}

				// unable to decode
				return m;
			}
		});

		return text;
	}

	Prism.languages.md = Prism.languages.markdown;

}(Prism));

function CodeBlock({ children, language = 'typescript', filename, className = '' }) {
    const codeRef = useRef(null);
    useEffect(() => {
        if (codeRef.current) {
            // Set the text content directly to avoid JSX interpretation
            codeRef.current.textContent = children;
            // Then apply syntax highlighting
            Prism$1.highlightElement(codeRef.current);
        }
    }, [children, language]);
    return (jsxs("div", { className: `code-window ${className}`, children: [filename && (jsxs("div", { className: "code-window-header flex items-center justify-between", children: [jsx("span", { children: filename }), jsx(CopyButton, { text: children })] })), jsxs("div", { className: "code-window-content relative", children: [!filename && (jsx("div", { className: "absolute top-2 right-2", children: jsx(CopyButton, { text: children }) })), jsx("pre", { children: jsx("code", { ref: codeRef, className: `language-${language}`, children: children }) })] })] }));
}

var link$1 = {exports: {}};

var _interop_require_wildcard = {};

var hasRequired_interop_require_wildcard;

function require_interop_require_wildcard () {
	if (hasRequired_interop_require_wildcard) return _interop_require_wildcard;
	hasRequired_interop_require_wildcard = 1;

	function _getRequireWildcardCache(nodeInterop) {
	    if (typeof WeakMap !== "function") return null;

	    var cacheBabelInterop = new WeakMap();
	    var cacheNodeInterop = new WeakMap();

	    return (_getRequireWildcardCache = function(nodeInterop) {
	        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
	    })(nodeInterop);
	}
	function _interop_require_wildcard$1(obj, nodeInterop) {
	    if (!nodeInterop && obj && obj.__esModule) return obj;
	    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

	    var cache = _getRequireWildcardCache(nodeInterop);

	    if (cache && cache.has(obj)) return cache.get(obj);

	    var newObj = { __proto__: null };
	    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

	    for (var key in obj) {
	        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
	            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
	            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
	            else newObj[key] = obj[key];
	        }
	    }

	    newObj.default = obj;

	    if (cache) cache.set(obj, newObj);

	    return newObj;
	}
	_interop_require_wildcard._ = _interop_require_wildcard$1;
	return _interop_require_wildcard;
}

var resolveHref = {exports: {}};

var querystring = {};

var hasRequiredQuerystring;

function requireQuerystring () {
	if (hasRequiredQuerystring) return querystring;
	hasRequiredQuerystring = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    assign: function() {
		        return assign;
		    },
		    searchParamsToUrlQuery: function() {
		        return searchParamsToUrlQuery;
		    },
		    urlQueryToSearchParams: function() {
		        return urlQueryToSearchParams;
		    }
		});
		function searchParamsToUrlQuery(searchParams) {
		    const query = {};
		    for (const [key, value] of searchParams.entries()){
		        const existing = query[key];
		        if (typeof existing === 'undefined') {
		            query[key] = value;
		        } else if (Array.isArray(existing)) {
		            existing.push(value);
		        } else {
		            query[key] = [
		                existing,
		                value
		            ];
		        }
		    }
		    return query;
		}
		function stringifyUrlQueryParam(param) {
		    if (typeof param === 'string') {
		        return param;
		    }
		    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
		        return String(param);
		    } else {
		        return '';
		    }
		}
		function urlQueryToSearchParams(query) {
		    const searchParams = new URLSearchParams();
		    for (const [key, value] of Object.entries(query)){
		        if (Array.isArray(value)) {
		            for (const item of value){
		                searchParams.append(key, stringifyUrlQueryParam(item));
		            }
		        } else {
		            searchParams.set(key, stringifyUrlQueryParam(value));
		        }
		    }
		    return searchParams;
		}
		function assign(target) {
		    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
		        searchParamsList[_key - 1] = arguments[_key];
		    }
		    for (const searchParams of searchParamsList){
		        for (const key of searchParams.keys()){
		            target.delete(key);
		        }
		        for (const [key, value] of searchParams.entries()){
		            target.append(key, value);
		        }
		    }
		    return target;
		}

		
	} (querystring));
	return querystring;
}

var formatUrl = {};

var hasRequiredFormatUrl;

function requireFormatUrl () {
	if (hasRequiredFormatUrl) return formatUrl;
	hasRequiredFormatUrl = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    formatUrl: function() {
		        return formatUrl;
		    },
		    formatWithValidation: function() {
		        return formatWithValidation;
		    },
		    urlObjectKeys: function() {
		        return urlObjectKeys;
		    }
		});
		const _interop_require_wildcard = /*@__PURE__*/ require_interop_require_wildcard();
		const _querystring = /*#__PURE__*/ _interop_require_wildcard._(requireQuerystring());
		const slashedProtocols = /https?|ftp|gopher|file/;
		function formatUrl(urlObj) {
		    let { auth, hostname } = urlObj;
		    let protocol = urlObj.protocol || '';
		    let pathname = urlObj.pathname || '';
		    let hash = urlObj.hash || '';
		    let query = urlObj.query || '';
		    let host = false;
		    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
		    if (urlObj.host) {
		        host = auth + urlObj.host;
		    } else if (hostname) {
		        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
		        if (urlObj.port) {
		            host += ':' + urlObj.port;
		        }
		    }
		    if (query && typeof query === 'object') {
		        query = String(_querystring.urlQueryToSearchParams(query));
		    }
		    let search = urlObj.search || query && "?" + query || '';
		    if (protocol && !protocol.endsWith(':')) protocol += ':';
		    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
		        host = '//' + (host || '');
		        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
		    } else if (!host) {
		        host = '';
		    }
		    if (hash && hash[0] !== '#') hash = '#' + hash;
		    if (search && search[0] !== '?') search = '?' + search;
		    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
		    search = search.replace('#', '%23');
		    return "" + protocol + host + pathname + search + hash;
		}
		const urlObjectKeys = [
		    'auth',
		    'hash',
		    'host',
		    'hostname',
		    'href',
		    'path',
		    'pathname',
		    'port',
		    'protocol',
		    'query',
		    'search',
		    'slashes'
		];
		function formatWithValidation(url) {
		    if (process.env.NODE_ENV === 'development') {
		        if (url !== null && typeof url === 'object') {
		            Object.keys(url).forEach((key)=>{
		                if (!urlObjectKeys.includes(key)) {
		                    console.warn("Unknown key passed via urlObject into url.format: " + key);
		                }
		            });
		        }
		    }
		    return formatUrl(url);
		}

		
	} (formatUrl));
	return formatUrl;
}

var omit = {};

var hasRequiredOmit;

function requireOmit () {
	if (hasRequiredOmit) return omit;
	hasRequiredOmit = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "omit", {
		    enumerable: true,
		    get: function() {
		        return omit;
		    }
		});
		function omit(object, keys) {
		    const omitted = {};
		    Object.keys(object).forEach((key)=>{
		        if (!keys.includes(key)) {
		            omitted[key] = object[key];
		        }
		    });
		    return omitted;
		}

		
	} (omit));
	return omit;
}

var utils$1 = {};

var hasRequiredUtils$1;

function requireUtils$1 () {
	if (hasRequiredUtils$1) return utils$1;
	hasRequiredUtils$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    DecodeError: function() {
		        return DecodeError;
		    },
		    MiddlewareNotFoundError: function() {
		        return MiddlewareNotFoundError;
		    },
		    MissingStaticPage: function() {
		        return MissingStaticPage;
		    },
		    NormalizeError: function() {
		        return NormalizeError;
		    },
		    PageNotFoundError: function() {
		        return PageNotFoundError;
		    },
		    SP: function() {
		        return SP;
		    },
		    ST: function() {
		        return ST;
		    },
		    WEB_VITALS: function() {
		        return WEB_VITALS;
		    },
		    execOnce: function() {
		        return execOnce;
		    },
		    getDisplayName: function() {
		        return getDisplayName;
		    },
		    getLocationOrigin: function() {
		        return getLocationOrigin;
		    },
		    getURL: function() {
		        return getURL;
		    },
		    isAbsoluteUrl: function() {
		        return isAbsoluteUrl;
		    },
		    isResSent: function() {
		        return isResSent;
		    },
		    loadGetInitialProps: function() {
		        return loadGetInitialProps;
		    },
		    normalizeRepeatedSlashes: function() {
		        return normalizeRepeatedSlashes;
		    },
		    stringifyError: function() {
		        return stringifyError;
		    }
		});
		const WEB_VITALS = [
		    'CLS',
		    'FCP',
		    'FID',
		    'INP',
		    'LCP',
		    'TTFB'
		];
		function execOnce(fn) {
		    let used = false;
		    let result;
		    return function() {
		        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
		            args[_key] = arguments[_key];
		        }
		        if (!used) {
		            used = true;
		            result = fn(...args);
		        }
		        return result;
		    };
		}
		// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
		// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
		const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
		const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
		function getLocationOrigin() {
		    const { protocol, hostname, port } = window.location;
		    return protocol + "//" + hostname + (port ? ':' + port : '');
		}
		function getURL() {
		    const { href } = window.location;
		    const origin = getLocationOrigin();
		    return href.substring(origin.length);
		}
		function getDisplayName(Component) {
		    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
		}
		function isResSent(res) {
		    return res.finished || res.headersSent;
		}
		function normalizeRepeatedSlashes(url) {
		    const urlParts = url.split('?');
		    const urlNoQuery = urlParts[0];
		    return urlNoQuery// first we replace any non-encoded backslashes with forward
		    // then normalize repeated forward slashes
		    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
		}
		async function loadGetInitialProps(App, ctx) {
		    if (process.env.NODE_ENV !== 'production') {
		        var _App_prototype;
		        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
		            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
		            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
		                value: "E394",
		                enumerable: false,
		                configurable: true
		            });
		        }
		    }
		    // when called from _app `ctx` is nested in `ctx`
		    const res = ctx.res || ctx.ctx && ctx.ctx.res;
		    if (!App.getInitialProps) {
		        if (ctx.ctx && ctx.Component) {
		            // @ts-ignore pageProps default
		            return {
		                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
		            };
		        }
		        return {};
		    }
		    const props = await App.getInitialProps(ctx);
		    if (res && isResSent(res)) {
		        return props;
		    }
		    if (!props) {
		        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
		        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
		            value: "E394",
		            enumerable: false,
		            configurable: true
		        });
		    }
		    if (process.env.NODE_ENV !== 'production') {
		        if (Object.keys(props).length === 0 && !ctx.ctx) {
		            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
		        }
		    }
		    return props;
		}
		const SP = typeof performance !== 'undefined';
		const ST = SP && [
		    'mark',
		    'measure',
		    'getEntriesByName'
		].every((method)=>typeof performance[method] === 'function');
		class DecodeError extends Error {
		}
		class NormalizeError extends Error {
		}
		class PageNotFoundError extends Error {
		    constructor(page){
		        super();
		        this.code = 'ENOENT';
		        this.name = 'PageNotFoundError';
		        this.message = "Cannot find module for page: " + page;
		    }
		}
		class MissingStaticPage extends Error {
		    constructor(page, message){
		        super();
		        this.message = "Failed to load static file for page: " + page + " " + message;
		    }
		}
		class MiddlewareNotFoundError extends Error {
		    constructor(){
		        super();
		        this.code = 'ENOENT';
		        this.message = "Cannot find the middleware module";
		    }
		}
		function stringifyError(error) {
		    return JSON.stringify({
		        message: error.message,
		        stack: error.stack
		    });
		}

		
	} (utils$1));
	return utils$1;
}

var normalizeTrailingSlash = {exports: {}};

var removeTrailingSlash = {};

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */

var hasRequiredRemoveTrailingSlash;

function requireRemoveTrailingSlash () {
	if (hasRequiredRemoveTrailingSlash) return removeTrailingSlash;
	hasRequiredRemoveTrailingSlash = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "removeTrailingSlash", {
		    enumerable: true,
		    get: function() {
		        return removeTrailingSlash;
		    }
		});
		function removeTrailingSlash(route) {
		    return route.replace(/\/$/, '') || '/';
		}

		
	} (removeTrailingSlash));
	return removeTrailingSlash;
}

var parsePath = {};

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */

var hasRequiredParsePath;

function requireParsePath () {
	if (hasRequiredParsePath) return parsePath;
	hasRequiredParsePath = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "parsePath", {
		    enumerable: true,
		    get: function() {
		        return parsePath;
		    }
		});
		function parsePath(path) {
		    const hashIndex = path.indexOf('#');
		    const queryIndex = path.indexOf('?');
		    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
		    if (hasQuery || hashIndex > -1) {
		        return {
		            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
		            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
		            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
		        };
		    }
		    return {
		        pathname: path,
		        query: '',
		        hash: ''
		    };
		}

		
	} (parsePath));
	return parsePath;
}

var hasRequiredNormalizeTrailingSlash;

function requireNormalizeTrailingSlash () {
	if (hasRequiredNormalizeTrailingSlash) return normalizeTrailingSlash.exports;
	hasRequiredNormalizeTrailingSlash = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "normalizePathTrailingSlash", {
		    enumerable: true,
		    get: function() {
		        return normalizePathTrailingSlash;
		    }
		});
		const _removetrailingslash = requireRemoveTrailingSlash();
		const _parsepath = requireParsePath();
		const normalizePathTrailingSlash = (path)=>{
		    if (!path.startsWith('/') || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
		        return path;
		    }
		    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
		    if (process.env.__NEXT_TRAILING_SLASH) {
		        if (/\.[^/]+\/?$/.test(pathname)) {
		            return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
		        } else if (pathname.endsWith('/')) {
		            return "" + pathname + query + hash;
		        } else {
		            return pathname + "/" + query + hash;
		        }
		    }
		    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (normalizeTrailingSlash, normalizeTrailingSlash.exports));
	return normalizeTrailingSlash.exports;
}

var isLocalUrl = {};

var hasBasePath = {exports: {}};

var pathHasPrefix = {};

var hasRequiredPathHasPrefix;

function requirePathHasPrefix () {
	if (hasRequiredPathHasPrefix) return pathHasPrefix;
	hasRequiredPathHasPrefix = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "pathHasPrefix", {
		    enumerable: true,
		    get: function() {
		        return pathHasPrefix;
		    }
		});
		const _parsepath = requireParsePath();
		function pathHasPrefix(path, prefix) {
		    if (typeof path !== 'string') {
		        return false;
		    }
		    const { pathname } = (0, _parsepath.parsePath)(path);
		    return pathname === prefix || pathname.startsWith(prefix + '/');
		}

		
	} (pathHasPrefix));
	return pathHasPrefix;
}

var hasRequiredHasBasePath;

function requireHasBasePath () {
	if (hasRequiredHasBasePath) return hasBasePath.exports;
	hasRequiredHasBasePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "hasBasePath", {
		    enumerable: true,
		    get: function() {
		        return hasBasePath;
		    }
		});
		const _pathhasprefix = requirePathHasPrefix();
		const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
		function hasBasePath(path) {
		    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (hasBasePath, hasBasePath.exports));
	return hasBasePath.exports;
}

var hasRequiredIsLocalUrl;

function requireIsLocalUrl () {
	if (hasRequiredIsLocalUrl) return isLocalUrl;
	hasRequiredIsLocalUrl = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isLocalURL", {
		    enumerable: true,
		    get: function() {
		        return isLocalURL;
		    }
		});
		const _utils = requireUtils$1();
		const _hasbasepath = requireHasBasePath();
		function isLocalURL(url) {
		    // prevent a hydration mismatch on href for url with anchor refs
		    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
		    try {
		        // absolute urls can be local if they are on the same origin
		        const locationOrigin = (0, _utils.getLocationOrigin)();
		        const resolved = new URL(url, locationOrigin);
		        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
		    } catch (_) {
		        return false;
		    }
		}

		
	} (isLocalUrl));
	return isLocalUrl;
}

var utils = {};

var sortedRoutes = {};

var hasRequiredSortedRoutes;

function requireSortedRoutes () {
	if (hasRequiredSortedRoutes) return sortedRoutes;
	hasRequiredSortedRoutes = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getSortedRouteObjects: function() {
		        return getSortedRouteObjects;
		    },
		    getSortedRoutes: function() {
		        return getSortedRoutes;
		    }
		});
		class UrlNode {
		    insert(urlPath) {
		        this._insert(urlPath.split('/').filter(Boolean), [], false);
		    }
		    smoosh() {
		        return this._smoosh();
		    }
		    _smoosh(prefix) {
		        if (prefix === void 0) prefix = '/';
		        const childrenPaths = [
		            ...this.children.keys()
		        ].sort();
		        if (this.slugName !== null) {
		            childrenPaths.splice(childrenPaths.indexOf('[]'), 1);
		        }
		        if (this.restSlugName !== null) {
		            childrenPaths.splice(childrenPaths.indexOf('[...]'), 1);
		        }
		        if (this.optionalRestSlugName !== null) {
		            childrenPaths.splice(childrenPaths.indexOf('[[...]]'), 1);
		        }
		        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
		                ...prev,
		                ...curr
		            ], []);
		        if (this.slugName !== null) {
		            routes.push(...this.children.get('[]')._smoosh(prefix + "[" + this.slugName + "]/"));
		        }
		        if (!this.placeholder) {
		            const r = prefix === '/' ? '/' : prefix.slice(0, -1);
		            if (this.optionalRestSlugName != null) {
		                throw Object.defineProperty(new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").'), "__NEXT_ERROR_CODE", {
		                    value: "E458",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            routes.unshift(r);
		        }
		        if (this.restSlugName !== null) {
		            routes.push(...this.children.get('[...]')._smoosh(prefix + "[..." + this.restSlugName + "]/"));
		        }
		        if (this.optionalRestSlugName !== null) {
		            routes.push(...this.children.get('[[...]]')._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
		        }
		        return routes;
		    }
		    _insert(urlPaths, slugNames, isCatchAll) {
		        if (urlPaths.length === 0) {
		            this.placeholder = false;
		            return;
		        }
		        if (isCatchAll) {
		            throw Object.defineProperty(new Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
		                value: "E392",
		                enumerable: false,
		                configurable: true
		            });
		        }
		        // The next segment in the urlPaths list
		        let nextSegment = urlPaths[0];
		        // Check if the segment matches `[something]`
		        if (nextSegment.startsWith('[') && nextSegment.endsWith(']')) {
		            // Strip `[` and `]`, leaving only `something`
		            let segmentName = nextSegment.slice(1, -1);
		            let isOptional = false;
		            if (segmentName.startsWith('[') && segmentName.endsWith(']')) {
		                // Strip optional `[` and `]`, leaving only `something`
		                segmentName = segmentName.slice(1, -1);
		                isOptional = true;
		            }
		            if (segmentName.startsWith('…')) {
		                throw Object.defineProperty(new Error("Detected a three-dot character ('…') at ('" + segmentName + "'). Did you mean ('...')?"), "__NEXT_ERROR_CODE", {
		                    value: "E147",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            if (segmentName.startsWith('...')) {
		                // Strip `...`, leaving only `something`
		                segmentName = segmentName.substring(3);
		                isCatchAll = true;
		            }
		            if (segmentName.startsWith('[') || segmentName.endsWith(']')) {
		                throw Object.defineProperty(new Error("Segment names may not start or end with extra brackets ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
		                    value: "E421",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            if (segmentName.startsWith('.')) {
		                throw Object.defineProperty(new Error("Segment names may not start with erroneous periods ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
		                    value: "E288",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            function handleSlug(previousSlug, nextSlug) {
		                if (previousSlug !== null) {
		                    // If the specific segment already has a slug but the slug is not `something`
		                    // This prevents collisions like:
		                    // pages/[post]/index.js
		                    // pages/[id]/index.js
		                    // Because currently multiple dynamic params on the same segment level are not supported
		                    if (previousSlug !== nextSlug) {
		                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
		                        throw Object.defineProperty(new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "')."), "__NEXT_ERROR_CODE", {
		                            value: "E337",
		                            enumerable: false,
		                            configurable: true
		                        });
		                    }
		                }
		                slugNames.forEach((slug)=>{
		                    if (slug === nextSlug) {
		                        throw Object.defineProperty(new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path'), "__NEXT_ERROR_CODE", {
		                            value: "E247",
		                            enumerable: false,
		                            configurable: true
		                        });
		                    }
		                    if (slug.replace(/\W/g, '') === nextSegment.replace(/\W/g, '')) {
		                        throw Object.defineProperty(new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path'), "__NEXT_ERROR_CODE", {
		                            value: "E499",
		                            enumerable: false,
		                            configurable: true
		                        });
		                    }
		                });
		                slugNames.push(nextSlug);
		            }
		            if (isCatchAll) {
		                if (isOptional) {
		                    if (this.restSlugName != null) {
		                        throw Object.defineProperty(new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).'), "__NEXT_ERROR_CODE", {
		                            value: "E299",
		                            enumerable: false,
		                            configurable: true
		                        });
		                    }
		                    handleSlug(this.optionalRestSlugName, segmentName);
		                    // slugName is kept as it can only be one particular slugName
		                    this.optionalRestSlugName = segmentName;
		                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
		                    nextSegment = '[[...]]';
		                } else {
		                    if (this.optionalRestSlugName != null) {
		                        throw Object.defineProperty(new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
		                            value: "E300",
		                            enumerable: false,
		                            configurable: true
		                        });
		                    }
		                    handleSlug(this.restSlugName, segmentName);
		                    // slugName is kept as it can only be one particular slugName
		                    this.restSlugName = segmentName;
		                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
		                    nextSegment = '[...]';
		                }
		            } else {
		                if (isOptional) {
		                    throw Object.defineProperty(new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
		                        value: "E435",
		                        enumerable: false,
		                        configurable: true
		                    });
		                }
		                handleSlug(this.slugName, segmentName);
		                // slugName is kept as it can only be one particular slugName
		                this.slugName = segmentName;
		                // nextSegment is overwritten to [] so that it can later be sorted specifically
		                nextSegment = '[]';
		            }
		        }
		        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
		        if (!this.children.has(nextSegment)) {
		            this.children.set(nextSegment, new UrlNode());
		        }
		        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
		    }
		    constructor(){
		        this.placeholder = true;
		        this.children = new Map();
		        this.slugName = null;
		        this.restSlugName = null;
		        this.optionalRestSlugName = null;
		    }
		}
		function getSortedRoutes(normalizedPages) {
		    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
		    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
		    // Only 1 dynamic segment per nesting level
		    // So in the case that is test/integration/dynamic-routing it'll be this:
		    // pages/[post]/comments.js
		    // pages/blog/[post]/comment/[id].js
		    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
		    // So in this case `UrlNode` created here has `this.slugName === 'post'`
		    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
		    // Instead what has to be passed through is the upwards path's dynamic names
		    const root = new UrlNode();
		    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
		    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
		    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
		    return root.smoosh();
		}
		function getSortedRouteObjects(objects, getter) {
		    // We're assuming here that all the pathnames are unique, that way we can
		    // sort the list and use the index as the key.
		    const indexes = {};
		    const pathnames = [];
		    for(let i = 0; i < objects.length; i++){
		        const pathname = getter(objects[i]);
		        indexes[pathname] = i;
		        pathnames[i] = pathname;
		    }
		    // Sort the pathnames.
		    const sorted = getSortedRoutes(pathnames);
		    // Map the sorted pathnames back to the original objects using the new sorted
		    // index.
		    return sorted.map((pathname)=>objects[indexes[pathname]]);
		}

		
	} (sortedRoutes));
	return sortedRoutes;
}

var isDynamic = {};

var interceptionRoutes = {};

var appPaths = {};

var ensureLeadingSlash = {};

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */

var hasRequiredEnsureLeadingSlash;

function requireEnsureLeadingSlash () {
	if (hasRequiredEnsureLeadingSlash) return ensureLeadingSlash;
	hasRequiredEnsureLeadingSlash = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "ensureLeadingSlash", {
		    enumerable: true,
		    get: function() {
		        return ensureLeadingSlash;
		    }
		});
		function ensureLeadingSlash(path) {
		    return path.startsWith('/') ? path : "/" + path;
		}

		
	} (ensureLeadingSlash));
	return ensureLeadingSlash;
}

var segment = {};

var hasRequiredSegment;

function requireSegment () {
	if (hasRequiredSegment) return segment;
	hasRequiredSegment = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    DEFAULT_SEGMENT_KEY: function() {
		        return DEFAULT_SEGMENT_KEY;
		    },
		    PAGE_SEGMENT_KEY: function() {
		        return PAGE_SEGMENT_KEY;
		    },
		    addSearchParamsIfPageSegment: function() {
		        return addSearchParamsIfPageSegment;
		    },
		    isGroupSegment: function() {
		        return isGroupSegment;
		    },
		    isParallelRouteSegment: function() {
		        return isParallelRouteSegment;
		    }
		});
		function isGroupSegment(segment) {
		    // Use array[0] for performant purpose
		    return segment[0] === '(' && segment.endsWith(')');
		}
		function isParallelRouteSegment(segment) {
		    return segment.startsWith('@') && segment !== '@children';
		}
		function addSearchParamsIfPageSegment(segment, searchParams) {
		    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
		    if (isPageSegment) {
		        const stringifiedQuery = JSON.stringify(searchParams);
		        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
		    }
		    return segment;
		}
		const PAGE_SEGMENT_KEY = '__PAGE__';
		const DEFAULT_SEGMENT_KEY = '__DEFAULT__';

		
	} (segment));
	return segment;
}

var hasRequiredAppPaths;

function requireAppPaths () {
	if (hasRequiredAppPaths) return appPaths;
	hasRequiredAppPaths = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    normalizeAppPath: function() {
		        return normalizeAppPath;
		    },
		    normalizeRscURL: function() {
		        return normalizeRscURL;
		    }
		});
		const _ensureleadingslash = requireEnsureLeadingSlash();
		const _segment = requireSegment();
		function normalizeAppPath(route) {
		    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split('/').reduce((pathname, segment, index, segments)=>{
		        // Empty segments are ignored.
		        if (!segment) {
		            return pathname;
		        }
		        // Groups are ignored.
		        if ((0, _segment.isGroupSegment)(segment)) {
		            return pathname;
		        }
		        // Parallel segments are ignored.
		        if (segment[0] === '@') {
		            return pathname;
		        }
		        // The last segment (if it's a leaf) should be ignored.
		        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
		            return pathname;
		        }
		        return pathname + "/" + segment;
		    }, ''));
		}
		function normalizeRscURL(url) {
		    return url.replace(/\.rsc($|\?)/, // $1 ensures `?` is preserved
		    '$1');
		}

		
	} (appPaths));
	return appPaths;
}

var hasRequiredInterceptionRoutes;

function requireInterceptionRoutes () {
	if (hasRequiredInterceptionRoutes) return interceptionRoutes;
	hasRequiredInterceptionRoutes = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    INTERCEPTION_ROUTE_MARKERS: function() {
		        return INTERCEPTION_ROUTE_MARKERS;
		    },
		    extractInterceptionRouteInformation: function() {
		        return extractInterceptionRouteInformation;
		    },
		    isInterceptionRouteAppPath: function() {
		        return isInterceptionRouteAppPath;
		    }
		});
		const _apppaths = requireAppPaths();
		const INTERCEPTION_ROUTE_MARKERS = [
		    '(..)(..)',
		    '(.)',
		    '(..)',
		    '(...)'
		];
		function isInterceptionRouteAppPath(path) {
		    // TODO-APP: add more serious validation
		    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
		}
		function extractInterceptionRouteInformation(path) {
		    let interceptingRoute, marker, interceptedRoute;
		    for (const segment of path.split('/')){
		        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
		        if (marker) {
		            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
		            break;
		        }
		    }
		    if (!interceptingRoute || !marker || !interceptedRoute) {
		        throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"), "__NEXT_ERROR_CODE", {
		            value: "E269",
		            enumerable: false,
		            configurable: true
		        });
		    }
		    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
		    ;
		    switch(marker){
		        case '(.)':
		            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
		            if (interceptingRoute === '/') {
		                interceptedRoute = "/" + interceptedRoute;
		            } else {
		                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
		            }
		            break;
		        case '(..)':
		            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
		            if (interceptingRoute === '/') {
		                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..) marker at the root level, use (.) instead."), "__NEXT_ERROR_CODE", {
		                    value: "E207",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
		            break;
		        case '(...)':
		            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
		            interceptedRoute = '/' + interceptedRoute;
		            break;
		        case '(..)(..)':
		            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
		            const splitInterceptingRoute = interceptingRoute.split('/');
		            if (splitInterceptingRoute.length <= 2) {
		                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..)(..) marker at the root level or one level up."), "__NEXT_ERROR_CODE", {
		                    value: "E486",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
		            break;
		        default:
		            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
		                value: "E112",
		                enumerable: false,
		                configurable: true
		            });
		    }
		    return {
		        interceptingRoute,
		        interceptedRoute
		    };
		}

		
	} (interceptionRoutes));
	return interceptionRoutes;
}

var hasRequiredIsDynamic;

function requireIsDynamic () {
	if (hasRequiredIsDynamic) return isDynamic;
	hasRequiredIsDynamic = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isDynamicRoute", {
		    enumerable: true,
		    get: function() {
		        return isDynamicRoute;
		    }
		});
		const _interceptionroutes = requireInterceptionRoutes();
		// Identify /.*[param].*/ in route string
		const TEST_ROUTE = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
		// Identify /[param]/ in route string
		const TEST_STRICT_ROUTE = /\/\[[^/]+\](?=\/|$)/;
		function isDynamicRoute(route, strict) {
		    if (strict === void 0) strict = true;
		    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
		        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
		    }
		    if (strict) {
		        return TEST_STRICT_ROUTE.test(route);
		    }
		    return TEST_ROUTE.test(route);
		}

		
	} (isDynamic));
	return isDynamic;
}

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getSortedRouteObjects: function() {
		        return _sortedroutes.getSortedRouteObjects;
		    },
		    getSortedRoutes: function() {
		        return _sortedroutes.getSortedRoutes;
		    },
		    isDynamicRoute: function() {
		        return _isdynamic.isDynamicRoute;
		    }
		});
		const _sortedroutes = requireSortedRoutes();
		const _isdynamic = requireIsDynamic();

		
	} (utils));
	return utils;
}

var interpolateAs = {};

var routeMatcher = {};

var hasRequiredRouteMatcher;

function requireRouteMatcher () {
	if (hasRequiredRouteMatcher) return routeMatcher;
	hasRequiredRouteMatcher = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getRouteMatcher", {
		    enumerable: true,
		    get: function() {
		        return getRouteMatcher;
		    }
		});
		const _utils = requireUtils$1();
		function getRouteMatcher(param) {
		    let { re, groups } = param;
		    return (pathname)=>{
		        const routeMatch = re.exec(pathname);
		        if (!routeMatch) return false;
		        const decode = (param)=>{
		            try {
		                return decodeURIComponent(param);
		            } catch (e) {
		                throw Object.defineProperty(new _utils.DecodeError('failed to decode param'), "__NEXT_ERROR_CODE", {
		                    value: "E528",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		        };
		        const params = {};
		        for (const [key, group] of Object.entries(groups)){
		            const match = routeMatch[group.pos];
		            if (match !== undefined) {
		                if (group.repeat) {
		                    params[key] = match.split('/').map((entry)=>decode(entry));
		                } else {
		                    params[key] = decode(match);
		                }
		            }
		        }
		        return params;
		    };
		}

		
	} (routeMatcher));
	return routeMatcher;
}

var routeRegex = {};

var constants = {};

var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    ACTION_SUFFIX: function() {
		        return ACTION_SUFFIX;
		    },
		    APP_DIR_ALIAS: function() {
		        return APP_DIR_ALIAS;
		    },
		    CACHE_ONE_YEAR: function() {
		        return CACHE_ONE_YEAR;
		    },
		    DOT_NEXT_ALIAS: function() {
		        return DOT_NEXT_ALIAS;
		    },
		    ESLINT_DEFAULT_DIRS: function() {
		        return ESLINT_DEFAULT_DIRS;
		    },
		    GSP_NO_RETURNED_VALUE: function() {
		        return GSP_NO_RETURNED_VALUE;
		    },
		    GSSP_COMPONENT_MEMBER_ERROR: function() {
		        return GSSP_COMPONENT_MEMBER_ERROR;
		    },
		    GSSP_NO_RETURNED_VALUE: function() {
		        return GSSP_NO_RETURNED_VALUE;
		    },
		    INFINITE_CACHE: function() {
		        return INFINITE_CACHE;
		    },
		    INSTRUMENTATION_HOOK_FILENAME: function() {
		        return INSTRUMENTATION_HOOK_FILENAME;
		    },
		    MATCHED_PATH_HEADER: function() {
		        return MATCHED_PATH_HEADER;
		    },
		    MIDDLEWARE_FILENAME: function() {
		        return MIDDLEWARE_FILENAME;
		    },
		    MIDDLEWARE_LOCATION_REGEXP: function() {
		        return MIDDLEWARE_LOCATION_REGEXP;
		    },
		    NEXT_BODY_SUFFIX: function() {
		        return NEXT_BODY_SUFFIX;
		    },
		    NEXT_CACHE_IMPLICIT_TAG_ID: function() {
		        return NEXT_CACHE_IMPLICIT_TAG_ID;
		    },
		    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
		        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
		    },
		    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
		        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
		    },
		    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
		        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
		    },
		    NEXT_CACHE_TAGS_HEADER: function() {
		        return NEXT_CACHE_TAGS_HEADER;
		    },
		    NEXT_CACHE_TAG_MAX_ITEMS: function() {
		        return NEXT_CACHE_TAG_MAX_ITEMS;
		    },
		    NEXT_CACHE_TAG_MAX_LENGTH: function() {
		        return NEXT_CACHE_TAG_MAX_LENGTH;
		    },
		    NEXT_DATA_SUFFIX: function() {
		        return NEXT_DATA_SUFFIX;
		    },
		    NEXT_INTERCEPTION_MARKER_PREFIX: function() {
		        return NEXT_INTERCEPTION_MARKER_PREFIX;
		    },
		    NEXT_META_SUFFIX: function() {
		        return NEXT_META_SUFFIX;
		    },
		    NEXT_QUERY_PARAM_PREFIX: function() {
		        return NEXT_QUERY_PARAM_PREFIX;
		    },
		    NEXT_RESUME_HEADER: function() {
		        return NEXT_RESUME_HEADER;
		    },
		    NON_STANDARD_NODE_ENV: function() {
		        return NON_STANDARD_NODE_ENV;
		    },
		    PAGES_DIR_ALIAS: function() {
		        return PAGES_DIR_ALIAS;
		    },
		    PRERENDER_REVALIDATE_HEADER: function() {
		        return PRERENDER_REVALIDATE_HEADER;
		    },
		    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
		        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
		    },
		    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
		        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
		    },
		    ROOT_DIR_ALIAS: function() {
		        return ROOT_DIR_ALIAS;
		    },
		    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
		        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
		    },
		    RSC_ACTION_ENCRYPTION_ALIAS: function() {
		        return RSC_ACTION_ENCRYPTION_ALIAS;
		    },
		    RSC_ACTION_PROXY_ALIAS: function() {
		        return RSC_ACTION_PROXY_ALIAS;
		    },
		    RSC_ACTION_VALIDATE_ALIAS: function() {
		        return RSC_ACTION_VALIDATE_ALIAS;
		    },
		    RSC_CACHE_WRAPPER_ALIAS: function() {
		        return RSC_CACHE_WRAPPER_ALIAS;
		    },
		    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
		        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
		    },
		    RSC_MOD_REF_PROXY_ALIAS: function() {
		        return RSC_MOD_REF_PROXY_ALIAS;
		    },
		    RSC_PREFETCH_SUFFIX: function() {
		        return RSC_PREFETCH_SUFFIX;
		    },
		    RSC_SEGMENTS_DIR_SUFFIX: function() {
		        return RSC_SEGMENTS_DIR_SUFFIX;
		    },
		    RSC_SEGMENT_SUFFIX: function() {
		        return RSC_SEGMENT_SUFFIX;
		    },
		    RSC_SUFFIX: function() {
		        return RSC_SUFFIX;
		    },
		    SERVER_PROPS_EXPORT_ERROR: function() {
		        return SERVER_PROPS_EXPORT_ERROR;
		    },
		    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
		        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
		    },
		    SERVER_PROPS_SSG_CONFLICT: function() {
		        return SERVER_PROPS_SSG_CONFLICT;
		    },
		    SERVER_RUNTIME: function() {
		        return SERVER_RUNTIME;
		    },
		    SSG_FALLBACK_EXPORT_ERROR: function() {
		        return SSG_FALLBACK_EXPORT_ERROR;
		    },
		    SSG_GET_INITIAL_PROPS_CONFLICT: function() {
		        return SSG_GET_INITIAL_PROPS_CONFLICT;
		    },
		    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
		        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
		    },
		    UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
		        return UNSTABLE_REVALIDATE_RENAME_ERROR;
		    },
		    WEBPACK_LAYERS: function() {
		        return WEBPACK_LAYERS;
		    },
		    WEBPACK_RESOURCE_QUERIES: function() {
		        return WEBPACK_RESOURCE_QUERIES;
		    }
		});
		const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
		const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
		const MATCHED_PATH_HEADER = 'x-matched-path';
		const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
		const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
		const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
		const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
		const RSC_SEGMENT_SUFFIX = '.segment.rsc';
		const RSC_SUFFIX = '.rsc';
		const ACTION_SUFFIX = '.action';
		const NEXT_DATA_SUFFIX = '.json';
		const NEXT_META_SUFFIX = '.meta';
		const NEXT_BODY_SUFFIX = '.body';
		const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
		const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
		const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
		const NEXT_RESUME_HEADER = 'next-resume';
		const NEXT_CACHE_TAG_MAX_ITEMS = 128;
		const NEXT_CACHE_TAG_MAX_LENGTH = 256;
		const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
		const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
		const CACHE_ONE_YEAR = 31536000;
		const INFINITE_CACHE = 0xfffffffe;
		const MIDDLEWARE_FILENAME = 'middleware';
		const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
		const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
		const PAGES_DIR_ALIAS = 'private-next-pages';
		const DOT_NEXT_ALIAS = 'private-dot-next';
		const ROOT_DIR_ALIAS = 'private-next-root-dir';
		const APP_DIR_ALIAS = 'private-next-app-dir';
		const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
		const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
		const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
		const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
		const RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = 'private-next-rsc-track-dynamic-import';
		const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
		const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
		const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
		const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
		const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
		const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
		const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
		const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
		const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
		const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
		const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
		const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
		const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
		const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
		const ESLINT_DEFAULT_DIRS = [
		    'app',
		    'pages',
		    'components',
		    'lib',
		    'src'
		];
		const SERVER_RUNTIME = {
		    edge: 'edge',
		    experimentalEdge: 'experimental-edge',
		    nodejs: 'nodejs'
		};
		/**
		 * The names of the webpack layers. These layers are the primitives for the
		 * webpack chunks.
		 */ const WEBPACK_LAYERS_NAMES = {
		    /**
		   * The layer for the shared code between the client and server bundles.
		   */ shared: 'shared',
		    /**
		   * The layer for server-only runtime and picking up `react-server` export conditions.
		   * Including app router RSC pages and app router custom routes and metadata routes.
		   */ reactServerComponents: 'rsc',
		    /**
		   * Server Side Rendering layer for app (ssr).
		   */ serverSideRendering: 'ssr',
		    /**
		   * The browser client bundle layer for actions.
		   */ actionBrowser: 'action-browser',
		    /**
		   * The Node.js bundle layer for the API routes.
		   */ apiNode: 'api-node',
		    /**
		   * The Edge Lite bundle layer for the API routes.
		   */ apiEdge: 'api-edge',
		    /**
		   * The layer for the middleware code.
		   */ middleware: 'middleware',
		    /**
		   * The layer for the instrumentation hooks.
		   */ instrument: 'instrument',
		    /**
		   * The layer for assets on the edge.
		   */ edgeAsset: 'edge-asset',
		    /**
		   * The browser client bundle layer for App directory.
		   */ appPagesBrowser: 'app-pages-browser',
		    /**
		   * The browser client bundle layer for Pages directory.
		   */ pagesDirBrowser: 'pages-dir-browser',
		    /**
		   * The Edge Lite bundle layer for Pages directory.
		   */ pagesDirEdge: 'pages-dir-edge',
		    /**
		   * The Node.js bundle layer for Pages directory.
		   */ pagesDirNode: 'pages-dir-node'
		};
		const WEBPACK_LAYERS = {
		    ...WEBPACK_LAYERS_NAMES,
		    GROUP: {
		        builtinReact: [
		            WEBPACK_LAYERS_NAMES.reactServerComponents,
		            WEBPACK_LAYERS_NAMES.actionBrowser
		        ],
		        serverOnly: [
		            WEBPACK_LAYERS_NAMES.reactServerComponents,
		            WEBPACK_LAYERS_NAMES.actionBrowser,
		            WEBPACK_LAYERS_NAMES.instrument,
		            WEBPACK_LAYERS_NAMES.middleware
		        ],
		        neutralTarget: [
		            // pages api
		            WEBPACK_LAYERS_NAMES.apiNode,
		            WEBPACK_LAYERS_NAMES.apiEdge
		        ],
		        clientOnly: [
		            WEBPACK_LAYERS_NAMES.serverSideRendering,
		            WEBPACK_LAYERS_NAMES.appPagesBrowser
		        ],
		        bundled: [
		            WEBPACK_LAYERS_NAMES.reactServerComponents,
		            WEBPACK_LAYERS_NAMES.actionBrowser,
		            WEBPACK_LAYERS_NAMES.serverSideRendering,
		            WEBPACK_LAYERS_NAMES.appPagesBrowser,
		            WEBPACK_LAYERS_NAMES.shared,
		            WEBPACK_LAYERS_NAMES.instrument,
		            WEBPACK_LAYERS_NAMES.middleware
		        ],
		        appPages: [
		            // app router pages and layouts
		            WEBPACK_LAYERS_NAMES.reactServerComponents,
		            WEBPACK_LAYERS_NAMES.serverSideRendering,
		            WEBPACK_LAYERS_NAMES.appPagesBrowser,
		            WEBPACK_LAYERS_NAMES.actionBrowser
		        ]
		    }
		};
		const WEBPACK_RESOURCE_QUERIES = {
		    edgeSSREntry: '__next_edge_ssr_entry__',
		    metadata: '__next_metadata__',
		    metadataRoute: '__next_metadata_route__',
		    metadataImageMeta: '__next_metadata_image_meta__'
		};

		
	} (constants));
	return constants;
}

var escapeRegexp = {};

var hasRequiredEscapeRegexp;

function requireEscapeRegexp () {
	if (hasRequiredEscapeRegexp) return escapeRegexp;
	hasRequiredEscapeRegexp = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "escapeStringRegexp", {
		    enumerable: true,
		    get: function() {
		        return escapeStringRegexp;
		    }
		});
		const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
		const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
		function escapeStringRegexp(str) {
		    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
		    if (reHasRegExp.test(str)) {
		        return str.replace(reReplaceRegExp, '\\$&');
		    }
		    return str;
		}

		
	} (escapeRegexp));
	return escapeRegexp;
}

var hasRequiredRouteRegex;

function requireRouteRegex () {
	if (hasRequiredRouteRegex) return routeRegex;
	hasRequiredRouteRegex = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getNamedMiddlewareRegex: function() {
		        return getNamedMiddlewareRegex;
		    },
		    getNamedRouteRegex: function() {
		        return getNamedRouteRegex;
		    },
		    getRouteRegex: function() {
		        return getRouteRegex;
		    },
		    parseParameter: function() {
		        return parseParameter;
		    }
		});
		const _constants = requireConstants();
		const _interceptionroutes = requireInterceptionRoutes();
		const _escaperegexp = requireEscapeRegexp();
		const _removetrailingslash = requireRemoveTrailingSlash();
		/**
		 * Regular expression pattern used to match route parameters.
		 * Matches both single parameters and parameter groups.
		 * Examples:
		 *   - `[[...slug]]` matches parameter group with key 'slug', repeat: true, optional: true
		 *   - `[...slug]` matches parameter group with key 'slug', repeat: true, optional: false
		 *   - `[[foo]]` matches parameter with key 'foo', repeat: false, optional: true
		 *   - `[bar]` matches parameter with key 'bar', repeat: false, optional: false
		 */ const PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
		function parseParameter(param) {
		    const match = param.match(PARAMETER_PATTERN);
		    if (!match) {
		        return parseMatchedParameter(param);
		    }
		    return parseMatchedParameter(match[2]);
		}
		/**
		 * Parses a matched parameter from the PARAMETER_PATTERN regex to a data structure that can be used
		 * to generate the parametrized route.
		 * Examples:
		 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
		 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
		 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
		 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
		 * @param param - The matched parameter to parse.
		 * @returns The parsed parameter as a data structure.
		 */ function parseMatchedParameter(param) {
		    const optional = param.startsWith('[') && param.endsWith(']');
		    if (optional) {
		        param = param.slice(1, -1);
		    }
		    const repeat = param.startsWith('...');
		    if (repeat) {
		        param = param.slice(3);
		    }
		    return {
		        key: param,
		        repeat,
		        optional
		    };
		}
		function getParametrizedRoute(route, includeSuffix, includePrefix) {
		    const groups = {};
		    let groupIndex = 1;
		    const segments = [];
		    for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split('/')){
		        const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
		        const paramMatches = segment.match(PARAMETER_PATTERN) // Check for parameters
		        ;
		        if (markerMatch && paramMatches && paramMatches[2]) {
		            const { key, optional, repeat } = parseMatchedParameter(paramMatches[2]);
		            groups[key] = {
		                pos: groupIndex++,
		                repeat,
		                optional
		            };
		            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)");
		        } else if (paramMatches && paramMatches[2]) {
		            const { key, repeat, optional } = parseMatchedParameter(paramMatches[2]);
		            groups[key] = {
		                pos: groupIndex++,
		                repeat,
		                optional
		            };
		            if (includePrefix && paramMatches[1]) {
		                segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
		            }
		            let s = repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
		            // Remove the leading slash if includePrefix already added it.
		            if (includePrefix && paramMatches[1]) {
		                s = s.substring(1);
		            }
		            segments.push(s);
		        } else {
		            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
		        }
		        // If there's a suffix, add it to the segments if it's enabled.
		        if (includeSuffix && paramMatches && paramMatches[3]) {
		            segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
		        }
		    }
		    return {
		        parameterizedRoute: segments.join(''),
		        groups
		    };
		}
		function getRouteRegex(normalizedRoute, param) {
		    let { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = param === void 0 ? {} : param;
		    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
		    let re = parameterizedRoute;
		    if (!excludeOptionalTrailingSlash) {
		        re += '(?:/)?';
		    }
		    return {
		        re: new RegExp("^" + re + "$"),
		        groups: groups
		    };
		}
		/**
		 * Builds a function to generate a minimal routeKey using only a-z and minimal
		 * number of characters.
		 */ function buildGetSafeRouteKey() {
		    let i = 0;
		    return ()=>{
		        let routeKey = '';
		        let j = ++i;
		        while(j > 0){
		            routeKey += String.fromCharCode(97 + (j - 1) % 26);
		            j = Math.floor((j - 1) / 26);
		        }
		        return routeKey;
		    };
		}
		function getSafeKeyFromSegment(param) {
		    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys } = param;
		    const { key, optional, repeat } = parseMatchedParameter(segment);
		    // replace any non-word characters since they can break
		    // the named regex
		    let cleanedKey = key.replace(/\W/g, '');
		    if (keyPrefix) {
		        cleanedKey = "" + keyPrefix + cleanedKey;
		    }
		    let invalidKey = false;
		    // check if the key is still invalid and fallback to using a known
		    // safe key
		    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
		        invalidKey = true;
		    }
		    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
		        invalidKey = true;
		    }
		    if (invalidKey) {
		        cleanedKey = getSafeRouteKey();
		    }
		    const duplicateKey = cleanedKey in routeKeys;
		    if (keyPrefix) {
		        routeKeys[cleanedKey] = "" + keyPrefix + key;
		    } else {
		        routeKeys[cleanedKey] = key;
		    }
		    // if the segment has an interception marker, make sure that's part of the regex pattern
		    // this is to ensure that the route with the interception marker doesn't incorrectly match
		    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
		    const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : '';
		    let pattern;
		    if (duplicateKey && backreferenceDuplicateKeys) {
		        // Use a backreference to the key to ensure that the key is the same value
		        // in each of the placeholders.
		        pattern = "\\k<" + cleanedKey + ">";
		    } else if (repeat) {
		        pattern = "(?<" + cleanedKey + ">.+?)";
		    } else {
		        pattern = "(?<" + cleanedKey + ">[^/]+?)";
		    }
		    return optional ? "(?:/" + interceptionPrefix + pattern + ")?" : "/" + interceptionPrefix + pattern;
		}
		function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys) {
		    const getSafeRouteKey = buildGetSafeRouteKey();
		    const routeKeys = {};
		    const segments = [];
		    for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split('/')){
		        const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
		        const paramMatches = segment.match(PARAMETER_PATTERN) // Check for parameters
		        ;
		        if (hasInterceptionMarker && paramMatches && paramMatches[2]) {
		            // If there's an interception marker, add it to the segments.
		            segments.push(getSafeKeyFromSegment({
		                getSafeRouteKey,
		                interceptionMarker: paramMatches[1],
		                segment: paramMatches[2],
		                routeKeys,
		                keyPrefix: prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : undefined,
		                backreferenceDuplicateKeys
		            }));
		        } else if (paramMatches && paramMatches[2]) {
		            // If there's a prefix, add it to the segments if it's enabled.
		            if (includePrefix && paramMatches[1]) {
		                segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
		            }
		            let s = getSafeKeyFromSegment({
		                getSafeRouteKey,
		                segment: paramMatches[2],
		                routeKeys,
		                keyPrefix: prefixRouteKeys ? _constants.NEXT_QUERY_PARAM_PREFIX : undefined,
		                backreferenceDuplicateKeys
		            });
		            // Remove the leading slash if includePrefix already added it.
		            if (includePrefix && paramMatches[1]) {
		                s = s.substring(1);
		            }
		            segments.push(s);
		        } else {
		            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
		        }
		        // If there's a suffix, add it to the segments if it's enabled.
		        if (includeSuffix && paramMatches && paramMatches[3]) {
		            segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
		        }
		    }
		    return {
		        namedParameterizedRoute: segments.join(''),
		        routeKeys
		    };
		}
		function getNamedRouteRegex(normalizedRoute, options) {
		    var _options_includeSuffix, _options_includePrefix, _options_backreferenceDuplicateKeys;
		    const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, (_options_includeSuffix = options.includeSuffix) != null ? _options_includeSuffix : false, (_options_includePrefix = options.includePrefix) != null ? _options_includePrefix : false, (_options_backreferenceDuplicateKeys = options.backreferenceDuplicateKeys) != null ? _options_backreferenceDuplicateKeys : false);
		    let namedRegex = result.namedParameterizedRoute;
		    if (!options.excludeOptionalTrailingSlash) {
		        namedRegex += '(?:/)?';
		    }
		    return {
		        ...getRouteRegex(normalizedRoute, options),
		        namedRegex: "^" + namedRegex + "$",
		        routeKeys: result.routeKeys
		    };
		}
		function getNamedMiddlewareRegex(normalizedRoute, options) {
		    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
		    const { catchAll = true } = options;
		    if (parameterizedRoute === '/') {
		        let catchAllRegex = catchAll ? '.*' : '';
		        return {
		            namedRegex: "^/" + catchAllRegex + "$"
		        };
		    }
		    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false);
		    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
		    return {
		        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
		    };
		}

		
	} (routeRegex));
	return routeRegex;
}

var hasRequiredInterpolateAs;

function requireInterpolateAs () {
	if (hasRequiredInterpolateAs) return interpolateAs;
	hasRequiredInterpolateAs = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "interpolateAs", {
		    enumerable: true,
		    get: function() {
		        return interpolateAs;
		    }
		});
		const _routematcher = requireRouteMatcher();
		const _routeregex = requireRouteRegex();
		function interpolateAs(route, asPathname, query) {
		    let interpolatedRoute = '';
		    const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
		    const dynamicGroups = dynamicRegex.groups;
		    const dynamicMatches = // Try to match the dynamic route against the asPath
		    (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
		    // TODO: should this take priority; also need to change in the router.
		    query;
		    interpolatedRoute = route;
		    const params = Object.keys(dynamicGroups);
		    if (!params.every((param)=>{
		        let value = dynamicMatches[param] || '';
		        const { repeat, optional } = dynamicGroups[param];
		        // support single-level catch-all
		        // TODO: more robust handling for user-error (passing `/`)
		        let replaced = "[" + (repeat ? '...' : '') + param + "]";
		        if (optional) {
		            replaced = (!value ? '/' : '') + "[" + replaced + "]";
		        }
		        if (repeat && !Array.isArray(value)) value = [
		            value
		        ];
		        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
		        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// these values should be fully encoded instead of just
		        // path delimiter escaped since they are being inserted
		        // into the URL and we expect URL encoded segments
		        // when parsing dynamic route params
		        (segment)=>encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
		    })) {
		        interpolatedRoute = '' // did not satisfy all requirements
		        ;
		    // n.b. We ignore this error because we handle warning for this case in
		    // development in the `<Link>` component directly.
		    }
		    return {
		        params,
		        result: interpolatedRoute
		    };
		}

		
	} (interpolateAs));
	return interpolateAs;
}

var hasRequiredResolveHref;

function requireResolveHref () {
	if (hasRequiredResolveHref) return resolveHref.exports;
	hasRequiredResolveHref = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "resolveHref", {
		    enumerable: true,
		    get: function() {
		        return resolveHref;
		    }
		});
		const _querystring = requireQuerystring();
		const _formaturl = requireFormatUrl();
		const _omit = requireOmit();
		const _utils = requireUtils$1();
		const _normalizetrailingslash = requireNormalizeTrailingSlash();
		const _islocalurl = requireIsLocalUrl();
		const _utils1 = requireUtils();
		const _interpolateas = requireInterpolateAs();
		function resolveHref(router, href, resolveAs) {
		    // we use a dummy base url for relative urls
		    let base;
		    let urlAsString = typeof href === 'string' ? href : (0, _formaturl.formatWithValidation)(href);
		    // repeated slashes and backslashes in the URL are considered
		    // invalid and will never match a Next.js page/file
		    // https://www.rfc-editor.org/rfc/rfc3986.html#section-3.1
		    const urlProtoMatch = urlAsString.match(/^[a-z][a-z0-9+.-]*:\/\//i);
		    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
		    const urlParts = urlAsStringNoProto.split('?', 1);
		    if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
		        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
		        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
		        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
		    }
		    // Return because it cannot be routed by the Next.js router
		    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
		        return resolveAs ? [
		            urlAsString
		        ] : urlAsString;
		    }
		    try {
		        base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
		    } catch (_) {
		        // fallback to / for invalid asPath values e.g. //
		        base = new URL('/', 'http://n');
		    }
		    try {
		        const finalUrl = new URL(urlAsString, base);
		        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
		        let interpolatedAs = '';
		        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
		            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
		            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
		            if (result) {
		                interpolatedAs = (0, _formaturl.formatWithValidation)({
		                    pathname: result,
		                    hash: finalUrl.hash,
		                    query: (0, _omit.omit)(query, params)
		                });
		            }
		        }
		        // if the origin didn't change, it means we received a relative href
		        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
		        return resolveAs ? [
		            resolvedHref,
		            interpolatedAs || resolvedHref
		        ] : resolvedHref;
		    } catch (_) {
		        return resolveAs ? [
		            urlAsString
		        ] : urlAsString;
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (resolveHref, resolveHref.exports));
	return resolveHref.exports;
}

var addLocale$1 = {exports: {}};

var addLocale = {};

var addPathPrefix = {};

var hasRequiredAddPathPrefix;

function requireAddPathPrefix () {
	if (hasRequiredAddPathPrefix) return addPathPrefix;
	hasRequiredAddPathPrefix = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addPathPrefix", {
		    enumerable: true,
		    get: function() {
		        return addPathPrefix;
		    }
		});
		const _parsepath = requireParsePath();
		function addPathPrefix(path, prefix) {
		    if (!path.startsWith('/') || !prefix) {
		        return path;
		    }
		    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
		    return "" + prefix + pathname + query + hash;
		}

		
	} (addPathPrefix));
	return addPathPrefix;
}

var hasRequiredAddLocale$1;

function requireAddLocale$1 () {
	if (hasRequiredAddLocale$1) return addLocale;
	hasRequiredAddLocale$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addLocale", {
		    enumerable: true,
		    get: function() {
		        return addLocale;
		    }
		});
		const _addpathprefix = requireAddPathPrefix();
		const _pathhasprefix = requirePathHasPrefix();
		function addLocale(path, locale, defaultLocale, ignorePrefix) {
		    // If no locale was given or the locale is the default locale, we don't need
		    // to prefix the path.
		    if (!locale || locale === defaultLocale) return path;
		    const lower = path.toLowerCase();
		    // If the path is an API path or the path already has the locale prefix, we
		    // don't need to prefix the path.
		    if (!ignorePrefix) {
		        if ((0, _pathhasprefix.pathHasPrefix)(lower, '/api')) return path;
		        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
		    }
		    // Add the locale prefix to the path.
		    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
		}

		
	} (addLocale));
	return addLocale;
}

var hasRequiredAddLocale;

function requireAddLocale () {
	if (hasRequiredAddLocale) return addLocale$1.exports;
	hasRequiredAddLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addLocale", {
		    enumerable: true,
		    get: function() {
		        return addLocale;
		    }
		});
		const _normalizetrailingslash = requireNormalizeTrailingSlash();
		const addLocale = function(path) {
		    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
		        args[_key - 1] = arguments[_key];
		    }
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        return (0, _normalizetrailingslash.normalizePathTrailingSlash)(requireAddLocale$1().addLocale(path, ...args));
		    }
		    return path;
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (addLocale$1, addLocale$1.exports));
	return addLocale$1.exports;
}

var routerContext_sharedRuntime = {};

var _interop_require_default = {};

var hasRequired_interop_require_default;

function require_interop_require_default () {
	if (hasRequired_interop_require_default) return _interop_require_default;
	hasRequired_interop_require_default = 1;

	function _interop_require_default$1(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	_interop_require_default._ = _interop_require_default$1;
	return _interop_require_default;
}

var hasRequiredRouterContext_sharedRuntime;

function requireRouterContext_sharedRuntime () {
	if (hasRequiredRouterContext_sharedRuntime) return routerContext_sharedRuntime;
	hasRequiredRouterContext_sharedRuntime = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "RouterContext", {
		    enumerable: true,
		    get: function() {
		        return RouterContext;
		    }
		});
		const _interop_require_default = /*@__PURE__*/ require_interop_require_default();
		const _react = /*#__PURE__*/ _interop_require_default._(require$$0);
		const RouterContext = _react.default.createContext(null);
		if (process.env.NODE_ENV !== 'production') {
		    RouterContext.displayName = 'RouterContext';
		}

		
	} (routerContext_sharedRuntime));
	return routerContext_sharedRuntime;
}

var useIntersection = {exports: {}};

var requestIdleCallback = {exports: {}};

var hasRequiredRequestIdleCallback;

function requireRequestIdleCallback () {
	if (hasRequiredRequestIdleCallback) return requestIdleCallback.exports;
	hasRequiredRequestIdleCallback = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    cancelIdleCallback: function() {
		        return cancelIdleCallback;
		    },
		    requestIdleCallback: function() {
		        return requestIdleCallback;
		    }
		});
		const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
		    let start = Date.now();
		    return self.setTimeout(function() {
		        cb({
		            didTimeout: false,
		            timeRemaining: function() {
		                return Math.max(0, 50 - (Date.now() - start));
		            }
		        });
		    }, 1);
		};
		const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
		    return clearTimeout(id);
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (requestIdleCallback, requestIdleCallback.exports));
	return requestIdleCallback.exports;
}

var hasRequiredUseIntersection;

function requireUseIntersection () {
	if (hasRequiredUseIntersection) return useIntersection.exports;
	hasRequiredUseIntersection = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "useIntersection", {
		    enumerable: true,
		    get: function() {
		        return useIntersection;
		    }
		});
		const _react = require$$0;
		const _requestidlecallback = requireRequestIdleCallback();
		const hasIntersectionObserver = typeof IntersectionObserver === 'function';
		const observers = new Map();
		const idList = [];
		function createObserver(options) {
		    const id = {
		        root: options.root || null,
		        margin: options.rootMargin || ''
		    };
		    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
		    let instance;
		    if (existing) {
		        instance = observers.get(existing);
		        if (instance) {
		            return instance;
		        }
		    }
		    const elements = new Map();
		    const observer = new IntersectionObserver((entries)=>{
		        entries.forEach((entry)=>{
		            const callback = elements.get(entry.target);
		            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
		            if (callback && isVisible) {
		                callback(isVisible);
		            }
		        });
		    }, options);
		    instance = {
		        id,
		        observer,
		        elements
		    };
		    idList.push(id);
		    observers.set(id, instance);
		    return instance;
		}
		function observe(element, callback, options) {
		    const { id, observer, elements } = createObserver(options);
		    elements.set(element, callback);
		    observer.observe(element);
		    return function unobserve() {
		        elements.delete(element);
		        observer.unobserve(element);
		        // Destroy observer when there's nothing left to watch:
		        if (elements.size === 0) {
		            observer.disconnect();
		            observers.delete(id);
		            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
		            if (index > -1) {
		                idList.splice(index, 1);
		            }
		        }
		    };
		}
		function useIntersection(param) {
		    let { rootRef, rootMargin, disabled } = param;
		    const isDisabled = disabled || !hasIntersectionObserver;
		    const [visible, setVisible] = (0, _react.useState)(false);
		    const elementRef = (0, _react.useRef)(null);
		    const setElement = (0, _react.useCallback)((element)=>{
		        elementRef.current = element;
		    }, []);
		    (0, _react.useEffect)(()=>{
		        if (hasIntersectionObserver) {
		            if (isDisabled || visible) return;
		            const element = elementRef.current;
		            if (element && element.tagName) {
		                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
		                    root: rootRef == null ? void 0 : rootRef.current,
		                    rootMargin
		                });
		                return unobserve;
		            }
		        } else {
		            if (!visible) {
		                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
		                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
		            }
		        }
		    // eslint-disable-next-line react-hooks/exhaustive-deps
		    }, [
		        isDisabled,
		        rootMargin,
		        rootRef,
		        visible,
		        elementRef.current
		    ]);
		    const resetVisible = (0, _react.useCallback)(()=>{
		        setVisible(false);
		    }, []);
		    return [
		        setElement,
		        visible,
		        resetVisible
		    ];
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (useIntersection, useIntersection.exports));
	return useIntersection.exports;
}

var getDomainLocale = {exports: {}};

var normalizeLocalePath$1 = {exports: {}};

var normalizeLocalePath = {};

var hasRequiredNormalizeLocalePath$1;

function requireNormalizeLocalePath$1 () {
	if (hasRequiredNormalizeLocalePath$1) return normalizeLocalePath;
	hasRequiredNormalizeLocalePath$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "normalizeLocalePath", {
		    enumerable: true,
		    get: function() {
		        return normalizeLocalePath;
		    }
		});
		/**
		 * A cache of lowercased locales for each list of locales. This is stored as a
		 * WeakMap so if the locales are garbage collected, the cache entry will be
		 * removed as well.
		 */ const cache = new WeakMap();
		function normalizeLocalePath(pathname, locales) {
		    // If locales is undefined, return the pathname as is.
		    if (!locales) return {
		        pathname
		    };
		    // Get the cached lowercased locales or create a new cache entry.
		    let lowercasedLocales = cache.get(locales);
		    if (!lowercasedLocales) {
		        lowercasedLocales = locales.map((locale)=>locale.toLowerCase());
		        cache.set(locales, lowercasedLocales);
		    }
		    let detectedLocale;
		    // The first segment will be empty, because it has a leading `/`. If
		    // there is no further segment, there is no locale (or it's the default).
		    const segments = pathname.split('/', 2);
		    // If there's no second segment (ie, the pathname is just `/`), there's no
		    // locale.
		    if (!segments[1]) return {
		        pathname
		    };
		    // The second segment will contain the locale part if any.
		    const segment = segments[1].toLowerCase();
		    // See if the segment matches one of the locales. If it doesn't, there is
		    // no locale (or it's the default).
		    const index = lowercasedLocales.indexOf(segment);
		    if (index < 0) return {
		        pathname
		    };
		    // Return the case-sensitive locale.
		    detectedLocale = locales[index];
		    // Remove the `/${locale}` part of the pathname.
		    pathname = pathname.slice(detectedLocale.length + 1) || '/';
		    return {
		        pathname,
		        detectedLocale
		    };
		}

		
	} (normalizeLocalePath));
	return normalizeLocalePath;
}

var hasRequiredNormalizeLocalePath;

function requireNormalizeLocalePath () {
	if (hasRequiredNormalizeLocalePath) return normalizeLocalePath$1.exports;
	hasRequiredNormalizeLocalePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "normalizeLocalePath", {
		    enumerable: true,
		    get: function() {
		        return normalizeLocalePath;
		    }
		});
		const normalizeLocalePath = (pathname, locales)=>{
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        return requireNormalizeLocalePath$1().normalizeLocalePath(pathname, locales);
		    }
		    return {
		        pathname,
		        detectedLocale: undefined
		    };
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (normalizeLocalePath$1, normalizeLocalePath$1.exports));
	return normalizeLocalePath$1.exports;
}

var detectDomainLocale$1 = {exports: {}};

var detectDomainLocale = {};

var hasRequiredDetectDomainLocale$1;

function requireDetectDomainLocale$1 () {
	if (hasRequiredDetectDomainLocale$1) return detectDomainLocale;
	hasRequiredDetectDomainLocale$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "detectDomainLocale", {
		    enumerable: true,
		    get: function() {
		        return detectDomainLocale;
		    }
		});
		function detectDomainLocale(domainItems, hostname, detectedLocale) {
		    if (!domainItems) return;
		    if (detectedLocale) {
		        detectedLocale = detectedLocale.toLowerCase();
		    }
		    for (const item of domainItems){
		        var _item_domain, _item_locales;
		        // remove port if present
		        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(':', 1)[0].toLowerCase();
		        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
		            return item;
		        }
		    }
		}

		
	} (detectDomainLocale));
	return detectDomainLocale;
}

var hasRequiredDetectDomainLocale;

function requireDetectDomainLocale () {
	if (hasRequiredDetectDomainLocale) return detectDomainLocale$1.exports;
	hasRequiredDetectDomainLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "detectDomainLocale", {
		    enumerable: true,
		    get: function() {
		        return detectDomainLocale;
		    }
		});
		const detectDomainLocale = function() {
		    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
		        args[_key] = arguments[_key];
		    }
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        return requireDetectDomainLocale$1().detectDomainLocale(...args);
		    }
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (detectDomainLocale$1, detectDomainLocale$1.exports));
	return detectDomainLocale$1.exports;
}

var hasRequiredGetDomainLocale;

function requireGetDomainLocale () {
	if (hasRequiredGetDomainLocale) return getDomainLocale.exports;
	hasRequiredGetDomainLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getDomainLocale", {
		    enumerable: true,
		    get: function() {
		        return getDomainLocale;
		    }
		});
		const _normalizetrailingslash = requireNormalizeTrailingSlash();
		const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
		function getDomainLocale(path, locale, locales, domainLocales) {
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        const normalizeLocalePath = requireNormalizeLocalePath().normalizeLocalePath;
		        const detectDomainLocale = requireDetectDomainLocale().detectDomainLocale;
		        const target = locale || normalizeLocalePath(path, locales).detectedLocale;
		        const domain = detectDomainLocale(domainLocales, undefined, target);
		        if (domain) {
		            const proto = "http" + (domain.http ? '' : 's') + "://";
		            const finalLocale = target === domain.defaultLocale ? '' : "/" + target;
		            return "" + proto + domain.domain + (0, _normalizetrailingslash.normalizePathTrailingSlash)("" + basePath + finalLocale + path);
		        }
		        return false;
		    } else {
		        return false;
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (getDomainLocale, getDomainLocale.exports));
	return getDomainLocale.exports;
}

var addBasePath = {exports: {}};

var hasRequiredAddBasePath;

function requireAddBasePath () {
	if (hasRequiredAddBasePath) return addBasePath.exports;
	hasRequiredAddBasePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addBasePath", {
		    enumerable: true,
		    get: function() {
		        return addBasePath;
		    }
		});
		const _addpathprefix = requireAddPathPrefix();
		const _normalizetrailingslash = requireNormalizeTrailingSlash();
		const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
		function addBasePath(path, required) {
		    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !required ? path : (0, _addpathprefix.addPathPrefix)(path, basePath));
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (addBasePath, addBasePath.exports));
	return addBasePath.exports;
}

var useMergedRef = {exports: {}};

var hasRequiredUseMergedRef;

function requireUseMergedRef () {
	if (hasRequiredUseMergedRef) return useMergedRef.exports;
	hasRequiredUseMergedRef = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "useMergedRef", {
		    enumerable: true,
		    get: function() {
		        return useMergedRef;
		    }
		});
		const _react = require$$0;
		function useMergedRef(refA, refB) {
		    const cleanupA = (0, _react.useRef)(null);
		    const cleanupB = (0, _react.useRef)(null);
		    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
		    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
		    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
		    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
		    // (because it hasn't been updated for React 19)
		    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
		    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
		    return (0, _react.useCallback)((current)=>{
		        if (current === null) {
		            const cleanupFnA = cleanupA.current;
		            if (cleanupFnA) {
		                cleanupA.current = null;
		                cleanupFnA();
		            }
		            const cleanupFnB = cleanupB.current;
		            if (cleanupFnB) {
		                cleanupB.current = null;
		                cleanupFnB();
		            }
		        } else {
		            if (refA) {
		                cleanupA.current = applyRef(refA, current);
		            }
		            if (refB) {
		                cleanupB.current = applyRef(refB, current);
		            }
		        }
		    }, [
		        refA,
		        refB
		    ]);
		}
		function applyRef(refA, current) {
		    if (typeof refA === 'function') {
		        const cleanup = refA(current);
		        if (typeof cleanup === 'function') {
		            return cleanup;
		        } else {
		            return ()=>refA(null);
		        }
		    } else {
		        refA.current = current;
		        return ()=>{
		            refA.current = null;
		        };
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (useMergedRef, useMergedRef.exports));
	return useMergedRef.exports;
}

var errorOnce = {};

var hasRequiredErrorOnce;

function requireErrorOnce () {
	if (hasRequiredErrorOnce) return errorOnce;
	hasRequiredErrorOnce = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "errorOnce", {
		    enumerable: true,
		    get: function() {
		        return errorOnce;
		    }
		});
		let errorOnce = (_)=>{};
		if (process.env.NODE_ENV !== 'production') {
		    const errors = new Set();
		    errorOnce = (msg)=>{
		        if (!errors.has(msg)) {
		            console.error(msg);
		        }
		        errors.add(msg);
		    };
		}

		
	} (errorOnce));
	return errorOnce;
}

var hasRequiredLink$1;

function requireLink$1 () {
	if (hasRequiredLink$1) return link$1.exports;
	hasRequiredLink$1 = 1;
	(function (module, exports) {
		'use client';
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    default: function() {
		        return _default;
		    },
		    useLinkStatus: function() {
		        return useLinkStatus;
		    }
		});
		const _interop_require_wildcard = /*@__PURE__*/ require_interop_require_wildcard();
		const _jsxruntime = require$$1;
		const _react = /*#__PURE__*/ _interop_require_wildcard._(require$$0);
		const _resolvehref = requireResolveHref();
		const _islocalurl = requireIsLocalUrl();
		const _formaturl = requireFormatUrl();
		const _utils = requireUtils$1();
		const _addlocale = requireAddLocale();
		const _routercontextsharedruntime = requireRouterContext_sharedRuntime();
		const _useintersection = requireUseIntersection();
		const _getdomainlocale = requireGetDomainLocale();
		const _addbasepath = requireAddBasePath();
		const _usemergedref = requireUseMergedRef();
		const _erroronce = requireErrorOnce();
		const prefetched = new Set();
		function prefetch(router, href, as, options) {
		    if (typeof window === 'undefined') {
		        return;
		    }
		    if (!(0, _islocalurl.isLocalURL)(href)) {
		        return;
		    }
		    // We should only dedupe requests when experimental.optimisticClientCache is
		    // disabled.
		    if (!options.bypassPrefetchedCheck) {
		        const locale = // Let the link's locale prop override the default router locale.
		        typeof options.locale !== 'undefined' ? options.locale : 'locale' in router ? router.locale : undefined;
		        const prefetchedKey = href + '%' + as + '%' + locale;
		        // If we've already fetched the key, then don't prefetch it again!
		        if (prefetched.has(prefetchedKey)) {
		            return;
		        }
		        // Mark this URL as prefetched.
		        prefetched.add(prefetchedKey);
		    }
		    // Prefetch the JSON page if asked (only in the client)
		    // We need to handle a prefetch error here since we may be
		    // loading with priority which can reject but we don't
		    // want to force navigation since this is only a prefetch
		    router.prefetch(href, as, options).catch((err)=>{
		        if (process.env.NODE_ENV !== 'production') {
		            // rethrow to show invalid URL errors
		            throw err;
		        }
		    });
		}
		function isModifiedEvent(event) {
		    const eventTarget = event.currentTarget;
		    const target = eventTarget.getAttribute('target');
		    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
		    event.nativeEvent && event.nativeEvent.which === 2;
		}
		function linkClicked(e, router, href, as, replace, shallow, scroll, locale, onNavigate) {
		    const { nodeName } = e.currentTarget;
		    // anchors inside an svg have a lowercase nodeName
		    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
		    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
		        // ignore click for browser’s default behavior
		        return;
		    }
		    if (!(0, _islocalurl.isLocalURL)(href)) {
		        if (replace) {
		            // browser default behavior does not replace the history state
		            // so we need to do it manually
		            e.preventDefault();
		            location.replace(href);
		        }
		        // ignore click for browser’s default behavior
		        return;
		    }
		    e.preventDefault();
		    const navigate = ()=>{
		        if (onNavigate) {
		            let isDefaultPrevented = false;
		            onNavigate({
		                preventDefault: ()=>{
		                    isDefaultPrevented = true;
		                }
		            });
		            if (isDefaultPrevented) {
		                return;
		            }
		        }
		        // If the router is an NextRouter instance it will have `beforePopState`
		        const routerScroll = scroll != null ? scroll : true;
		        if ('beforePopState' in router) {
		            router[replace ? 'replace' : 'push'](href, as, {
		                shallow,
		                locale,
		                scroll: routerScroll
		            });
		        } else {
		            router[replace ? 'replace' : 'push'](as || href, {
		                scroll: routerScroll
		            });
		        }
		    };
		    navigate();
		}
		function formatStringOrUrl(urlObjOrString) {
		    if (typeof urlObjOrString === 'string') {
		        return urlObjOrString;
		    }
		    return (0, _formaturl.formatUrl)(urlObjOrString);
		}
		/**
		 * A React component that extends the HTML `<a>` element to provide [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
		 * and client-side navigation between routes.
		 *
		 * It is the primary way to navigate between routes in Next.js.
		 *
		 * Read more: [Next.js docs: `<Link>`](https://nextjs.org/docs/app/api-reference/components/link)
		 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
		    let children;
		    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onNavigate, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
		    children = childrenProp;
		    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
		        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
		            children: children
		        });
		    }
		    const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
		    const prefetchEnabled = prefetchProp !== false;
		    if (process.env.NODE_ENV !== 'production') {
		        function createPropError(args) {
		            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
		                value: "E319",
		                enumerable: false,
		                configurable: true
		            });
		        }
		        // TypeScript trick for type-guarding:
		        const requiredPropsGuard = {
		            href: true
		        };
		        const requiredProps = Object.keys(requiredPropsGuard);
		        requiredProps.forEach((key)=>{
		            if (key === 'href') {
		                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
		                    throw createPropError({
		                        key,
		                        expected: '`string` or `object`',
		                        actual: props[key] === null ? 'null' : typeof props[key]
		                    });
		                }
		            }
		        });
		        // TypeScript trick for type-guarding:
		        const optionalPropsGuard = {
		            as: true,
		            replace: true,
		            scroll: true,
		            shallow: true,
		            passHref: true,
		            prefetch: true,
		            locale: true,
		            onClick: true,
		            onMouseEnter: true,
		            onTouchStart: true,
		            legacyBehavior: true,
		            onNavigate: true
		        };
		        const optionalProps = Object.keys(optionalPropsGuard);
		        optionalProps.forEach((key)=>{
		            const valType = typeof props[key];
		            if (key === 'as') {
		                if (props[key] && valType !== 'string' && valType !== 'object') {
		                    throw createPropError({
		                        key,
		                        expected: '`string` or `object`',
		                        actual: valType
		                    });
		                }
		            } else if (key === 'locale') {
		                if (props[key] && valType !== 'string') {
		                    throw createPropError({
		                        key,
		                        expected: '`string`',
		                        actual: valType
		                    });
		                }
		            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
		                if (props[key] && valType !== 'function') {
		                    throw createPropError({
		                        key,
		                        expected: '`function`',
		                        actual: valType
		                    });
		                }
		            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior') {
		                if (props[key] != null && valType !== 'boolean') {
		                    throw createPropError({
		                        key,
		                        expected: '`boolean`',
		                        actual: valType
		                    });
		                }
		            } else if (key === 'prefetch') {
		                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
		                    throw createPropError({
		                        key,
		                        expected: '`boolean | "auto"`',
		                        actual: valType
		                    });
		                }
		            } else ;
		        });
		    }
		    const { href, as } = _react.default.useMemo(()=>{
		        if (!router) {
		            const resolvedHref = formatStringOrUrl(hrefProp);
		            return {
		                href: resolvedHref,
		                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
		            };
		        }
		        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, hrefProp, true);
		        return {
		            href: resolvedHref,
		            as: asProp ? (0, _resolvehref.resolveHref)(router, asProp) : resolvedAs || resolvedHref
		        };
		    }, [
		        router,
		        hrefProp,
		        asProp
		    ]);
		    const previousHref = _react.default.useRef(href);
		    const previousAs = _react.default.useRef(as);
		    // This will return the first child, if multiple are provided it will throw an error
		    let child;
		    if (legacyBehavior) {
		        if (process.env.NODE_ENV === 'development') {
		            if (onClick) {
		                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
		            }
		            if (onMouseEnterProp) {
		                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
		            }
		            try {
		                child = _react.default.Children.only(children);
		            } catch (err) {
		                if (!children) {
		                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
		                        value: "E320",
		                        enumerable: false,
		                        configurable: true
		                    });
		                }
		                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
		                    value: "E266",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		        } else {
		            child = _react.default.Children.only(children);
		        }
		    } else {
		        if (process.env.NODE_ENV === 'development') {
		            if ((children == null ? void 0 : children.type) === 'a') {
		                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
		                    value: "E209",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		        }
		    }
		    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
		    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
		        rootMargin: '200px'
		    });
		    const setIntersectionWithResetRef = _react.default.useCallback((el)=>{
		        // Before the link getting observed, check if visible state need to be reset
		        if (previousAs.current !== as || previousHref.current !== href) {
		            resetVisible();
		            previousAs.current = as;
		            previousHref.current = href;
		        }
		        setIntersectionRef(el);
		    }, [
		        as,
		        href,
		        resetVisible,
		        setIntersectionRef
		    ]);
		    const setRef = (0, _usemergedref.useMergedRef)(setIntersectionWithResetRef, childRef);
		    // Prefetch the URL if we haven't already and it's visible.
		    _react.default.useEffect(()=>{
		        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
		        if (process.env.NODE_ENV !== 'production') {
		            return;
		        }
		        if (!router) {
		            return;
		        }
		        // If we don't need to prefetch the URL, don't do prefetch.
		        if (!isVisible || !prefetchEnabled) {
		            return;
		        }
		        // Prefetch the URL.
		        prefetch(router, href, as, {
		            locale
		        });
		    }, [
		        as,
		        href,
		        isVisible,
		        locale,
		        prefetchEnabled,
		        router == null ? void 0 : router.locale,
		        router
		    ]);
		    const childProps = {
		        ref: setRef,
		        onClick (e) {
		            if (process.env.NODE_ENV !== 'production') {
		                if (!e) {
		                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
		                        value: "E312",
		                        enumerable: false,
		                        configurable: true
		                    });
		                }
		            }
		            if (!legacyBehavior && typeof onClick === 'function') {
		                onClick(e);
		            }
		            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
		                child.props.onClick(e);
		            }
		            if (!router) {
		                return;
		            }
		            if (e.defaultPrevented) {
		                return;
		            }
		            linkClicked(e, router, href, as, replace, shallow, scroll, locale, onNavigate);
		        },
		        onMouseEnter (e) {
		            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
		                onMouseEnterProp(e);
		            }
		            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
		                child.props.onMouseEnter(e);
		            }
		            if (!router) {
		                return;
		            }
		            prefetch(router, href, as, {
		                locale,
		                priority: true,
		                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
		                bypassPrefetchedCheck: true
		            });
		        },
		        onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? undefined : function onTouchStart(e) {
		            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
		                onTouchStartProp(e);
		            }
		            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
		                child.props.onTouchStart(e);
		            }
		            if (!router) {
		                return;
		            }
		            prefetch(router, href, as, {
		                locale,
		                priority: true,
		                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
		                bypassPrefetchedCheck: true
		            });
		        }
		    };
		    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
		    // defined, we specify the current 'href', so that repetition is not needed by the user.
		    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
		    if ((0, _utils.isAbsoluteUrl)(as)) {
		        childProps.href = as;
		    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
		        const curLocale = typeof locale !== 'undefined' ? locale : router == null ? void 0 : router.locale;
		        // we only render domain locales if we are currently on a domain locale
		        // so that locale links are still visitable in development/preview envs
		        const localeDomain = (router == null ? void 0 : router.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, router == null ? void 0 : router.locales, router == null ? void 0 : router.domainLocales);
		        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, router == null ? void 0 : router.defaultLocale));
		    }
		    if (legacyBehavior) {
		        if (process.env.NODE_ENV === 'development') {
		            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
		        }
		        return /*#__PURE__*/ _react.default.cloneElement(child, childProps);
		    }
		    return /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
		        ...restProps,
		        ...childProps,
		        children: children
		    });
		});
		const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)({
		    // We do not support link status in the Pages Router, so we always return false
		    pending: false
		});
		const useLinkStatus = ()=>{
		    // This behaviour is like React's useFormStatus. When the component is not under
		    // a <form> tag, it will get the default value, instead of throwing an error.
		    return (0, _react.useContext)(LinkStatusContext);
		};
		const _default = Link;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (link$1, link$1.exports));
	return link$1.exports;
}

var link;
var hasRequiredLink;

function requireLink () {
	if (hasRequiredLink) return link;
	hasRequiredLink = 1;
	link = requireLink$1();
	return link;
}

var linkExports = requireLink();
var Link = /*@__PURE__*/getDefaultExportFromCjs(linkExports);

function Breadcrumb({ items, className = '' }) {
    return (jsx("nav", { className: `flex items-center space-x-1 text-sm ${className}`, "aria-label": "Breadcrumb", children: items.map((item, index) => (jsxs("div", { className: "flex items-center", children: [index > 0 && jsx(ChevronRight, { size: 14, className: "mx-1 opacity-50" }), item.href && index < items.length - 1 ? (jsx(Link, { href: item.href, className: "hover:underline opacity-70 hover:opacity-100 transition-opacity cursor-pointer", children: item.label })) : (jsx("span", { className: index === items.length - 1 ? 'font-medium' : 'opacity-70', children: item.label }))] }, index))) }));
}

const Modal = ({ isOpen, onClose, title, children, size = 'md', closeOnBackdropClick = true, closeOnEsc = true, className = '', overlayClassName = '' }) => {
    const modalRef = useRef(null);
    const previousFocusRef = useRef(null);
    // Size classes following theReactUI principles
    const sizeClasses = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl'
    };
    // Handle ESC key press
    useEffect(() => {
        if (!closeOnEsc)
            return;
        const handleEsc = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose, closeOnEsc]);
    // Focus management
    useEffect(() => {
        var _a;
        if (isOpen) {
            // Store the previously focused element
            previousFocusRef.current = document.activeElement;
            // Focus the modal when it opens
            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
        else {
            // Restore focus when modal closes
            if (previousFocusRef.current) {
                previousFocusRef.current.focus();
            }
            // Restore body scroll
            document.body.style.overflow = 'unset';
        }
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    // Handle backdrop click
    const handleBackdropClick = (event) => {
        if (closeOnBackdropClick && event.target === event.currentTarget) {
            onClose();
        }
    };
    // Focus trap implementation
    const handleKeyDown = (event) => {
        var _a;
        if (event.key === 'Tab') {
            const focusableElements = (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusableElements && focusableElements.length > 0) {
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                if (event.shiftKey) {
                    if (document.activeElement === firstElement) {
                        event.preventDefault();
                        lastElement.focus();
                    }
                }
                else {
                    if (document.activeElement === lastElement) {
                        event.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        }
    };
    if (!isOpen)
        return null;
    // Portal to render modal at document.body level
    return createPortal(jsxs("div", { className: `fixed inset-0 z-50 flex items-center justify-center p-4 ${overlayClassName}`, onClick: handleBackdropClick, role: "dialog", "aria-modal": "true", "aria-labelledby": title ? 'modal-title' : undefined, children: [jsx("div", { className: "fixed inset-0 bg-black/30 dark:bg-white/20" }), jsxs("div", { ref: modalRef, className: `relative w-full ${sizeClasses[size]} bg-background text-foreground border border-foreground max-h-[90vh] overflow-auto shadow-lg ${className}`, onClick: (e) => e.stopPropagation(), onKeyDown: handleKeyDown, tabIndex: -1, style: { zIndex: 1000 }, children: [(jsxs("div", { className: "flex items-center justify-between p-6 border-b border-foreground text-foreground", children: [title && (jsx("h2", { id: "modal-title", className: "text-xl font-semibold text-foreground", children: title })), jsx("button", { onClick: onClose, className: "ml-auto p-1 text-foreground hover:bg-foreground hover:text-background transition-colors", "aria-label": "Close modal", children: jsx(X, { size: 20 }) })] })), jsx("div", { className: "p-6 text-foreground", children: children })] })] }), document.body);
};

const Card = forwardRef(({ children, className = '', variant = 'default', padding = 'md', onClick, hoverable = false, ...props }, ref) => {
    // Variant classes
    const variantClasses = {
        default: 'bg-background border border-current',
        bordered: 'bg-background border-2 border-current',
        elevated: 'bg-background border border-current shadow-[4px_4px_0px_0px_currentColor]'
    };
    // Padding classes
    const paddingClasses = {
        none: '',
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6'
    };
    // Base classes following theReactUI design principles
    const baseClasses = `
      ${variantClasses[variant]}
      ${paddingClasses[padding]}
      transition-all
      duration-200
      ${onClick || hoverable ? 'cursor-pointer' : ''}
      ${onClick || hoverable ? 'hover:shadow-[6px_6px_0px_0px_currentColor]' : ''}
      ${onClick || hoverable ? 'active:shadow-[2px_2px_0px_0px_currentColor]' : ''}
      ${onClick || hoverable ? 'active:translate-x-[2px] active:translate-y-[2px]' : ''}
    `.trim().replace(/\s+/g, ' ');
    const finalClassName = `${baseClasses} ${className}`;
    return (jsx("div", { ref: ref, className: finalClassName, onClick: onClick, ...props, children: children }));
});
const CardHeader = forwardRef(({ children, className = '', ...props }, ref) => {
    const baseClasses = 'border-b border-current pb-3 mb-3';
    const finalClassName = `${baseClasses} ${className}`;
    return (jsx("div", { ref: ref, className: finalClassName, ...props, children: children }));
});
const CardContent = forwardRef(({ children, className = '', ...props }, ref) => {
    const baseClasses = 'text-foreground';
    const finalClassName = `${baseClasses} ${className}`;
    return (jsx("div", { ref: ref, className: finalClassName, ...props, children: children }));
});
const CardFooter = forwardRef(({ children, className = '', ...props }, ref) => {
    const baseClasses = 'border-t border-current pt-3 mt-3';
    const finalClassName = `${baseClasses} ${className}`;
    return (jsx("div", { ref: ref, className: finalClassName, ...props, children: children }));
});
Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

const Badge = forwardRef(({ children, variant = 'default', size = 'md', className = '', outline = false, ...props }, ref) => {
    // Size classes
    const sizeClasses = {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-2.5 py-1',
        lg: 'text-base px-3 py-1.5'
    };
    // Variant classes for filled badges
    const filledVariantClasses = {
        default: 'bg-foreground text-background border-foreground',
        primary: 'bg-foreground text-background border-foreground',
        secondary: 'bg-background text-foreground border-current',
        success: 'bg-foreground text-background border-foreground',
        warning: 'bg-foreground text-background border-foreground',
        error: 'bg-foreground text-background border-foreground'
    };
    // Variant classes for outline badges
    const outlineVariantClasses = {
        default: 'bg-background text-foreground border-current',
        primary: 'bg-background text-foreground border-current',
        secondary: 'bg-background text-foreground border-current',
        success: 'bg-background text-foreground border-current',
        warning: 'bg-background text-foreground border-current',
        error: 'bg-background text-foreground border-current'
    };
    // Choose variant classes based on outline prop
    const variantClasses = outline ? outlineVariantClasses : filledVariantClasses;
    // Base classes following theReactUI design principles
    const baseClasses = `
      inline-flex
      items-center
      justify-center
      font-medium
      border
      transition-colors
      duration-200
      ${sizeClasses[size]}
      ${variantClasses[variant]}
    `.trim().replace(/\s+/g, ' ');
    const finalClassName = `${baseClasses} ${className}`;
    return (jsx("span", { ref: ref, className: finalClassName, ...props, children: children }));
});
Badge.displayName = 'Badge';

const Tooltip = ({ children, content, placement = 'top', delay = 200, className = '', disabled = false, arrow = true, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPositioned, setIsPositioned] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);
    const timeoutRef = useRef(null);
    const calculatePosition = () => {
        if (!triggerRef.current || !tooltipRef.current)
            return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        let x = 0;
        let y = 0;
        const offset = 8;
        switch (placement) {
            case 'top':
                x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
                y = triggerRect.top - tooltipRect.height - offset;
                break;
            case 'bottom':
                x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
                y = triggerRect.bottom + offset;
                break;
            case 'left':
                x = triggerRect.left - tooltipRect.width - offset;
                y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
                break;
            case 'right':
                x = triggerRect.right + offset;
                y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
                break;
        }
        // Keep within viewport
        const padding = 8;
        x = Math.max(padding, Math.min(x, window.innerWidth - tooltipRect.width - padding));
        y = Math.max(padding, Math.min(y, window.innerHeight - tooltipRect.height - padding));
        setPosition({ x, y });
        setIsPositioned(true);
    };
    const showTooltip = () => {
        if (disabled)
            return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
        }, delay);
    };
    const hideTooltip = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsVisible(false);
        setIsPositioned(false);
    };
    useEffect(() => {
        if (isVisible) {
            // Use requestAnimationFrame for better timing
            requestAnimationFrame(() => {
                calculatePosition();
            });
        }
    }, [isVisible, placement]);
    useEffect(() => {
        if (isVisible) {
            const handleResize = () => calculatePosition();
            const handleScroll = () => calculatePosition();
            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll, true);
            return () => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('scroll', handleScroll, true);
            };
        }
    }, [isVisible]);
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    const triggerElement = isValidElement(children)
        ? cloneElement(children, {
            ref: (node) => {
                triggerRef.current = node;
                const originalRef = children.ref;
                if (typeof originalRef === 'function') {
                    originalRef(node);
                }
                else if (originalRef) {
                    originalRef.current = node;
                }
            },
            onMouseEnter: (e) => {
                var _a;
                showTooltip();
                const originalOnMouseEnter = (_a = children.props) === null || _a === void 0 ? void 0 : _a.onMouseEnter;
                if (originalOnMouseEnter) {
                    originalOnMouseEnter(e);
                }
            },
            onMouseLeave: (e) => {
                var _a;
                hideTooltip();
                const originalOnMouseLeave = (_a = children.props) === null || _a === void 0 ? void 0 : _a.onMouseLeave;
                if (originalOnMouseLeave) {
                    originalOnMouseLeave(e);
                }
            },
            onFocus: (e) => {
                var _a;
                showTooltip();
                const originalOnFocus = (_a = children.props) === null || _a === void 0 ? void 0 : _a.onFocus;
                if (originalOnFocus) {
                    originalOnFocus(e);
                }
            },
            onBlur: (e) => {
                var _a;
                hideTooltip();
                const originalOnBlur = (_a = children.props) === null || _a === void 0 ? void 0 : _a.onBlur;
                if (originalOnBlur) {
                    originalOnBlur(e);
                }
            },
        })
        : children;
    if (!isVisible || typeof window === 'undefined') {
        return jsx(Fragment, { children: triggerElement });
    }
    return (jsxs(Fragment, { children: [triggerElement, createPortal(jsx("div", { ref: tooltipRef, className: `fixed z-50 px-2 py-1 text-sm bg-foreground text-background border border-current pointer-events-none ${className}`, style: {
                    left: isPositioned ? position.x : -9999,
                    top: isPositioned ? position.y : -9999,
                    whiteSpace: 'nowrap',
                    visibility: isPositioned ? 'visible' : 'hidden',
                }, ...props, children: content }), document.body)] }));
};
Tooltip.displayName = 'Tooltip';

// Create theReactUI theme context
const TheReactUIContext = createContext({});
const useTheReactUI = () => {
    const context = useContext(TheReactUIContext);
    if (!context) {
        throw new Error('useTheReactUI must be used within a TheReactUIProvider');
    }
    return context;
};
// TheReactUI Provider that combines next-themes with our UI context
function TheReactUIProvider({ children, ...props }) {
    return (jsx(ThemeProvider, { attribute: "class", defaultTheme: "light", enableSystem: true, disableTransitionOnChange: true, ...props, children: jsx(TheReactUIContext.Provider, { value: {}, children: children }) }));
}

var navigation$2 = {exports: {}};

var appRouterContext_sharedRuntime = {};

var hasRequiredAppRouterContext_sharedRuntime;

function requireAppRouterContext_sharedRuntime () {
	if (hasRequiredAppRouterContext_sharedRuntime) return appRouterContext_sharedRuntime;
	hasRequiredAppRouterContext_sharedRuntime = 1;
	(function (exports) {
		'use client';
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    AppRouterContext: function() {
		        return AppRouterContext;
		    },
		    GlobalLayoutRouterContext: function() {
		        return GlobalLayoutRouterContext;
		    },
		    LayoutRouterContext: function() {
		        return LayoutRouterContext;
		    },
		    MissingSlotContext: function() {
		        return MissingSlotContext;
		    },
		    TemplateContext: function() {
		        return TemplateContext;
		    }
		});
		const _interop_require_default = /*@__PURE__*/ require_interop_require_default();
		const _react = /*#__PURE__*/ _interop_require_default._(require$$0);
		const AppRouterContext = _react.default.createContext(null);
		const LayoutRouterContext = _react.default.createContext(null);
		const GlobalLayoutRouterContext = _react.default.createContext(null);
		const TemplateContext = _react.default.createContext(null);
		if (process.env.NODE_ENV !== 'production') {
		    AppRouterContext.displayName = 'AppRouterContext';
		    LayoutRouterContext.displayName = 'LayoutRouterContext';
		    GlobalLayoutRouterContext.displayName = 'GlobalLayoutRouterContext';
		    TemplateContext.displayName = 'TemplateContext';
		}
		const MissingSlotContext = _react.default.createContext(new Set());

		
	} (appRouterContext_sharedRuntime));
	return appRouterContext_sharedRuntime;
}

var hooksClientContext_sharedRuntime = {};

var hasRequiredHooksClientContext_sharedRuntime;

function requireHooksClientContext_sharedRuntime () {
	if (hasRequiredHooksClientContext_sharedRuntime) return hooksClientContext_sharedRuntime;
	hasRequiredHooksClientContext_sharedRuntime = 1;
	(function (exports) {
		'use client';
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    PathParamsContext: function() {
		        return PathParamsContext;
		    },
		    PathnameContext: function() {
		        return PathnameContext;
		    },
		    SearchParamsContext: function() {
		        return SearchParamsContext;
		    }
		});
		const _react = require$$0;
		const SearchParamsContext = (0, _react.createContext)(null);
		const PathnameContext = (0, _react.createContext)(null);
		const PathParamsContext = (0, _react.createContext)(null);
		if (process.env.NODE_ENV !== 'production') {
		    SearchParamsContext.displayName = 'SearchParamsContext';
		    PathnameContext.displayName = 'PathnameContext';
		    PathParamsContext.displayName = 'PathParamsContext';
		}

		
	} (hooksClientContext_sharedRuntime));
	return hooksClientContext_sharedRuntime;
}

var getSegmentValue = {exports: {}};

var hasRequiredGetSegmentValue;

function requireGetSegmentValue () {
	if (hasRequiredGetSegmentValue) return getSegmentValue.exports;
	hasRequiredGetSegmentValue = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getSegmentValue", {
		    enumerable: true,
		    get: function() {
		        return getSegmentValue;
		    }
		});
		function getSegmentValue(segment) {
		    return Array.isArray(segment) ? segment[1] : segment;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (getSegmentValue, getSegmentValue.exports));
	return getSegmentValue.exports;
}

var navigation_reactServer = {exports: {}};

var redirect = {exports: {}};

var redirectStatusCode = {exports: {}};

var hasRequiredRedirectStatusCode;

function requireRedirectStatusCode () {
	if (hasRequiredRedirectStatusCode) return redirectStatusCode.exports;
	hasRequiredRedirectStatusCode = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "RedirectStatusCode", {
		    enumerable: true,
		    get: function() {
		        return RedirectStatusCode;
		    }
		});
		var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
		    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
		    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
		    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
		    return RedirectStatusCode;
		}({});

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (redirectStatusCode, redirectStatusCode.exports));
	return redirectStatusCode.exports;
}

var redirectError = {exports: {}};

var hasRequiredRedirectError;

function requireRedirectError () {
	if (hasRequiredRedirectError) return redirectError.exports;
	hasRequiredRedirectError = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    REDIRECT_ERROR_CODE: function() {
		        return REDIRECT_ERROR_CODE;
		    },
		    RedirectType: function() {
		        return RedirectType;
		    },
		    isRedirectError: function() {
		        return isRedirectError;
		    }
		});
		const _redirectstatuscode = requireRedirectStatusCode();
		const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
		var RedirectType = /*#__PURE__*/ function(RedirectType) {
		    RedirectType["push"] = "push";
		    RedirectType["replace"] = "replace";
		    return RedirectType;
		}({});
		function isRedirectError(error) {
		    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
		        return false;
		    }
		    const digest = error.digest.split(';');
		    const [errorCode, type] = digest;
		    const destination = digest.slice(2, -2).join(';');
		    const status = digest.at(-2);
		    const statusCode = Number(status);
		    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (redirectError, redirectError.exports));
	return redirectError.exports;
}

var actionAsyncStorage_external = {};

var actionAsyncStorageInstance = {};

var asyncLocalStorage = {};

var hasRequiredAsyncLocalStorage;

function requireAsyncLocalStorage () {
	if (hasRequiredAsyncLocalStorage) return asyncLocalStorage;
	hasRequiredAsyncLocalStorage = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    bindSnapshot: function() {
		        return bindSnapshot;
		    },
		    createAsyncLocalStorage: function() {
		        return createAsyncLocalStorage;
		    },
		    createSnapshot: function() {
		        return createSnapshot;
		    }
		});
		const sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), "__NEXT_ERROR_CODE", {
		    value: "E504",
		    enumerable: false,
		    configurable: true
		});
		class FakeAsyncLocalStorage {
		    disable() {
		        throw sharedAsyncLocalStorageNotAvailableError;
		    }
		    getStore() {
		        // This fake implementation of AsyncLocalStorage always returns `undefined`.
		        return undefined;
		    }
		    run() {
		        throw sharedAsyncLocalStorageNotAvailableError;
		    }
		    exit() {
		        throw sharedAsyncLocalStorageNotAvailableError;
		    }
		    enterWith() {
		        throw sharedAsyncLocalStorageNotAvailableError;
		    }
		    static bind(fn) {
		        return fn;
		    }
		}
		const maybeGlobalAsyncLocalStorage = typeof globalThis !== 'undefined' && globalThis.AsyncLocalStorage;
		function createAsyncLocalStorage() {
		    if (maybeGlobalAsyncLocalStorage) {
		        return new maybeGlobalAsyncLocalStorage();
		    }
		    return new FakeAsyncLocalStorage();
		}
		function bindSnapshot(fn) {
		    if (maybeGlobalAsyncLocalStorage) {
		        return maybeGlobalAsyncLocalStorage.bind(fn);
		    }
		    return FakeAsyncLocalStorage.bind(fn);
		}
		function createSnapshot() {
		    if (maybeGlobalAsyncLocalStorage) {
		        return maybeGlobalAsyncLocalStorage.snapshot();
		    }
		    return function(fn, ...args) {
		        return fn(...args);
		    };
		}

		
	} (asyncLocalStorage));
	return asyncLocalStorage;
}

var hasRequiredActionAsyncStorageInstance;

function requireActionAsyncStorageInstance () {
	if (hasRequiredActionAsyncStorageInstance) return actionAsyncStorageInstance;
	hasRequiredActionAsyncStorageInstance = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "actionAsyncStorageInstance", {
		    enumerable: true,
		    get: function() {
		        return actionAsyncStorageInstance;
		    }
		});
		const _asynclocalstorage = requireAsyncLocalStorage();
		const actionAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

		
	} (actionAsyncStorageInstance));
	return actionAsyncStorageInstance;
}

var hasRequiredActionAsyncStorage_external;

function requireActionAsyncStorage_external () {
	if (hasRequiredActionAsyncStorage_external) return actionAsyncStorage_external;
	hasRequiredActionAsyncStorage_external = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "actionAsyncStorage", {
		    enumerable: true,
		    get: function() {
		        return _actionasyncstorageinstance.actionAsyncStorageInstance;
		    }
		});
		const _actionasyncstorageinstance = requireActionAsyncStorageInstance();

		
	} (actionAsyncStorage_external));
	return actionAsyncStorage_external;
}

var hasRequiredRedirect;

function requireRedirect () {
	if (hasRequiredRedirect) return redirect.exports;
	hasRequiredRedirect = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getRedirectError: function() {
		        return getRedirectError;
		    },
		    getRedirectStatusCodeFromError: function() {
		        return getRedirectStatusCodeFromError;
		    },
		    getRedirectTypeFromError: function() {
		        return getRedirectTypeFromError;
		    },
		    getURLFromRedirectError: function() {
		        return getURLFromRedirectError;
		    },
		    permanentRedirect: function() {
		        return permanentRedirect;
		    },
		    redirect: function() {
		        return redirect;
		    }
		});
		const _redirectstatuscode = requireRedirectStatusCode();
		const _redirecterror = requireRedirectError();
		const actionAsyncStorage = typeof window === 'undefined' ? requireActionAsyncStorage_external().actionAsyncStorage : undefined;
		function getRedirectError(url, type, statusCode) {
		    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
		    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
		        value: "E394",
		        enumerable: false,
		        configurable: true
		    });
		    error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
		    return error;
		}
		function redirect(/** The URL to redirect to */ url, type) {
		    var _actionAsyncStorage_getStore;
		    type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
		    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
		}
		function permanentRedirect(/** The URL to redirect to */ url, type) {
		    if (type === void 0) type = _redirecterror.RedirectType.replace;
		    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
		}
		function getURLFromRedirectError(error) {
		    if (!(0, _redirecterror.isRedirectError)(error)) return null;
		    // Slices off the beginning of the digest that contains the code and the
		    // separating ';'.
		    return error.digest.split(';').slice(2, -2).join(';');
		}
		function getRedirectTypeFromError(error) {
		    if (!(0, _redirecterror.isRedirectError)(error)) {
		        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
		            value: "E260",
		            enumerable: false,
		            configurable: true
		        });
		    }
		    return error.digest.split(';', 2)[1];
		}
		function getRedirectStatusCodeFromError(error) {
		    if (!(0, _redirecterror.isRedirectError)(error)) {
		        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
		            value: "E260",
		            enumerable: false,
		            configurable: true
		        });
		    }
		    return Number(error.digest.split(';').at(-2));
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (redirect, redirect.exports));
	return redirect.exports;
}

var notFound = {exports: {}};

var httpAccessFallback = {exports: {}};

var hasRequiredHttpAccessFallback;

function requireHttpAccessFallback () {
	if (hasRequiredHttpAccessFallback) return httpAccessFallback.exports;
	hasRequiredHttpAccessFallback = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    HTTPAccessErrorStatus: function() {
		        return HTTPAccessErrorStatus;
		    },
		    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
		        return HTTP_ERROR_FALLBACK_ERROR_CODE;
		    },
		    getAccessFallbackErrorTypeByStatus: function() {
		        return getAccessFallbackErrorTypeByStatus;
		    },
		    getAccessFallbackHTTPStatus: function() {
		        return getAccessFallbackHTTPStatus;
		    },
		    isHTTPAccessFallbackError: function() {
		        return isHTTPAccessFallbackError;
		    }
		});
		const HTTPAccessErrorStatus = {
		    NOT_FOUND: 404,
		    FORBIDDEN: 403,
		    UNAUTHORIZED: 401
		};
		const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
		const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
		function isHTTPAccessFallbackError(error) {
		    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
		        return false;
		    }
		    const [prefix, httpStatus] = error.digest.split(';');
		    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
		}
		function getAccessFallbackHTTPStatus(error) {
		    const httpStatus = error.digest.split(';')[1];
		    return Number(httpStatus);
		}
		function getAccessFallbackErrorTypeByStatus(status) {
		    switch(status){
		        case 401:
		            return 'unauthorized';
		        case 403:
		            return 'forbidden';
		        case 404:
		            return 'not-found';
		        default:
		            return;
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (httpAccessFallback, httpAccessFallback.exports));
	return httpAccessFallback.exports;
}

var hasRequiredNotFound;

function requireNotFound () {
	if (hasRequiredNotFound) return notFound.exports;
	hasRequiredNotFound = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "notFound", {
		    enumerable: true,
		    get: function() {
		        return notFound;
		    }
		});
		const _httpaccessfallback = requireHttpAccessFallback();
		/**
		 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
		 * within a route segment as well as inject a tag.
		 *
		 * `notFound()` can be used in
		 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
		 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
		 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
		 *
		 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
		 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
		 *
		 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
		 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
		function notFound() {
		    // eslint-disable-next-line no-throw-literal
		    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
		        value: "E394",
		        enumerable: false,
		        configurable: true
		    });
		    error.digest = DIGEST;
		    throw error;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (notFound, notFound.exports));
	return notFound.exports;
}

var forbidden = {exports: {}};

var hasRequiredForbidden;

function requireForbidden () {
	if (hasRequiredForbidden) return forbidden.exports;
	hasRequiredForbidden = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "forbidden", {
		    enumerable: true,
		    get: function() {
		        return forbidden;
		    }
		});
		const _httpaccessfallback = requireHttpAccessFallback();
		// TODO: Add `forbidden` docs
		/**
		 * @experimental
		 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
		 * within a route segment as well as inject a tag.
		 *
		 * `forbidden()` can be used in
		 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
		 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
		 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
		 *
		 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
		 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
		function forbidden() {
		    if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
		        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
		            value: "E488",
		            enumerable: false,
		            configurable: true
		        });
		    }
		    // eslint-disable-next-line no-throw-literal
		    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
		        value: "E394",
		        enumerable: false,
		        configurable: true
		    });
		    error.digest = DIGEST;
		    throw error;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (forbidden, forbidden.exports));
	return forbidden.exports;
}

var unauthorized = {exports: {}};

var hasRequiredUnauthorized;

function requireUnauthorized () {
	if (hasRequiredUnauthorized) return unauthorized.exports;
	hasRequiredUnauthorized = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "unauthorized", {
		    enumerable: true,
		    get: function() {
		        return unauthorized;
		    }
		});
		const _httpaccessfallback = requireHttpAccessFallback();
		// TODO: Add `unauthorized` docs
		/**
		 * @experimental
		 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
		 * within a route segment as well as inject a tag.
		 *
		 * `unauthorized()` can be used in
		 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
		 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
		 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
		 *
		 *
		 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
		 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
		function unauthorized() {
		    if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
		        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
		            value: "E411",
		            enumerable: false,
		            configurable: true
		        });
		    }
		    // eslint-disable-next-line no-throw-literal
		    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
		        value: "E394",
		        enumerable: false,
		        configurable: true
		    });
		    error.digest = DIGEST;
		    throw error;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (unauthorized, unauthorized.exports));
	return unauthorized.exports;
}

var unstableRethrow = {exports: {}};

var unstableRethrow_server = {exports: {}};

var dynamicRenderingUtils = {};

var hasRequiredDynamicRenderingUtils;

function requireDynamicRenderingUtils () {
	if (hasRequiredDynamicRenderingUtils) return dynamicRenderingUtils;
	hasRequiredDynamicRenderingUtils = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    isHangingPromiseRejectionError: function() {
		        return isHangingPromiseRejectionError;
		    },
		    makeHangingPromise: function() {
		        return makeHangingPromise;
		    }
		});
		function isHangingPromiseRejectionError(err) {
		    if (typeof err !== 'object' || err === null || !('digest' in err)) {
		        return false;
		    }
		    return err.digest === HANGING_PROMISE_REJECTION;
		}
		const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
		class HangingPromiseRejectionError extends Error {
		    constructor(expression){
		        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`), this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
		    }
		}
		const abortListenersBySignal = new WeakMap();
		function makeHangingPromise(signal, expression) {
		    if (signal.aborted) {
		        return Promise.reject(new HangingPromiseRejectionError(expression));
		    } else {
		        const hangingPromise = new Promise((_, reject)=>{
		            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(expression));
		            let currentListeners = abortListenersBySignal.get(signal);
		            if (currentListeners) {
		                currentListeners.push(boundRejection);
		            } else {
		                const listeners = [
		                    boundRejection
		                ];
		                abortListenersBySignal.set(signal, listeners);
		                signal.addEventListener('abort', ()=>{
		                    for(let i = 0; i < listeners.length; i++){
		                        listeners[i]();
		                    }
		                }, {
		                    once: true
		                });
		            }
		        });
		        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
		        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
		        // your own promise out of it you'll need to ensure you handle the error when it rejects.
		        hangingPromise.catch(ignoreReject);
		        return hangingPromise;
		    }
		}
		function ignoreReject() {}

		
	} (dynamicRenderingUtils));
	return dynamicRenderingUtils;
}

var isPostpone = {};

var hasRequiredIsPostpone;

function requireIsPostpone () {
	if (hasRequiredIsPostpone) return isPostpone;
	hasRequiredIsPostpone = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isPostpone", {
		    enumerable: true,
		    get: function() {
		        return isPostpone;
		    }
		});
		const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
		function isPostpone(error) {
		    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
		}

		
	} (isPostpone));
	return isPostpone;
}

var bailoutToCsr = {};

var hasRequiredBailoutToCsr;

function requireBailoutToCsr () {
	if (hasRequiredBailoutToCsr) return bailoutToCsr;
	hasRequiredBailoutToCsr = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    BailoutToCSRError: function() {
		        return BailoutToCSRError;
		    },
		    isBailoutToCSRError: function() {
		        return isBailoutToCSRError;
		    }
		});
		const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
		class BailoutToCSRError extends Error {
		    constructor(reason){
		        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
		    }
		}
		function isBailoutToCSRError(err) {
		    if (typeof err !== 'object' || err === null || !('digest' in err)) {
		        return false;
		    }
		    return err.digest === BAILOUT_TO_CSR;
		}

		
	} (bailoutToCsr));
	return bailoutToCsr;
}

var isNextRouterError = {exports: {}};

var hasRequiredIsNextRouterError;

function requireIsNextRouterError () {
	if (hasRequiredIsNextRouterError) return isNextRouterError.exports;
	hasRequiredIsNextRouterError = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isNextRouterError", {
		    enumerable: true,
		    get: function() {
		        return isNextRouterError;
		    }
		});
		const _httpaccessfallback = requireHttpAccessFallback();
		const _redirecterror = requireRedirectError();
		function isNextRouterError(error) {
		    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (isNextRouterError, isNextRouterError.exports));
	return isNextRouterError.exports;
}

var dynamicRendering = {};

var hooksServerContext = {exports: {}};

var hasRequiredHooksServerContext;

function requireHooksServerContext () {
	if (hasRequiredHooksServerContext) return hooksServerContext.exports;
	hasRequiredHooksServerContext = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    DynamicServerError: function() {
		        return DynamicServerError;
		    },
		    isDynamicServerError: function() {
		        return isDynamicServerError;
		    }
		});
		const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
		class DynamicServerError extends Error {
		    constructor(description){
		        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
		    }
		}
		function isDynamicServerError(err) {
		    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
		        return false;
		    }
		    return err.digest === DYNAMIC_ERROR_CODE;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (hooksServerContext, hooksServerContext.exports));
	return hooksServerContext.exports;
}

var staticGenerationBailout = {exports: {}};

var hasRequiredStaticGenerationBailout;

function requireStaticGenerationBailout () {
	if (hasRequiredStaticGenerationBailout) return staticGenerationBailout.exports;
	hasRequiredStaticGenerationBailout = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    StaticGenBailoutError: function() {
		        return StaticGenBailoutError;
		    },
		    isStaticGenBailoutError: function() {
		        return isStaticGenBailoutError;
		    }
		});
		const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
		class StaticGenBailoutError extends Error {
		    constructor(...args){
		        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
		    }
		}
		function isStaticGenBailoutError(error) {
		    if (typeof error !== 'object' || error === null || !('code' in error)) {
		        return false;
		    }
		    return error.code === NEXT_STATIC_GEN_BAILOUT;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (staticGenerationBailout, staticGenerationBailout.exports));
	return staticGenerationBailout.exports;
}

var workUnitAsyncStorage_external = {};

var workUnitAsyncStorageInstance = {};

var hasRequiredWorkUnitAsyncStorageInstance;

function requireWorkUnitAsyncStorageInstance () {
	if (hasRequiredWorkUnitAsyncStorageInstance) return workUnitAsyncStorageInstance;
	hasRequiredWorkUnitAsyncStorageInstance = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "workUnitAsyncStorageInstance", {
		    enumerable: true,
		    get: function() {
		        return workUnitAsyncStorageInstance;
		    }
		});
		const _asynclocalstorage = requireAsyncLocalStorage();
		const workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

		
	} (workUnitAsyncStorageInstance));
	return workUnitAsyncStorageInstance;
}

var appRouterHeaders = {exports: {}};

var hasRequiredAppRouterHeaders;

function requireAppRouterHeaders () {
	if (hasRequiredAppRouterHeaders) return appRouterHeaders.exports;
	hasRequiredAppRouterHeaders = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    ACTION_HEADER: function() {
		        return ACTION_HEADER;
		    },
		    FLIGHT_HEADERS: function() {
		        return FLIGHT_HEADERS;
		    },
		    NEXT_ACTION_NOT_FOUND_HEADER: function() {
		        return NEXT_ACTION_NOT_FOUND_HEADER;
		    },
		    NEXT_DID_POSTPONE_HEADER: function() {
		        return NEXT_DID_POSTPONE_HEADER;
		    },
		    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
		        return NEXT_HMR_REFRESH_HASH_COOKIE;
		    },
		    NEXT_HMR_REFRESH_HEADER: function() {
		        return NEXT_HMR_REFRESH_HEADER;
		    },
		    NEXT_IS_PRERENDER_HEADER: function() {
		        return NEXT_IS_PRERENDER_HEADER;
		    },
		    NEXT_REWRITTEN_PATH_HEADER: function() {
		        return NEXT_REWRITTEN_PATH_HEADER;
		    },
		    NEXT_REWRITTEN_QUERY_HEADER: function() {
		        return NEXT_REWRITTEN_QUERY_HEADER;
		    },
		    NEXT_ROUTER_PREFETCH_HEADER: function() {
		        return NEXT_ROUTER_PREFETCH_HEADER;
		    },
		    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
		        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
		    },
		    NEXT_ROUTER_STALE_TIME_HEADER: function() {
		        return NEXT_ROUTER_STALE_TIME_HEADER;
		    },
		    NEXT_ROUTER_STATE_TREE_HEADER: function() {
		        return NEXT_ROUTER_STATE_TREE_HEADER;
		    },
		    NEXT_RSC_UNION_QUERY: function() {
		        return NEXT_RSC_UNION_QUERY;
		    },
		    NEXT_URL: function() {
		        return NEXT_URL;
		    },
		    RSC_CONTENT_TYPE_HEADER: function() {
		        return RSC_CONTENT_TYPE_HEADER;
		    },
		    RSC_HEADER: function() {
		        return RSC_HEADER;
		    }
		});
		const RSC_HEADER = 'RSC';
		const ACTION_HEADER = 'Next-Action';
		const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
		const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
		const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
		const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
		const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
		const NEXT_URL = 'Next-Url';
		const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
		const FLIGHT_HEADERS = [
		    RSC_HEADER,
		    NEXT_ROUTER_STATE_TREE_HEADER,
		    NEXT_ROUTER_PREFETCH_HEADER,
		    NEXT_HMR_REFRESH_HEADER,
		    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
		];
		const NEXT_RSC_UNION_QUERY = '_rsc';
		const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
		const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
		const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
		const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
		const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
		const NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (appRouterHeaders, appRouterHeaders.exports));
	return appRouterHeaders.exports;
}

var hasRequiredWorkUnitAsyncStorage_external;

function requireWorkUnitAsyncStorage_external () {
	if (hasRequiredWorkUnitAsyncStorage_external) return workUnitAsyncStorage_external;
	hasRequiredWorkUnitAsyncStorage_external = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getDraftModeProviderForCacheScope: function() {
		        return getDraftModeProviderForCacheScope;
		    },
		    getExpectedRequestStore: function() {
		        return getExpectedRequestStore;
		    },
		    getHmrRefreshHash: function() {
		        return getHmrRefreshHash;
		    },
		    getPrerenderResumeDataCache: function() {
		        return getPrerenderResumeDataCache;
		    },
		    getRenderResumeDataCache: function() {
		        return getRenderResumeDataCache;
		    },
		    throwForMissingRequestStore: function() {
		        return throwForMissingRequestStore;
		    },
		    workUnitAsyncStorage: function() {
		        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
		    }
		});
		const _workunitasyncstorageinstance = requireWorkUnitAsyncStorageInstance();
		const _approuterheaders = requireAppRouterHeaders();
		function getExpectedRequestStore(callingExpression) {
		    const workUnitStore = _workunitasyncstorageinstance.workUnitAsyncStorageInstance.getStore();
		    if (!workUnitStore) {
		        throwForMissingRequestStore(callingExpression);
		    }
		    switch(workUnitStore.type){
		        case 'request':
		            return workUnitStore;
		        case 'prerender':
		        case 'prerender-client':
		        case 'prerender-ppr':
		        case 'prerender-legacy':
		            // This should not happen because we should have checked it already.
		            throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside a prerender. This is a bug in Next.js.`), "__NEXT_ERROR_CODE", {
		                value: "E401",
		                enumerable: false,
		                configurable: true
		            });
		        case 'cache':
		            throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
		                value: "E37",
		                enumerable: false,
		                configurable: true
		            });
		        case 'unstable-cache':
		            throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
		                value: "E69",
		                enumerable: false,
		                configurable: true
		            });
		        default:
		            const _exhaustiveCheck = workUnitStore;
		            return _exhaustiveCheck;
		    }
		}
		function throwForMissingRequestStore(callingExpression) {
		    throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
		        value: "E251",
		        enumerable: false,
		        configurable: true
		    });
		}
		function getPrerenderResumeDataCache(workUnitStore) {
		    if (workUnitStore.type === 'prerender' || // TODO eliminate fetch caching in client scope and stop exposing this data cache during SSR
		    workUnitStore.type === 'prerender-client' || workUnitStore.type === 'prerender-ppr') {
		        return workUnitStore.prerenderResumeDataCache;
		    }
		    return null;
		}
		function getRenderResumeDataCache(workUnitStore) {
		    switch(workUnitStore.type){
		        case 'request':
		            return workUnitStore.renderResumeDataCache;
		        case 'prerender':
		        case 'prerender-client':
		            if (workUnitStore.renderResumeDataCache) {
		                // If we are in a prerender, we might have a render resume data cache
		                // that is used to read from prefilled caches.
		                return workUnitStore.renderResumeDataCache;
		            }
		        // fallthrough
		        case 'prerender-ppr':
		            // Otherwise we return the mutable resume data cache here as an immutable
		            // version of the cache as it can also be used for reading.
		            return workUnitStore.prerenderResumeDataCache;
		        default:
		            return null;
		    }
		}
		function getHmrRefreshHash(workStore, workUnitStore) {
		    var _workUnitStore_cookies_get;
		    if (!workStore.dev) {
		        return undefined;
		    }
		    return workUnitStore.type === 'cache' || workUnitStore.type === 'prerender' ? workUnitStore.hmrRefreshHash : workUnitStore.type === 'request' ? (_workUnitStore_cookies_get = workUnitStore.cookies.get(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : _workUnitStore_cookies_get.value : undefined;
		}
		function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
		    if (workStore.isDraftMode) {
		        switch(workUnitStore.type){
		            case 'cache':
		            case 'unstable-cache':
		            case 'request':
		                return workUnitStore.draftMode;
		            default:
		                return undefined;
		        }
		    }
		    return undefined;
		}

		
	} (workUnitAsyncStorage_external));
	return workUnitAsyncStorage_external;
}

var workAsyncStorage_external = {};

var workAsyncStorageInstance = {};

var hasRequiredWorkAsyncStorageInstance;

function requireWorkAsyncStorageInstance () {
	if (hasRequiredWorkAsyncStorageInstance) return workAsyncStorageInstance;
	hasRequiredWorkAsyncStorageInstance = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "workAsyncStorageInstance", {
		    enumerable: true,
		    get: function() {
		        return workAsyncStorageInstance;
		    }
		});
		const _asynclocalstorage = requireAsyncLocalStorage();
		const workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

		
	} (workAsyncStorageInstance));
	return workAsyncStorageInstance;
}

var hasRequiredWorkAsyncStorage_external;

function requireWorkAsyncStorage_external () {
	if (hasRequiredWorkAsyncStorage_external) return workAsyncStorage_external;
	hasRequiredWorkAsyncStorage_external = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "workAsyncStorage", {
		    enumerable: true,
		    get: function() {
		        return _workasyncstorageinstance.workAsyncStorageInstance;
		    }
		});
		const _workasyncstorageinstance = requireWorkAsyncStorageInstance();

		
	} (workAsyncStorage_external));
	return workAsyncStorage_external;
}

var metadataConstants = {};

var hasRequiredMetadataConstants;

function requireMetadataConstants () {
	if (hasRequiredMetadataConstants) return metadataConstants;
	hasRequiredMetadataConstants = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    METADATA_BOUNDARY_NAME: function() {
		        return METADATA_BOUNDARY_NAME;
		    },
		    OUTLET_BOUNDARY_NAME: function() {
		        return OUTLET_BOUNDARY_NAME;
		    },
		    VIEWPORT_BOUNDARY_NAME: function() {
		        return VIEWPORT_BOUNDARY_NAME;
		    }
		});
		const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
		const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
		const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';

		
	} (metadataConstants));
	return metadataConstants;
}

var scheduler = {};

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler;
	hasRequiredScheduler = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    atLeastOneTask: function() {
		        return atLeastOneTask;
		    },
		    scheduleImmediate: function() {
		        return scheduleImmediate;
		    },
		    scheduleOnNextTick: function() {
		        return scheduleOnNextTick;
		    },
		    waitAtLeastOneReactRenderTask: function() {
		        return waitAtLeastOneReactRenderTask;
		    }
		});
		const scheduleOnNextTick = (cb)=>{
		    // We use Promise.resolve().then() here so that the operation is scheduled at
		    // the end of the promise job queue, we then add it to the next process tick
		    // to ensure it's evaluated afterwards.
		    //
		    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
		    //
		    Promise.resolve().then(()=>{
		        if (process.env.NEXT_RUNTIME === 'edge') {
		            setTimeout(cb, 0);
		        } else {
		            process.nextTick(cb);
		        }
		    });
		};
		const scheduleImmediate = (cb)=>{
		    if (process.env.NEXT_RUNTIME === 'edge') {
		        setTimeout(cb, 0);
		    } else {
		        setImmediate(cb);
		    }
		};
		function atLeastOneTask() {
		    return new Promise((resolve)=>scheduleImmediate(resolve));
		}
		function waitAtLeastOneReactRenderTask() {
		    if (process.env.NEXT_RUNTIME === 'edge') {
		        return new Promise((r)=>setTimeout(r, 0));
		    } else {
		        return new Promise((r)=>setImmediate(r));
		    }
		}

		
	} (scheduler));
	return scheduler;
}

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */

var hasRequiredDynamicRendering;

function requireDynamicRendering () {
	if (hasRequiredDynamicRendering) return dynamicRendering;
	hasRequiredDynamicRendering = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    Postpone: function() {
		        return Postpone;
		    },
		    PreludeState: function() {
		        return PreludeState;
		    },
		    abortAndThrowOnSynchronousRequestDataAccess: function() {
		        return abortAndThrowOnSynchronousRequestDataAccess;
		    },
		    abortOnSynchronousPlatformIOAccess: function() {
		        return abortOnSynchronousPlatformIOAccess;
		    },
		    accessedDynamicData: function() {
		        return accessedDynamicData;
		    },
		    annotateDynamicAccess: function() {
		        return annotateDynamicAccess;
		    },
		    consumeDynamicAccess: function() {
		        return consumeDynamicAccess;
		    },
		    createDynamicTrackingState: function() {
		        return createDynamicTrackingState;
		    },
		    createDynamicValidationState: function() {
		        return createDynamicValidationState;
		    },
		    createHangingInputAbortSignal: function() {
		        return createHangingInputAbortSignal;
		    },
		    createPostponedAbortSignal: function() {
		        return createPostponedAbortSignal;
		    },
		    formatDynamicAPIAccesses: function() {
		        return formatDynamicAPIAccesses;
		    },
		    getFirstDynamicReason: function() {
		        return getFirstDynamicReason;
		    },
		    isDynamicPostpone: function() {
		        return isDynamicPostpone;
		    },
		    isPrerenderInterruptedError: function() {
		        return isPrerenderInterruptedError;
		    },
		    markCurrentScopeAsDynamic: function() {
		        return markCurrentScopeAsDynamic;
		    },
		    postponeWithTracking: function() {
		        return postponeWithTracking;
		    },
		    throwIfDisallowedDynamic: function() {
		        return throwIfDisallowedDynamic;
		    },
		    throwToInterruptStaticGeneration: function() {
		        return throwToInterruptStaticGeneration;
		    },
		    trackAllowedDynamicAccess: function() {
		        return trackAllowedDynamicAccess;
		    },
		    trackDynamicDataInDynamicRender: function() {
		        return trackDynamicDataInDynamicRender;
		    },
		    trackFallbackParamAccessed: function() {
		        return trackFallbackParamAccessed;
		    },
		    trackSynchronousPlatformIOAccessInDev: function() {
		        return trackSynchronousPlatformIOAccessInDev;
		    },
		    trackSynchronousRequestDataAccessInDev: function() {
		        return trackSynchronousRequestDataAccessInDev;
		    },
		    useDynamicRouteParams: function() {
		        return useDynamicRouteParams;
		    }
		});
		const _react = /*#__PURE__*/ _interop_require_default(require$$0);
		const _hooksservercontext = requireHooksServerContext();
		const _staticgenerationbailout = requireStaticGenerationBailout();
		const _workunitasyncstorageexternal = requireWorkUnitAsyncStorage_external();
		const _workasyncstorageexternal = requireWorkAsyncStorage_external();
		const _dynamicrenderingutils = requireDynamicRenderingUtils();
		const _metadataconstants = requireMetadataConstants();
		const _scheduler = requireScheduler();
		function _interop_require_default(obj) {
		    return obj && obj.__esModule ? obj : {
		        default: obj
		    };
		}
		const hasPostpone = typeof _react.default.unstable_postpone === 'function';
		function createDynamicTrackingState(isDebugDynamicAccesses) {
		    return {
		        isDebugDynamicAccesses,
		        dynamicAccesses: [],
		        syncDynamicErrorWithStack: null
		    };
		}
		function createDynamicValidationState() {
		    return {
		        hasSuspenseAboveBody: false,
		        hasDynamicMetadata: false,
		        hasDynamicViewport: false,
		        hasAllowedDynamic: false,
		        dynamicErrors: []
		    };
		}
		function getFirstDynamicReason(trackingState) {
		    var _trackingState_dynamicAccesses_;
		    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
		}
		function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
		    if (workUnitStore) {
		        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
		            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
		            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
		            // forbidden inside a cache scope.
		            return;
		        }
		    }
		    // If we're forcing dynamic rendering or we're forcing static rendering, we
		    // don't need to do anything here because the entire page is already dynamic
		    // or it's static and it should not throw or postpone here.
		    if (store.forceDynamic || store.forceStatic) return;
		    if (store.dynamicShouldError) {
		        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
		            value: "E553",
		            enumerable: false,
		            configurable: true
		        });
		    }
		    if (workUnitStore) {
		        if (workUnitStore.type === 'prerender-ppr') {
		            postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
		        } else if (workUnitStore.type === 'prerender-legacy') {
		            workUnitStore.revalidate = 0;
		            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
		            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
		                value: "E550",
		                enumerable: false,
		                configurable: true
		            });
		            store.dynamicUsageDescription = expression;
		            store.dynamicUsageStack = err.stack;
		            throw err;
		        } else if (process.env.NODE_ENV === 'development' && workUnitStore && workUnitStore.type === 'request') {
		            workUnitStore.usedDynamic = true;
		        }
		    }
		}
		function trackFallbackParamAccessed(store, expression) {
		    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
		    if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
		    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
		}
		function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
		    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
		    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
		        value: "E558",
		        enumerable: false,
		        configurable: true
		    });
		    prerenderStore.revalidate = 0;
		    store.dynamicUsageDescription = expression;
		    store.dynamicUsageStack = err.stack;
		    throw err;
		}
		function trackDynamicDataInDynamicRender(_store, workUnitStore) {
		    if (workUnitStore) {
		        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
		            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
		            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
		            // forbidden inside a cache scope.
		            return;
		        }
		        // TODO: it makes no sense to have these work unit store types during a dev render.
		        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-client' || workUnitStore.type === 'prerender-legacy') {
		            workUnitStore.revalidate = 0;
		        }
		        if (process.env.NODE_ENV === 'development' && workUnitStore.type === 'request') {
		            workUnitStore.usedDynamic = true;
		        }
		    }
		}
		function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
		    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
		    const error = createPrerenderInterruptedError(reason);
		    prerenderStore.controller.abort(error);
		    const dynamicTracking = prerenderStore.dynamicTracking;
		    if (dynamicTracking) {
		        dynamicTracking.dynamicAccesses.push({
		            // When we aren't debugging, we don't need to create another error for the
		            // stack trace.
		            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
		            expression
		        });
		    }
		}
		function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
		    const dynamicTracking = prerenderStore.dynamicTracking;
		    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
		    // It is important that we set this tracking value after aborting. Aborts are executed
		    // synchronously except for the case where you abort during render itself. By setting this
		    // value late we can use it to determine if any of the aborted tasks are the task that
		    // called the sync IO expression in the first place.
		    if (dynamicTracking) {
		        if (dynamicTracking.syncDynamicErrorWithStack === null) {
		            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
		        }
		    }
		}
		function trackSynchronousPlatformIOAccessInDev(requestStore) {
		    // We don't actually have a controller to abort but we do the semantic equivalent by
		    // advancing the request store out of prerender mode
		    requestStore.prerenderPhase = false;
		}
		function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
		    const prerenderSignal = prerenderStore.controller.signal;
		    if (prerenderSignal.aborted === false) {
		        // TODO it would be better to move this aborted check into the callsite so we can avoid making
		        // the error object when it isn't relevant to the aborting of the prerender however
		        // since we need the throw semantics regardless of whether we abort it is easier to land
		        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
		        // to ideal implementation
		        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
		        // It is important that we set this tracking value after aborting. Aborts are executed
		        // synchronously except for the case where you abort during render itself. By setting this
		        // value late we can use it to determine if any of the aborted tasks are the task that
		        // called the sync IO expression in the first place.
		        const dynamicTracking = prerenderStore.dynamicTracking;
		        if (dynamicTracking) {
		            if (dynamicTracking.syncDynamicErrorWithStack === null) {
		                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
		            }
		        }
		    }
		    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
		}
		const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
		function Postpone({ reason, route }) {
		    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
		    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
		    postponeWithTracking(route, reason, dynamicTracking);
		}
		function postponeWithTracking(route, expression, dynamicTracking) {
		    assertPostpone();
		    if (dynamicTracking) {
		        dynamicTracking.dynamicAccesses.push({
		            // When we aren't debugging, we don't need to create another error for the
		            // stack trace.
		            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
		            expression
		        });
		    }
		    _react.default.unstable_postpone(createPostponeReason(route, expression));
		}
		function createPostponeReason(route, expression) {
		    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
		}
		function isDynamicPostpone(err) {
		    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
		        return isDynamicPostponeReason(err.message);
		    }
		    return false;
		}
		function isDynamicPostponeReason(reason) {
		    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
		}
		if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
		    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
		        value: "E296",
		        enumerable: false,
		        configurable: true
		    });
		}
		const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
		function createPrerenderInterruptedError(message) {
		    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
		        value: "E394",
		        enumerable: false,
		        configurable: true
		    });
		    error.digest = NEXT_PRERENDER_INTERRUPTED;
		    return error;
		}
		function isPrerenderInterruptedError(error) {
		    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
		}
		function accessedDynamicData(dynamicAccesses) {
		    return dynamicAccesses.length > 0;
		}
		function consumeDynamicAccess(serverDynamic, clientDynamic) {
		    // We mutate because we only call this once we are no longer writing
		    // to the dynamicTrackingState and it's more efficient than creating a new
		    // array.
		    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
		    return serverDynamic.dynamicAccesses;
		}
		function formatDynamicAPIAccesses(dynamicAccesses) {
		    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
		        stack = stack.split('\n')// Remove the "Error: " prefix from the first line of the stack trace as
		        // well as the first 4 lines of the stack trace which is the distance
		        // from the user code and the `new Error().stack` call.
		        .slice(4).filter((line)=>{
		            // Exclude Next.js internals from the stack trace.
		            if (line.includes('node_modules/next/')) {
		                return false;
		            }
		            // Exclude anonymous functions from the stack trace.
		            if (line.includes(' (<anonymous>)')) {
		                return false;
		            }
		            // Exclude Node.js internals from the stack trace.
		            if (line.includes(' (node:')) {
		                return false;
		            }
		            return true;
		        }).join('\n');
		        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
		    });
		}
		function assertPostpone() {
		    if (!hasPostpone) {
		        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
		            value: "E224",
		            enumerable: false,
		            configurable: true
		        });
		    }
		}
		function createPostponedAbortSignal(reason) {
		    assertPostpone();
		    const controller = new AbortController();
		    // We get our hands on a postpone instance by calling postpone and catching the throw
		    try {
		        _react.default.unstable_postpone(reason);
		    } catch (x) {
		        controller.abort(x);
		    }
		    return controller.signal;
		}
		function createHangingInputAbortSignal(workUnitStore) {
		    const controller = new AbortController();
		    if (workUnitStore.cacheSignal) {
		        // If we have a cacheSignal it means we're in a prospective render. If the input
		        // we're waiting on is coming from another cache, we do want to wait for it so that
		        // we can resolve this cache entry too.
		        workUnitStore.cacheSignal.inputReady().then(()=>{
		            controller.abort();
		        });
		    } else {
		        // Otherwise we're in the final render and we should already have all our caches
		        // filled. We might still be waiting on some microtasks so we wait one tick before
		        // giving up. When we give up, we still want to render the content of this cache
		        // as deeply as we can so that we can suspend as deeply as possible in the tree
		        // or not at all if we don't end up waiting for the input.
		        (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
		    }
		    return controller.signal;
		}
		function annotateDynamicAccess(expression, prerenderStore) {
		    const dynamicTracking = prerenderStore.dynamicTracking;
		    if (dynamicTracking) {
		        dynamicTracking.dynamicAccesses.push({
		            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
		            expression
		        });
		    }
		}
		function useDynamicRouteParams(expression) {
		    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
		    if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
		        // There are fallback route params, we should track these as dynamic
		        // accesses.
		        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
		        if (workUnitStore) {
		            // We're prerendering with dynamicIO or PPR or both
		            if (workUnitStore.type === 'prerender-client') {
		                // We are in a prerender with dynamicIO semantics
		                // We are going to hang here and never resolve. This will cause the currently
		                // rendering component to effectively be a dynamic hole
		                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, expression));
		            } else if (workUnitStore.type === 'prerender-ppr') {
		                // We're prerendering with PPR
		                postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
		            } else if (workUnitStore.type === 'prerender-legacy') {
		                throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
		            }
		        }
		    }
		}
		const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
		const hasSuspenseAfterBodyOrHtmlRegex = /\n\s+at (?:body|html) \(<anonymous>\)[\s\S]*?\n\s+at Suspense \(<anonymous>\)/;
		const hasMetadataRegex = new RegExp(`\\n\\s+at ${_metadataconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
		const hasViewportRegex = new RegExp(`\\n\\s+at ${_metadataconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
		const hasOutletRegex = new RegExp(`\\n\\s+at ${_metadataconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
		function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
		    if (hasOutletRegex.test(componentStack)) {
		        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
		        return;
		    } else if (hasMetadataRegex.test(componentStack)) {
		        dynamicValidation.hasDynamicMetadata = true;
		        return;
		    } else if (hasViewportRegex.test(componentStack)) {
		        dynamicValidation.hasDynamicViewport = true;
		        return;
		    } else if (hasSuspenseAfterBodyOrHtmlRegex.test(componentStack)) {
		        // This prerender has a Suspense boundary above the body which
		        // effectively opts the page into allowing 100% dynamic rendering
		        dynamicValidation.hasAllowedDynamic = true;
		        dynamicValidation.hasSuspenseAboveBody = true;
		        return;
		    } else if (hasSuspenseRegex.test(componentStack)) {
		        // this error had a Suspense boundary above it so we don't need to report it as a source
		        // of disallowed
		        dynamicValidation.hasAllowedDynamic = true;
		        return;
		    } else if (clientDynamic.syncDynamicErrorWithStack) {
		        // This task was the task that called the sync error.
		        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
		        return;
		    } else {
		        const message = `Route "${workStore.route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
		        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
		        dynamicValidation.dynamicErrors.push(error);
		        return;
		    }
		}
		/**
		 * In dev mode, we prefer using the owner stack, otherwise the provided
		 * component stack is used.
		 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
		    const ownerStack = process.env.NODE_ENV !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
		    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
		        value: "E394",
		        enumerable: false,
		        configurable: true
		    });
		    error.stack = error.name + ': ' + message + (ownerStack ?? componentStack);
		    return error;
		}
		var PreludeState = /*#__PURE__*/ function(PreludeState) {
		    PreludeState[PreludeState["Full"] = 0] = "Full";
		    PreludeState[PreludeState["Empty"] = 1] = "Empty";
		    PreludeState[PreludeState["Errored"] = 2] = "Errored";
		    return PreludeState;
		}({});
		function logDisallowedDynamicError(workStore, error) {
		    console.error(error);
		    if (!workStore.dev) {
		        if (workStore.hasReadableErrorStacks) {
		            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
		        } else {
		            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
		        }
		    }
		}
		function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
		    if (workStore.invalidDynamicUsageError) {
		        logDisallowedDynamicError(workStore, workStore.invalidDynamicUsageError);
		        throw new _staticgenerationbailout.StaticGenBailoutError();
		    }
		    if (prelude !== 0) {
		        if (dynamicValidation.hasSuspenseAboveBody) {
		            // This route has opted into allowing fully dynamic rendering
		            // by including a Suspense boundary above the body. In this case
		            // a lack of a shell is not considered disallowed so we simply return
		            return;
		        }
		        if (serverDynamic.syncDynamicErrorWithStack) {
		            // There is no shell and the server did something sync dynamic likely
		            // leading to an early termination of the prerender before the shell
		            // could be completed. We terminate the build/validating render.
		            logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
		            throw new _staticgenerationbailout.StaticGenBailoutError();
		        }
		        // We didn't have any sync bailouts but there may be user code which
		        // blocked the root. We would have captured these during the prerender
		        // and can log them here and then terminate the build/validating render
		        const dynamicErrors = dynamicValidation.dynamicErrors;
		        if (dynamicErrors.length > 0) {
		            for(let i = 0; i < dynamicErrors.length; i++){
		                logDisallowedDynamicError(workStore, dynamicErrors[i]);
		            }
		            throw new _staticgenerationbailout.StaticGenBailoutError();
		        }
		        // If we got this far then the only other thing that could be blocking
		        // the root is dynamic Viewport. If this is dynamic then
		        // you need to opt into that by adding a Suspense boundary above the body
		        // to indicate your are ok with fully dynamic rendering.
		        if (dynamicValidation.hasDynamicViewport) {
		            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
		            throw new _staticgenerationbailout.StaticGenBailoutError();
		        }
		        if (prelude === 1) {
		            // If we ever get this far then we messed up the tracking of invalid dynamic.
		            // We still adhere to the constraint that you must produce a shell but invite the
		            // user to report this as a bug in Next.js.
		            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
		            throw new _staticgenerationbailout.StaticGenBailoutError();
		        }
		    } else {
		        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
		            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
		            throw new _staticgenerationbailout.StaticGenBailoutError();
		        }
		    }
		}

		
	} (dynamicRendering));
	return dynamicRendering;
}

var hasRequiredUnstableRethrow_server;

function requireUnstableRethrow_server () {
	if (hasRequiredUnstableRethrow_server) return unstableRethrow_server.exports;
	hasRequiredUnstableRethrow_server = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "unstable_rethrow", {
		    enumerable: true,
		    get: function() {
		        return unstable_rethrow;
		    }
		});
		const _dynamicrenderingutils = requireDynamicRenderingUtils();
		const _ispostpone = requireIsPostpone();
		const _bailouttocsr = requireBailoutToCsr();
		const _isnextroutererror = requireIsNextRouterError();
		const _dynamicrendering = requireDynamicRendering();
		const _hooksservercontext = requireHooksServerContext();
		function unstable_rethrow(error) {
		    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
		        throw error;
		    }
		    if (error instanceof Error && 'cause' in error) {
		        unstable_rethrow(error.cause);
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (unstableRethrow_server, unstableRethrow_server.exports));
	return unstableRethrow_server.exports;
}

var unstableRethrow_browser = {exports: {}};

var hasRequiredUnstableRethrow_browser;

function requireUnstableRethrow_browser () {
	if (hasRequiredUnstableRethrow_browser) return unstableRethrow_browser.exports;
	hasRequiredUnstableRethrow_browser = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "unstable_rethrow", {
		    enumerable: true,
		    get: function() {
		        return unstable_rethrow;
		    }
		});
		const _bailouttocsr = requireBailoutToCsr();
		const _isnextroutererror = requireIsNextRouterError();
		function unstable_rethrow(error) {
		    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
		        throw error;
		    }
		    if (error instanceof Error && 'cause' in error) {
		        unstable_rethrow(error.cause);
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (unstableRethrow_browser, unstableRethrow_browser.exports));
	return unstableRethrow_browser.exports;
}

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */

var hasRequiredUnstableRethrow;

function requireUnstableRethrow () {
	if (hasRequiredUnstableRethrow) return unstableRethrow.exports;
	hasRequiredUnstableRethrow = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "unstable_rethrow", {
		    enumerable: true,
		    get: function() {
		        return unstable_rethrow;
		    }
		});
		const unstable_rethrow = typeof window === 'undefined' ? requireUnstableRethrow_server().unstable_rethrow : requireUnstableRethrow_browser().unstable_rethrow;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (unstableRethrow, unstableRethrow.exports));
	return unstableRethrow.exports;
}

/** @internal */

var hasRequiredNavigation_reactServer;

function requireNavigation_reactServer () {
	if (hasRequiredNavigation_reactServer) return navigation_reactServer.exports;
	hasRequiredNavigation_reactServer = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    ReadonlyURLSearchParams: function() {
		        return ReadonlyURLSearchParams;
		    },
		    RedirectType: function() {
		        return _redirecterror.RedirectType;
		    },
		    forbidden: function() {
		        return _forbidden.forbidden;
		    },
		    notFound: function() {
		        return _notfound.notFound;
		    },
		    permanentRedirect: function() {
		        return _redirect.permanentRedirect;
		    },
		    redirect: function() {
		        return _redirect.redirect;
		    },
		    unauthorized: function() {
		        return _unauthorized.unauthorized;
		    },
		    unstable_rethrow: function() {
		        return _unstablerethrow.unstable_rethrow;
		    }
		});
		const _redirect = requireRedirect();
		const _redirecterror = requireRedirectError();
		const _notfound = requireNotFound();
		const _forbidden = requireForbidden();
		const _unauthorized = requireUnauthorized();
		const _unstablerethrow = requireUnstableRethrow();
		class ReadonlyURLSearchParamsError extends Error {
		    constructor(){
		        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
		    }
		}
		class ReadonlyURLSearchParams extends URLSearchParams {
		    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
		        throw new ReadonlyURLSearchParamsError();
		    }
		    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
		        throw new ReadonlyURLSearchParamsError();
		    }
		    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
		        throw new ReadonlyURLSearchParamsError();
		    }
		    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
		        throw new ReadonlyURLSearchParamsError();
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (navigation_reactServer, navigation_reactServer.exports));
	return navigation_reactServer.exports;
}

var serverInsertedHtml_sharedRuntime = {};

var hasRequiredServerInsertedHtml_sharedRuntime;

function requireServerInsertedHtml_sharedRuntime () {
	if (hasRequiredServerInsertedHtml_sharedRuntime) return serverInsertedHtml_sharedRuntime;
	hasRequiredServerInsertedHtml_sharedRuntime = 1;
	(function (exports) {
		'use client';
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    ServerInsertedHTMLContext: function() {
		        return ServerInsertedHTMLContext;
		    },
		    useServerInsertedHTML: function() {
		        return useServerInsertedHTML;
		    }
		});
		const _interop_require_wildcard = /*@__PURE__*/ require_interop_require_wildcard();
		const _react = /*#__PURE__*/ _interop_require_wildcard._(require$$0);
		const ServerInsertedHTMLContext = /*#__PURE__*/ _react.default.createContext(null);
		function useServerInsertedHTML(callback) {
		    const addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
		    // Should have no effects on client where there's no flush effects provider
		    if (addInsertedServerHTMLCallback) {
		        addInsertedServerHTMLCallback(callback);
		    }
		}

		
	} (serverInsertedHtml_sharedRuntime));
	return serverInsertedHtml_sharedRuntime;
}

var bailoutToClientRendering = {exports: {}};

var hasRequiredBailoutToClientRendering;

function requireBailoutToClientRendering () {
	if (hasRequiredBailoutToClientRendering) return bailoutToClientRendering.exports;
	hasRequiredBailoutToClientRendering = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "bailoutToClientRendering", {
		    enumerable: true,
		    get: function() {
		        return bailoutToClientRendering;
		    }
		});
		const _bailouttocsr = requireBailoutToCsr();
		const _workasyncstorageexternal = requireWorkAsyncStorage_external();
		const _workunitasyncstorageexternal = requireWorkUnitAsyncStorage_external();
		function bailoutToClientRendering(reason) {
		    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
		    if (workStore == null ? void 0 : workStore.forceStatic) return;
		    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
		    if (workUnitStore) {
		        switch(workUnitStore.type){
		            case 'prerender':
		            case 'prerender-client':
		            case 'prerender-ppr':
		            case 'prerender-legacy':
		                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
		                    value: "E394",
		                    enumerable: false,
		                    configurable: true
		                });
		        }
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (bailoutToClientRendering, bailoutToClientRendering.exports));
	return bailoutToClientRendering.exports;
}

var hasRequiredNavigation$1;

function requireNavigation$1 () {
	if (hasRequiredNavigation$1) return navigation$2.exports;
	hasRequiredNavigation$1 = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    ReadonlyURLSearchParams: function() {
		        return _navigationreactserver.ReadonlyURLSearchParams;
		    },
		    RedirectType: function() {
		        return _navigationreactserver.RedirectType;
		    },
		    ServerInsertedHTMLContext: function() {
		        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
		    },
		    forbidden: function() {
		        return _navigationreactserver.forbidden;
		    },
		    notFound: function() {
		        return _navigationreactserver.notFound;
		    },
		    permanentRedirect: function() {
		        return _navigationreactserver.permanentRedirect;
		    },
		    redirect: function() {
		        return _navigationreactserver.redirect;
		    },
		    unauthorized: function() {
		        return _navigationreactserver.unauthorized;
		    },
		    unstable_rethrow: function() {
		        return _navigationreactserver.unstable_rethrow;
		    },
		    useParams: function() {
		        return useParams;
		    },
		    usePathname: function() {
		        return usePathname;
		    },
		    useRouter: function() {
		        return useRouter;
		    },
		    useSearchParams: function() {
		        return useSearchParams;
		    },
		    useSelectedLayoutSegment: function() {
		        return useSelectedLayoutSegment;
		    },
		    useSelectedLayoutSegments: function() {
		        return useSelectedLayoutSegments;
		    },
		    useServerInsertedHTML: function() {
		        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
		    }
		});
		const _react = require$$0;
		const _approutercontextsharedruntime = requireAppRouterContext_sharedRuntime();
		const _hooksclientcontextsharedruntime = requireHooksClientContext_sharedRuntime();
		const _getsegmentvalue = requireGetSegmentValue();
		const _segment = requireSegment();
		const _navigationreactserver = requireNavigation_reactServer();
		const _serverinsertedhtmlsharedruntime = requireServerInsertedHtml_sharedRuntime();
		const useDynamicRouteParams = typeof window === 'undefined' ? requireDynamicRendering().useDynamicRouteParams : undefined;
		function useSearchParams() {
		    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
		    // In the case where this is `null`, the compat types added in
		    // `next-env.d.ts` will add a new overload that changes the return type to
		    // include `null`.
		    const readonlySearchParams = (0, _react.useMemo)(()=>{
		        if (!searchParams) {
		            // When the router is not ready in pages, we won't have the search params
		            // available.
		            return null;
		        }
		        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
		    }, [
		        searchParams
		    ]);
		    if (typeof window === 'undefined') {
		        // AsyncLocalStorage should not be included in the client bundle.
		        const { bailoutToClientRendering } = requireBailoutToClientRendering();
		        // TODO-APP: handle dynamic = 'force-static' here and on the client
		        bailoutToClientRendering('useSearchParams()');
		    }
		    return readonlySearchParams;
		}
		function usePathname() {
		    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('usePathname()');
		    // In the case where this is `null`, the compat types added in `next-env.d.ts`
		    // will add a new overload that changes the return type to include `null`.
		    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
		}
		function useRouter() {
		    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
		    if (router === null) {
		        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
		            value: "E238",
		            enumerable: false,
		            configurable: true
		        });
		    }
		    return router;
		}
		function useParams() {
		    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useParams()');
		    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
		}
		/** Get the canonical parameters from the current level to the leaf node. */ // Client components API
		function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
		    if (first === void 0) first = true;
		    if (segmentPath === void 0) segmentPath = [];
		    let node;
		    if (first) {
		        // Use the provided parallel route key on the first parallel route
		        node = tree[1][parallelRouteKey];
		    } else {
		        // After first parallel route prefer children, if there's no children pick the first parallel route.
		        const parallelRoutes = tree[1];
		        var _parallelRoutes_children;
		        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
		    }
		    if (!node) return segmentPath;
		    const segment = node[0];
		    let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
		    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
		        return segmentPath;
		    }
		    segmentPath.push(segmentValue);
		    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
		}
		function useSelectedLayoutSegments(parallelRouteKey) {
		    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
		    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegments()');
		    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
		    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
		    if (!context) return null;
		    return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
		}
		function useSelectedLayoutSegment(parallelRouteKey) {
		    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
		    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegment()');
		    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
		    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
		        return null;
		    }
		    const selectedLayoutSegment = parallelRouteKey === 'children' ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
		    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
		    // and returning an internal value like `__DEFAULT__` would be confusing.
		    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (navigation$2, navigation$2.exports));
	return navigation$2.exports;
}

var navigation$1;
var hasRequiredNavigation;

function requireNavigation () {
	if (hasRequiredNavigation) return navigation$1;
	hasRequiredNavigation = 1;
	navigation$1 = requireNavigation$1();
	return navigation$1;
}

var navigationExports = requireNavigation();

const navigation = [
    {
        title: 'Getting Started',
        href: '/docs',
        icon: jsx(Book, { size: 16 }),
    },
    {
        title: 'Installation',
        href: '/installation',
        icon: jsx(Download, { size: 16 }),
    },
    {
        title: 'Components',
        href: '/components',
        icon: jsx(Layers, { size: 16 }),
        items: [
            { title: 'Button', href: '/components/button' },
            { title: 'ButtonGroup', href: '/components/button-group' },
            { title: 'IconButton', href: '/components/icon-button' },
            { title: 'Input', href: '/components/input' },
            { title: 'CopyButton', href: '/components/copy-button' },
            { title: 'CodeBlock', href: '/components/code-block' },
            { title: 'Breadcrumb', href: '/components/breadcrumb' },
            { title: 'Modal', href: '/components/modal' },
            { title: 'Card', href: '/components/card' },
            { title: 'Badge', href: '/components/badge' },
            { title: 'Tooltip', href: '/components/tooltip' },
        ],
    },
];
function ThemeDropdown({ theme, setTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    const themes = [
        { value: 'light', label: 'Light', icon: jsx(Sun, { size: 14 }) },
        { value: 'dark', label: 'Dark', icon: jsx(Moon, { size: 14 }) },
        { value: 'system', label: 'System', icon: jsx(Monitor, { size: 14 }) },
    ];
    const currentTheme = themes.find(t => t.value === theme) || themes[0];
    return (jsxs("div", { className: "relative", children: [jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setIsOpen(!isOpen), className: "navbar-theme-button relative flex items-center gap-2 cursor-pointer", children: [currentTheme.icon, jsx(ChevronDown, { size: 12 })] }), isOpen && (jsx("div", { className: "absolute right-0 mt-1 w-28 border border-background bg-background z-50 shadow-sm", children: themes.map((themeOption) => (jsxs("button", { className: "w-full px-3 py-2 text-left text-sm hover:bg-foreground hover:text-background flex items-center gap-2 bg-background text-foreground border-none cursor-pointer", onClick: () => {
                        setTheme(themeOption.value);
                        setIsOpen(false);
                    }, children: [themeOption.icon, themeOption.label] }, themeOption.value))) })), isOpen && (jsx("div", { className: "fixed inset-0 z-40", onClick: () => setIsOpen(false) }))] }));
}
function Sidebar({ navigation, pathname, isOpen, onClose }) {
    const [expandedItems, setExpandedItems] = useState(['Components']);
    const [searchQuery, setSearchQuery] = useState('');
    const toggleExpanded = (title) => {
        setExpandedItems(prev => prev.includes(title)
            ? prev.filter(item => item !== title)
            : [...prev, title]);
    };
    const isExpanded = (title) => expandedItems.includes(title);
    // Filter navigation based on search query
    const filteredNavigation = navigation.filter(item => {
        if (!searchQuery)
            return true;
        const query = searchQuery.toLowerCase();
        // Check if main item matches
        if (item.title.toLowerCase().includes(query))
            return true;
        // Check if any sub-item matches
        if (item.items) {
            return item.items.some(subItem => subItem.title.toLowerCase().includes(query));
        }
        return false;
    });
    return (jsx("aside", { className: `fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] border-r border-current overflow-y-auto bg-foreground z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`, children: jsxs("div", { className: "p-4", children: [jsx("div", { className: "flex justify-end lg:hidden mb-4", children: jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, className: "text-background hover:bg-background hover:text-foreground", children: jsx(X, { size: 16 }) }) }), jsxs("div", { className: "relative mb-4", children: [jsx(Search, { size: 16, className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-background opacity-70" }), jsx("input", { type: "text", placeholder: "Search components...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full pl-10 pr-3 py-2 bg-transparent text-background border border-background placeholder:text-background placeholder:opacity-80 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-background focus:border-background" })] }), jsx("nav", { className: "space-y-2", children: filteredNavigation.map((item) => (jsx("div", { children: item.items ? (
                        // Dropdown item
                        jsxs("div", { children: [jsxs("button", { onClick: () => toggleExpanded(item.title), className: `w-full flex items-center justify-between px-3 py-2 text-sm font-medium border cursor-pointer ${pathname === item.href
                                        ? 'bg-background text-foreground border-background'
                                        : 'text-background border-transparent hover:border-background'}`, children: [jsxs("div", { className: "flex items-center gap-2", children: [item.icon, item.title] }), isExpanded(item.title) ?
                                            jsx(ChevronDown, { size: 14 }) :
                                            jsx(ChevronRight, { size: 14 })] }), isExpanded(item.title) && (jsx("div", { className: "ml-4 mt-1 space-y-1", children: item.items.map((subItem) => (jsx(Link, { href: subItem.href, className: `block px-3 py-1 text-sm border cursor-pointer ${pathname === subItem.href
                                            ? 'bg-background text-foreground border-background'
                                            : 'text-background border-transparent hover:border-background'}`, children: subItem.title }, subItem.href))) }))] })) : (
                        // Regular item
                        jsxs(Link, { href: item.href, className: `flex items-center gap-2 px-3 py-2 text-sm font-medium border cursor-pointer ${pathname === item.href
                                ? 'bg-background text-foreground border-background'
                                : 'text-background border-transparent hover:border-background'}`, children: [item.icon, item.title] })) }, item.href))) })] }) }));
}
function DocLayout({ children }) {
    const { theme, setTheme } = useTheme();
    const pathname = navigationExports.usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // Generate breadcrumbs based on current path
    const generateBreadcrumbs = () => {
        const pathSegments = pathname.split('/').filter(Boolean);
        const breadcrumbs = [{ label: 'Home', href: '/' }];
        pathSegments.forEach((segment, index) => {
            const href = '/' + pathSegments.slice(0, index + 1).join('/');
            const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');
            const isLast = index === pathSegments.length - 1;
            breadcrumbs.push({ label, href: isLast ? undefined : href });
        });
        return breadcrumbs;
    };
    return (jsxs("div", { className: "min-h-screen", children: [jsx("header", { className: "fixed top-0 left-0 right-0 h-16 border-b border-current bg-foreground z-50", children: jsxs("div", { className: "flex items-center justify-between h-full px-6", children: [jsxs("div", { className: "flex items-center gap-4", children: [jsx(Button, { variant: "ghost", size: "sm", onClick: () => setIsSidebarOpen(!isSidebarOpen), className: "lg:hidden text-background hover:bg-background hover:text-foreground", children: jsx(Menu, { size: 16 }) }), jsx(Link, { href: "/", className: "text-xl font-bold text-background cursor-pointer", children: "theReactUI" })] }), jsx(ThemeDropdown, { theme: theme, setTheme: setTheme })] }) }), isSidebarOpen && (jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden", onClick: () => setIsSidebarOpen(false) })), jsx(Sidebar, { navigation: navigation, pathname: pathname, isOpen: isSidebarOpen, onClose: () => setIsSidebarOpen(false) }), jsx("main", { className: "lg:ml-64 pt-16", children: jsxs("div", { className: "max-w-4xl mx-auto p-8", children: [jsx(Breadcrumb, { items: generateBreadcrumbs(), className: "mb-6" }), children] }) })] }));
}

export { Badge, Breadcrumb, Button, ButtonGroup, Card, CardContent, CardFooter, CardHeader, CodeBlock, CopyButton, DocLayout, IconButton, Input, Modal, TheReactUIProvider, Tooltip, useTheReactUI };
//# sourceMappingURL=index.esm.js.map
