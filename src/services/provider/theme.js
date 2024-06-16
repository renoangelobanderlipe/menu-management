export const theme = {
  typography: {
    defaultProps: {
      variant: 'paragraph',
      color: 'inherit',
      textGradient: false,
      className: '',
    },
    valid: {
      variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'lead', 'paragraph', 'small'],
      colors: ['inherit', 'current', 'black', 'blue-gray', 'gray', 'green', 'red'],
    },
    styles: {
      variants: {
        h1: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-[64px]',
          fontWeight: 'font-extrabold',
          lineHeight: 'leading-normal',
        },
        h2: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-[32px]',
          fontWeight: 'font-bold',
          lineHeight: 'leading-normal',
        },
        h3: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-[24px]',
          fontWeight: 'font-extrabold',
          lineHeight: 'leading-none',
        },
        h4: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-[20px]',
          fontWeight: 'font-semibold',
          lineHeight: 'leading-normal',
        },
        h5: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-[14px]',
          fontWeight: 'font-semibold',
          lineHeight: 'leading-normal',
        },
        h6: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-[14px]',
          fontWeight: 'font-medium',
          lineHeight: 'leading-normal',
        },
        lead: {
          display: 'block',
          fontSmoothing: 'antialiased',
          fontFamily: 'font-sans',
          fontSize: 'text-xl',
          fontWeight: 'font-normal',
          lineHeight: 'leading-relaxed',
        },
        paragraph: {
          display: 'block',
          fontSmoothing: 'antialiased',
          fontFamily: 'font-sans',
          fontSize: 'text-[14px]',
          fontWeight: 'font-normal',
          lineHeight: 'leading-[20px]',
        },
        small: {
          display: 'block',
          fontSmoothing: 'antialiased',
          fontFamily: 'font-sans',
          fontSize: 'text-[12px]',
          fontWeight: 'font-light',
          lineHeight: 'leading-normal',
        },
      },
      textGradient: {
        bgClip: 'bg-clip-text',
        color: 'text-transparent',
      },
      colors: {
        inherit: {
          color: 'text-inherit',
        },
        current: {
          color: 'text-current',
        },
        black: {
          color: 'text-light-headings dark:text-dark-headings',
        },

        gray: {
          color: 'text-light-body-text dark:text-dark-body-text',
        },

        green: {
          color: 'text-primary-500',
          gradient: 'bg-gradient-to-tr from-green-600 to-green-400',
        },

        blue: {
          color: 'text-info-500',
          gradient: 'bg-gradient-to-tr from-blue-600 to-blue-400',
        },

        yellow: {
          color: 'text-warning-500',
        },

        red: {
          color: 'text-danger-500',
          gradient: 'bg-gradient-to-tr from-red-600 to-red-400',
        },
      },
    },
  },
  input: {
    defaultProps: {
      variant: 'outlined',
      size: 'md',
      color: 'gray',
      label: '',
      error: false,
      success: false,
      icon: undefined,
      labelProps: {
        className: 'hidden',
      },
      containerProps: undefined,
      shrink: false,
      className: 'flex justify-between',
    },
    valid: {
      variants: ['standard', 'outlined', 'static'],
      sizes: ['md', 'lg'],
      colors: ['black', 'gray', 'red'],
    },
    styles: {
      base: {
        container: {
          position: 'relative',
          width: 'w-full',
          minWidth: 'min-w-[150px] lg:min-w-[200px] 2xl:min-w-[250px]',
        },
        input: {
          background: 'bg-white dark:bg-neutrals-800',
          border:
            '!border !border-t placeholder:text-gray-500 dark:placeholder:text-dark-headings placeholder:opacity-100 dark:placeholder:opacity-40 ',
          peer: 'peer',
          width: 'w-full',
          height: 'h-full',
          bg: 'bg-transparent',
          color: 'text-blue-gray-700 dark:text-dark-headings',
          fontFamily: 'font-sans',
          fontWeight: 'font-normal',
          outline: 'outline outline-0 focus:outline-0',
          disabled: 'disabled:bg-blue-gray-50 disabled:border-0',
          transition: 'transition-all',
        },
        icon: {
          display: 'grid',
          placeItems: 'place-items-center',
          position: 'absolute',
          color: 'text-blue-gray-500',
        },
        asterisk: {
          display: 'inline-block',
          color: 'text-red-500',
          ml: 'ml-0.5',
        },
      },
      variants: {
        outlined: {
          base: {
            input: {
              borderWidth: 'placeholder-shown:border',
              borderColor: 'placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200',
              floated: {
                borderWidth: 'border focus:border-2',
                borderColor: 'border-t-transparent focus:border-t-transparent',
              },
            },
            inputWithIcon: {
              pr: '!pr-9',
            },
            icon: {
              top: 'top-2/4',
              right: 'right-3',
              transform: '-translate-y-2/4',
            },
            label: {
              position: '-top-1.5',
              fontSize: 'peer-placeholder-shown:text-sm',
              floated: {
                fontSize: 'text-[11px] peer-focus:text-[11px]',
              },
              before: {
                content: "before:content[' ']",
                display: 'before:block',
                boxSizing: 'before:box-border',
                width: 'before:w-2.5',
                height: 'before:h-1.5',
                mt: 'before:mt-[6.5px]',
                mr: 'before:mr-1',
                borderColor: 'peer-placeholder-shown:before:border-transparent',
                borderRadius: 'before:rounded-tl-md',
                floated: {
                  bt: 'before:border-t peer-focus:before:border-t-2',
                  bl: 'before:border-l peer-focus:before:border-l-2',
                },
                pointerEvents: 'before:pointer-events-none',
                transition: 'before:transition-all',
                disabled: 'peer-disabled:before:border-transparent',
              },
              after: {
                content: "after:content[' ']",
                display: 'after:block',
                flexGrow: 'after:flex-grow',
                boxSizing: 'after:box-border',
                width: 'after:w-2.5',
                height: 'after:h-1.5',
                mt: 'after:mt-[6.5px]',
                ml: 'after:ml-1',
                borderColor: 'peer-placeholder-shown:after:border-transparent',
                borderRadius: 'after:rounded-tr-md',
                floated: {
                  bt: 'after:border-t peer-focus:after:border-t-2',
                  br: 'after:border-r peer-focus:after:border-r-2',
                },
                pointerEvents: 'after:pointer-events-none',
                transition: 'after:transition-all',
                disabled: 'peer-disabled:after:border-transparent',
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-10',
              },
              input: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-2.5',
                borderRadius: 'rounded-[7px]',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-[3.75]',
              },
              icon: {
                width: 'w-5',
                height: 'h-5',
              },
            },
            lg: {
              container: {
                height: 'h-11',
              },
              input: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-3',
                borderRadius: 'rounded-md',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-[4.1]',
              },
              icon: {
                width: 'w-6',
                height: 'h-6',
              },
            },
          },
          colors: {
            input: {
              gray: {
                borderColor: '!border-neutrals-300 dark:!border-neutrals-700',
                borderColorFocused:
                  'focus:!border-neutrals-300  focus:dark:!border-neutrals-700 !border-t-neutrals-300 dark:!border-t-neutrals-700 focus:!border-t-neutrals-300 focus:dark:!border-t-neutrals-700 ',
              },
            },
          },
          error: {
            input: {
              borderColor: '!border-danger-300',
              borderColorFocused: 'focus:!border-danger-300  !border-t-danger-300 focus:!border-t-danger-300 ',
            },
          },

          shrink: {
            input: {
              borderTop: '!border-t-transparent',
            },
            label: {
              fontSize: '!text-[11px]',
              lineHeight: '!leading-tight',
              borderColor: 'before:!border-blue-gray-200 after:!border-blue-gray-200',
            },
          },
        },
      },
    },
  },
  button: {
    defaultProps: {
      variant: 'filled',
      size: 'lg',
      color: 'green',
      fullWidth: false,
      ripple: true,
      className: 'gap-2',
    },
    valid: {
      variants: ['filled', 'text'],
      sizes: ['sm', 'md', 'lg'],
      colors: [
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        initial: {
          display: 'flex ',
          width: 'w-fit',
          verticalAlign: 'items-center',
          horizontalAlign: 'justify-center',
          userSelect: 'select-none',
          fontFamily: 'font-sans',
          fontWeight: 'font-normal',
          textAlign: 'text-center',
          textTransform: 'capitalize',
          transition: 'transition-all',
          disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
        },
        fullWidth: {
          display: 'flex',
          width: 'w-full',
          verticalAlign: 'items-center',
          horizontalAlign: 'justify-center',
        },
      },
      sizes: {
        sm: {
          fontSize: 'text-xs',
          py: 'py-2',
          px: 'px-4',
          borderRadius: 'rounded-lg',
        },
        md: {
          fontSize: 'text-[14px]',
          py: 'py-3',
          px: 'px-3',
          borderRadius: 'rounded-lg',
        },
        lg: {
          fontSize: 'text-[14px]',
          py: 'py-[14px]',
          px: 'px-4',
          borderRadius: 'rounded-lg',
        },
      },
      variants: {
        filled: {
          green: {
            backgroud: 'bg-primary-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-primary-500/20',
            hover: 'hover:shadow-lg hover:shadow-primary-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },

          red: {
            backgroud: 'bg-danger-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-danger-500/20',
            hover: 'hover:shadow-lg hover:shadow-danger-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
        },

        text: {
          gray: {
            color: 'text-neutrals-500',
            hover: 'hover:bg-neutrals-500/10',
            active: 'active:bg-neutrals-500/30',
          },

          green: {
            color: 'text-primary-500',
            hover: 'hover:bg-primary-500/10',
            active: 'active:bg-primary-500/30',
          },

          red: {
            color: 'text-danger-500',
            hover: 'hover:bg-danger-500/10',
            active: 'active:bg-danger-500/30',
          },
        },
      },
    },
  },
  menu: {
    defaultProps: {
      placement: 'bottom-end',
      offset: 5,
      dismiss: {
        itemPress: true,
      },
      animate: {
        unmount: {},
        mount: {},
      },
      lockScroll: false,
    },
    styles: {
      base: {
        menu: {
          bg: 'bg-white dark:bg-dark-container',
          width: 'w-fit',
          minWidth: 'min-w-[150px]',
          p: 'p-3',
          border: 'border-none',
          borderRadius: 'rounded-[8px]',
          boxShadow: 'shadow-container',
          fontFamily: 'font-sans',
          fontSize: 'text-sm',
          fontWeight: 'font-normal',
          color: 'text-blue-gray-500',
          overflow: 'overflow-auto',
          outline: 'focus:outline-none',
          zIndex: 'z-[999]',
        },
        item: {
          initial: {
            display: 'flex items-center gap-2',
            width: 'w-full',
            py: 'pt-2',
            px: 'px-3',
            borderRadius: 'rounded-[8px]',
            textAlign: 'text-start',
            lightHeight: 'leading-tight',
            cursor: 'cursor-pointer',
            userSelect: 'select-none',
            transition: 'transition-all',
            bg: 'hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80',
            color: 'hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900',
            outline: 'outline-none',
          },
          disabled: {
            opacity: 'opacity-50',
            cursor: 'cursor-not-allowed',
            pointerEvents: 'pointer-events-none',
            userSelect: 'select-none',
            bg: 'hover:bg-transparent focus:bg-transparent active:bg-transparent',
            color: 'hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500',
          },
        },
      },
    },
  },
  iconButton: {
    defaultProps: {
      variant: 'text',
      size: 'md',
      color: 'gray',
      fullWidth: false,
      ripple: true,
      className: '',
    },
    valid: {
      variants: ['text'],
      sizes: ['sm', 'md', 'lg'],
      colors: ['gray', 'green', 'blue', 'red'],
    },
    styles: {
      base: {
        position: 'relative',
        verticalAlign: 'align-middle',
        userSelect: 'select-none',
        fontFamily: 'font-sans',
        fontWeight: 'font-medium',
        textAlign: 'text-center',
        textTransform: 'uppercase',
        transition: 'transition-all',
        disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
      },
      sizes: {
        sm: {
          width: 'w-8',
          maxWidth: 'max-w-[32px]',
          height: 'h-8',
          maxHeight: 'max-h-[32px]',
          borderRadius: 'rounded-lg',
          fontSize: 'text-xs',
        },
        md: {
          width: 'w-10',
          maxWidth: 'max-w-[40px]',
          height: 'h-10',
          maxHeight: 'max-h-[40px]',
          borderRadius: 'rounded-lg',
          fontSize: 'text-xs',
        },
        lg: {
          width: 'w-12',
          maxWidth: 'max-w-[48px]',
          height: 'h-12',
          maxHeight: 'max-h-[48px]',
          borderRadius: 'rounded-lg',
          fontSize: 'text-sm',
        },
      },
      variants: {
        text: {
          gray: {
            color: 'text-neutrals-500',
            hover: 'hover:bg-neutrals-500/10',
            active: 'active:bg-neutrals-500/30',
          },

          green: {
            color: 'text-primary-500',
            hover: 'hover:bg-primary-500/10',
            active: 'active:bg-primary-500/30',
          },

          blue: {
            color: 'text-info-500',
            hover: 'hover:bg-info-500/10',
            active: 'active:bg-info-500/30',
          },

          red: {
            color: 'text-danger-500',
            hover: 'hover:bg-danger-500/10',
            active: 'active:bg-danger-500/30',
          },
        },
        outlined: {
          gray: {
            color: 'text-light-body-text dark:text-dark-body-text',
            borderColor: 'border-light-body-text dark:border-dark-body-text',
          },
        },
      },
    },
  },
  card: {
    defaultProps: {
      variant: 'filled',
      color: 'white',
      shadow: true,
      className: '',
    },
    valid: {
      variants: ['filled', 'gradient'],
      colors: ['white', 'transparent'],
    },
    styles: {
      base: {
        initial: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'flex-col',
          backgroundClip: 'bg-clip-border',
          borderRadius: 'rounded-xl',
        },
        shadow: {
          boxShadow: 'shadow-container',
        },
      },
      variants: {
        filled: {
          transparent: {
            backgroud: 'bg-light-container dark:bg-dark-container',
          },
          white: {
            backgroud: 'bg-white dark:bg-dark-main-bg',
            boxShadow: 'shadow-container',
          },
        },
      },
    },
  },
  chip: {
    defaultProps: {
      variant: 'ghost',
      size: 'md',
      color: 'blue',
      icon: undefined,
      open: true,
      onClose: undefined,
      action: undefined,
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    valid: {
      variants: ['ghost'],
      sizes: ['sm', 'md', 'lg'],
      colors: [
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        chip: {
          position: 'relative',
          display: 'grid',
          placeItems: 'items-center',
          fontFamily: 'font-sans',
          fontWeight: 'font-medium',
          textTransform: 'capitalize',
          lineHeight: 'leading-none',
          whiteSpace: 'whitespace-nowrap',
          userSelect: 'select-none',
        },
        action: {
          position: '!absolute',
          top: 'top-2/4',
          right: 'right-1',
          translate: '-translate-y-2/4',
          mx: 'mx-px',
          rounded: 'rounded-md',
        },
        icon: {
          position: 'absolute',
          top: 'top-2/4',
          translate: '-translate-y-2/4',
        },
      },
      sizes: {
        sm: {
          chip: {
            py: 'py-1',
            px: 'px-2',
            fontSize: 'text-[12px]',
            borderRadius: 'rounded-[8px]',
          },
        },
      },
      variants: {
        ghost: {
          'blue-gray': {
            backgroud: 'bg-blue-gray-100',
            color: 'text-blue-gray-700',
          },
          gray: {
            backgroud: 'bg-gray-100',
            color: 'text-gray-700',
          },
          brown: {
            backgroud: 'bg-brown-100 dark:bg-brown-500/40',
            color: 'text-brown-700  dark:text-brown-300',
          },
          'deep-orange': {
            backgroud: 'bg-deep-orange-100 dark:bg-deep-orange-500/40',
            color: 'text-deep-orange-700 dark:text-deep-orange-300',
          },
          orange: {
            backgroud: 'bg-orange-100 dark:bg-orange-500/40',
            color: 'text-orange-700 dark:text-orange-300',
          },
          amber: {
            backgroud: 'bg-amber-100 dark:bg-amber-500/40',
            color: 'text-amber-700 dark:text-amber-300',
          },
          yellow: {
            backgroud: 'bg-warning-100 dark:bg-warning-500/40',
            color: 'text-warning-700  dark:text-warning-300',
          },
          lime: {
            backgroud: 'bg-lime-100 dark:bg-lime-500/40',
            color: 'text-lime-700  dark:text-lime-300',
          },
          'light-green': {
            backgroud: 'bg-success-100 dark:bg-success-500/40',
            color: 'text-success-700 dark:text-success-300',
          },
          green: {
            backgroud: 'bg-primary-100 dark:bg-primary-500/40',
            color: 'text-primary-700 dark:text-primary-300',
          },
          teal: {
            backgroud: 'bg-teal-100 dark:bg-teal-500/40',
            color: 'text-teal-700 dark:text-teal-300',
          },
          cyan: {
            backgroud: 'bg-cyan-50 dark:bg-cyan-500/40',
            color: 'text-cyan-900 dark:text-cyan-300',
          },
          'light-blue': {
            backgroud: 'bg-light-blue-100 dark:bg-light-blue-500/40',
            color: 'text-light-blue-700 dark:text-light-blue-300',
          },
          blue: {
            backgroud: 'bg-info-100 dark:bg-info-500/40',
            color: 'text-info-700 dark:text-info-300',
          },
          indigo: {
            backgroud: 'bg-indigo-100 dark:bg-indigo-500/40',
            color: 'text-indigo-700  dark:text-indigo-300',
          },
          'deep-purple': {
            backgroud: 'bg-deep-purple-100 dark:bg-deep-purple-500/40 ',
            color: 'text-deep-purple-700  dark:text-deep-purple-300',
          },
          purple: {
            backgroud: 'bg-purple-100 dark:bg-purple-500/40',
            color: 'text-purple-700 dark:text-purple-300',
          },
          pink: {
            backgroud: 'bg-pink-100 dark:bg-pink-500/40',
            color: 'text-pink-700 dark:text-pink-300',
          },
          red: {
            backgroud: 'bg-danger-200/50 dark:bg-danger-500/40',
            color: 'text-danger-700 dark:text-danger-300',
          },
        },
      },
    },
  },
  dialog: {
    defaultProps: {
      size: 'md',
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    valid: {
      sizes: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    styles: {
      base: {
        backdrop: {
          display: 'grid',
          placeItems: 'place-items-center',
          position: 'fixed',
          top: 0,
          left: 0,
          width: 'w-screen',
          height: 'h-screen',
          backgroundColor: 'bg-black',
          backgroundOpacity: 'bg-opacity-60',
          backdropFilter: 'backdrop-blur-sm',
        },
        container: {
          position: 'relative',
          bg: 'bg-white dark:bg-dark-container',
          p: 'p-6 lg:p-8',
          borderRadius: 'rounded-lg',
          boxShadow: 'shadow-2xl',
          color: 'text-blue-gray-500',
          fontSmoothing: 'antialiased',
          fontFamily: 'font-sans',
          fontSize: 'text-base',
          fontWeight: 'font-light',
          lineHeight: 'leading-relaxed',
        },
      },
      sizes: {
        xs: {
          width: 'w-full md:w-3/5 lg:w-4/12 2xl:w-1/4',
          minWidth: 'min-w-[80%] md:min-w-[60%] lg:min-w-[20%] 2xl:min-w-[25%]',
          maxWidth: 'max-w-[80%] md:max-w-[60%] lg:max-w-[30%] 2xl:max-w-[25%]',
        },
        sm: {
          width: 'w-full md:w-3/5 lg:w-2/5 2xl:w-1/4',
          minWidth: 'min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[40%]',
          maxWidth: 'max-w-[80%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[40%]',
        },
        md: {
          width: 'w-full md:w-3/4 lg:w-3/5 2xl:w-2/5',
          minWidth: 'min-w-[90%] md:min-w-[70%] lg:min-w-[60%] 2xl:min-w-[40%]',
          maxWidth: 'max-w-[90%] md:max-w-[70%] lg:max-w-[60%] 2xl:max-w-[40%]',
        },
        lg: {
          width: 'w-full md:w-5/6 lg:w-3/4 2xl:w-3/5',
          minWidth: 'min-w-[90%] md:min-w-[83.333333%] lg:min-w-[75%] 2xl:min-w-[60%]',
          maxWidth: 'max-w-[90%] md:max-w-[83.333333%] lg:max-w-[75%] 2xl:max-w-[60%]',
        },
        xl: {
          width: 'w-full md:w-5/6 2xl:w-3/4',
          minWidth: 'min-w-[95%] md:min-w-[83.333333%] 2xl:min-w-[75%]',
          maxWidth: 'max-w-[95%] md:max-w-[83.333333%] 2xl:max-w-[75%]',
        },
        xxl: {
          display: 'flex',
          flexDirection: 'flex-col',
          width: 'w-screen',
          minWidth: 'min-w-[100vw]',
          maxWidth: 'max-w-[100vw]',
          height: 'h-screen',
          minHeight: 'min-h-[100vh]',
          maxHeight: 'max-h-[100vh]',
          m: 'm-0',
          borderRadius: 'rounded-none',
        },
      },
    },
  },
  progress: {
    defaultProps: {
      variant: 'filled',
      color: 'blue',
      size: 'md',
      value: 0,
      label: false,
      className: '',
      barProps: {},
    },
    valid: {
      variants: ['filled', 'gradient'],
      colors: [
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
      sizes: ['sm', 'md', 'lg'],
    },
    styles: {
      base: {
        container: {
          initial: {
            display: 'flex',
            justifyContent: 'flex-start',
            bg: 'bg-blue-gray-50',
            overflow: 'overflow-hidden',
            width: 'w-full',
            fontFamily: 'font-sans',
            borderRadius: 'rounded-full',
            fontSize: 'text-xs',
            fontWeight: 'font-medium',
          },
          withLabel: {},
        },
        bar: {
          display: 'flex',
          justifyContent: 'justify-center',
          alignItems: 'items-center',
          height: 'h-full',
          overflow: 'overflow-hidden',
          wordBreak: 'break-all',
          borderRadius: 'rounded-full',
        },
      },
      sizes: {
        sm: {
          container: {
            initial: {
              height: 'h-1.5',
            },
            withLabel: {
              height: 'h-3.5',
            },
          },
          bar: {},
        },
        md: {
          container: {
            initial: {
              height: 'h-2.5',
            },
            withLabel: {
              height: 'h-4',
            },
          },
          bar: {},
        },
        lg: {
          container: {
            initial: {
              height: 'h-3.5',
            },
            withLabel: {
              height: 'h-5',
            },
          },
          bar: {},
        },
      },
      variants: {
        filled: {
          yellow: {
            backgroud: 'bg-warning-300',
            color: 'text-black',
          },

          green: {
            backgroud: 'bg-primary-300',
            color: 'text-white',
          },

          red: {
            backgroud: 'bg-danger-500',
            color: 'text-white',
          },
        },
      },
    },
  },
  select: {
    defaultProps: {
      variant: 'outlined',
      size: 'md',
      color: 'gray',
      label: '',
      error: false,
      success: false,
      arrow: undefined,
      value: undefined,
      onChange: undefined,
      selected: undefined,
      offset: 5,
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      autoHeight: false,
      lockScroll: false,
      labelProps: {
        className: 'hidden',
      },
      menuProps: {},
      className: '',
      disabled: false,
      containerProps: undefined,
    },
    valid: {
      variants: ['standard', 'outlined', 'static'],
      sizes: ['md', 'lg'],
      colors: ['gray'],
    },
    styles: {
      base: {
        container: {
          position: 'relative',
          width: 'w-full',
          minWidth: 'min-w-[150px] lg:min-w-[200px] 2xl:min-w-[250px]',
        },
        select: {
          bg: 'bg-white dark:bg-neutrals-800',
          border:
            '!border-t !border-t placeholder:text-gray-500 dark:placeholder:text-dark-headings placeholder:opacity-100 dark:placeholder:opacity-40 ',
          peer: 'peer',
          width: 'w-full',
          height: 'h-full',

          color: 'text-blue-gray-700 dark:text-dark-headings',
          fontFamily: 'font-sans',
          fontWeight: 'font-normal',
          textAlign: 'text-left',
          outline: 'outline outline-0 focus:outline-0',
          disabled: 'disabled:bg-blue-gray-50 disabled:border-0',
          transition: 'transition-all',
        },
        arrow: {
          initial: {
            display: 'grid',
            placeItems: 'place-items-center',
            position: 'absolute',
            top: 'top-2/4',
            right: 'right-2',
            pt: 'pt-px',
            width: 'w-5',
            height: 'h-5',
            color: 'text-blue-gray-400',
            transform: 'rotate-0 -translate-y-2/4',
            transition: 'transition-all',
          },
          active: {
            transform: 'rotate-180',
            mt: 'mt-px',
          },
        },
        label: {
          display: 'flex',
          width: 'w-full',
          height: 'h-full',
          userSelect: 'select-none',
          pointerEvents: 'pointer-events-none',
          position: 'absolute',
          left: 'left-0',
          fontWeight: 'font-normal',
          transition: 'transition-all',
        },
        menu: {
          width: 'w-full',
          maxHeight: 'max-h-96',
          bg: 'bg-white dark:bg-dark-main-bg',
          p: 'p-3',
          border: 'border border-blue-gray-50 dark:border-neutrals-800',
          borderRadius: 'rounded-md',
          boxShadow: 'shadow-container',
          fontFamily: 'font-sans',
          fontSize: 'text-sm',
          fontWeight: 'font-normal',
          color: 'text-primary-900 dark:text-primary-100',
          overflow: 'overflow-auto',
          outline: 'focus:outline-none',
        },
        option: {
          initial: {
            mt: 'mt-[9px]',
            pb: 'pb-2',
            px: 'px-3',
            borderRadius: 'rounded-md',
            lightHeight: 'leading-tight',
            cursor: 'cursor-pointer',
            userSelect: 'select-none',
            background: 'hover:bg-primary-100 hover:dark:bg-primary-500  bg-opacity-80 focus:dark:bg-primary-500',
            opacity: 'hover:bg-opacity-80 focus:bg-opacity-80',
            color: 'text-primary-900 dark:text-primary-100',
            outline: 'outline outline-0',
            transition: 'transition-all',
          },
          active: {
            bg: 'bg-primary-100 dark:bg-primary-500  bg-opacity-80',
            color: 'text-primary-900 dark:text-primary-100',
          },
          disabled: {
            opacity: 'opacity-50',
            cursor: 'cursor-not-allowed',
            userSelect: 'select-none',
            pointerEvents: 'pointer-events-none',
          },
        },
      },
      variants: {
        outlined: {
          base: {
            select: {
              borderWidth: 'placeholder-shown:border',
              borderColor: 'placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200',
            },
            label: {
              position: '-top-1.5',
              before: {
                content: "before:content[' ']",
                display: 'before:block',
                boxSizing: 'before:box-border',
                width: 'before:w-2.5',
                height: 'before:h-1.5',
                mt: 'before:mt-[6.5px]',
                mr: 'before:mr-1',
                borderRadius: 'before:rounded-tl-md',
                pointerEvents: 'before:pointer-events-none',
                transition: 'before:transition-all',
                disabled: 'peer-disabled:before:border-transparent',
              },
              after: {
                content: "after:content[' ']",
                display: 'after:block',
                flexGrow: 'after:flex-grow',
                boxSizing: 'after:box-border',
                width: 'after:w-2.5',
                height: 'after:h-1.5',
                mt: 'after:mt-[6.5px]',
                ml: 'after:ml-1',
                borderRadius: 'after:rounded-tr-md',
                pointerEvents: 'after:pointer-events-none',
                transition: 'after:transition-all',
                disabled: 'peer-disabled:after:border-transparent',
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-10',
              },
              select: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-2.5',
                borderRadius: 'rounded-[7px]',
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: 'leading-[3.75]',
                  },
                  open: {
                    lineHeight: 'leading-tight',
                  },
                  withValue: {
                    lineHeight: 'leading-tight',
                  },
                },
              },
            },
            lg: {
              container: {
                height: 'h-11',
              },
              select: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-3',
                borderRadius: 'rounded-[7px]',
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: 'leading-[4.1]',
                  },
                  open: {
                    lineHeight: 'leading-tight',
                  },
                  withValue: {
                    lineHeight: 'leading-tight',
                  },
                },
              },
            },
          },
          colors: {
            select: {
              gray: {
                close: {
                  borderColor: '!border-neutrals-300 dark:!border-neutrals-700',
                  borderTopColor:
                    'focus:!border-neutrals-300  focus:dark:!border-neutrals-700 !border-t-neutrals-300 dark:!border-t-neutrals-700 focus:!border-t-neutrals-300 focus:dark:!border-t-neutrals-700 ',
                },
                open: {
                  borderColor: '!border-neutrals-300 dark:!border-neutrals-700',
                  borderTopColor:
                    'focus:!border-neutrals-300  focus:dark:!border-neutrals-700 !border-t-neutrals-300 dark:!border-t-neutrals-700 focus:!border-t-neutrals-300 focus:dark:!border-t-neutrals-700 ',
                },
                withValue: {
                  borderColor: '!border-neutrals-300 dark:!border-neutrals-700',
                  borderTopColor:
                    'focus:!border-neutrals-300  focus:dark:!border-neutrals-700 !border-t-neutrals-300 dark:!border-t-neutrals-700 focus:!border-t-neutrals-300 focus:dark:!border-t-neutrals-700 ',
                },
              },
              brown: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-brown-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              'deep-orange': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-deep-orange-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              orange: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-orange-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              amber: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-amber-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              yellow: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-yellow-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              lime: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-lime-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              'light-green': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-light-green-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              green: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-green-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              teal: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-teal-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              cyan: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-cyan-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              'light-blue': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-light-blue-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              blue: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-blue-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              indigo: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-indigo-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              'deep-purple': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-deep-purple-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              purple: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-purple-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              pink: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-pink-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              red: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-red-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
            },
            label: {
              'blue-gray': {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-blue-gray-500',
                  before: 'before:border-blue-gray-500',
                  after: 'after:border-blue-gray-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              gray: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-gray-500',
                  before: 'before:border-gray-500',
                  after: 'after:border-gray-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              brown: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-brown-500',
                  before: 'before:border-brown-500',
                  after: 'after:border-brown-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              'deep-orange': {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-deep-orange-500',
                  before: 'before:border-deep-orange-500',
                  after: 'after:border-deep-orange-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              orange: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-orange-500',
                  before: 'before:border-orange-500',
                  after: 'after:border-orange-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              amber: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-amber-500',
                  before: 'before:border-amber-500',
                  after: 'after:border-amber-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              yellow: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-yellow-500',
                  before: 'before:border-yellow-500',
                  after: 'after:border-yellow-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              lime: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-lime-500',
                  before: 'before:border-lime-500',
                  after: 'after:border-lime-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              'light-green': {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-light-green-500',
                  before: 'before:border-light-green-500',
                  after: 'after:border-light-green-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              green: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-green-500',
                  before: 'before:border-green-500',
                  after: 'after:border-green-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              teal: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-teal-500',
                  before: 'before:border-teal-500',
                  after: 'after:border-teal-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              cyan: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-cyan-500',
                  before: 'before:border-cyan-500',
                  after: 'after:border-cyan-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              'light-blue': {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-light-blue-500',
                  before: 'before:border-light-blue-500',
                  after: 'after:border-light-blue-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              blue: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-blue-500',
                  before: 'before:border-blue-500',
                  after: 'after:border-blue-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              indigo: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-indigo-500',
                  before: 'before:border-indigo-500',
                  after: 'after:border-indigo-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              'deep-purple': {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-deep-purple-500',
                  before: 'before:border-deep-purple-500',
                  after: 'after:border-deep-purple-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              purple: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-purple-500',
                  before: 'before:border-purple-500',
                  after: 'after:border-purple-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              pink: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-pink-500',
                  before: 'before:border-pink-500',
                  after: 'after:border-pink-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              red: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-red-500',
                  before: 'before:border-red-500',
                  after: 'after:border-red-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
            },
          },
          states: {
            close: {
              select: {
                borderWidth: 'border',
              },
              label: {
                fontSize: 'text-sm',
                disabled: 'peer-disabled:text-blue-gray-400',
                before: {
                  bt: 'before:border-t-transparent',
                  bl: 'before:border-l-transparent',
                },
                after: {
                  bt: 'after:border-t-transparent',
                  br: 'after:border-r-transparent',
                },
              },
            },
            open: {
              select: {
                borderWidth: 'border-2',
                borderColor: 'border-t-transparent',
              },
              label: {
                fontSize: 'text-[11px]',
                disabled: 'peer-disabled:text-transparent',
                before: {
                  bt: 'before:border-t-2',
                  bl: 'before:border-l-2',
                },
                after: {
                  bt: 'after:border-t-2',
                  br: 'after:border-r-2',
                },
              },
            },
            withValue: {
              select: {
                borderWidth: 'border',
                borderColor: 'border-t-transparent',
              },
              label: {
                fontSize: 'text-[11px]',
                disabled: 'peer-disabled:text-transparent',
                before: {
                  bt: 'before:border-t',
                  bl: 'before:border-l',
                },
                after: {
                  bt: 'after:border-t',
                  br: 'after:border-r',
                },
              },
            },
          },
          error: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-red-500',
                },
                open: {
                  borderColor: 'border-red-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-red-500',
                  borderTopColor: 'border-t-transparent',
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: 'text-red-500',
                  before: 'before:border-red-500',
                  after: 'after:border-red-500',
                },
                open: {
                  color: 'text-red-500',
                  before: 'before:border-red-500',
                  after: 'after:border-red-500',
                },
                withValue: {
                  color: 'text-red-500',
                  before: 'before:border-red-500',
                  after: 'after:border-red-500',
                },
              },
            },
          },
          success: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-green-500',
                },
                open: {
                  borderColor: 'border-green-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-green-500',
                  borderTopColor: 'border-t-transparent',
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: 'text-green-500',
                  before: 'before:border-green-500',
                  after: 'after:border-green-500',
                },
                open: {
                  color: 'text-green-500',
                  before: 'before:border-green-500',
                  after: 'after:border-green-500',
                },
                withValue: {
                  color: 'text-green-500',
                  before: 'before:border-green-500',
                  after: 'after:border-green-500',
                },
              },
            },
          },
        },
      },
    },
  },
  alert: {
    defaultProps: {
      variant: 'filled',
      color: 'blue',
      icon: undefined,
      open: true,
      action: undefined,
      onClose: undefined,
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    valid: {
      variants: ['ghost'],
      colors: ['blue', 'red'],
    },
    styles: {
      base: {
        alert: {
          position: 'relative',
          display: 'block',
          width: 'w-full',
          fontFamily: 'font-sans',
          fontSize: 'text-base',
          fontWeight: 'font-regular',
          px: 'px-4',
          py: 'py-4',
          borderRadius: 'rounded-lg',
        },
        action: {
          position: '!absolute',
          top: 'top-3',
          right: 'right-3',
        },
      },
      variants: {
        ghost: {
          blue: {
            backgroud: 'bg-info-100 dark:bg-info-500',
            color: 'text-info-500 dark:text-info-100',
          },
          red: {
            backgroud: 'bg-danger-100 dark:bg-danger-500',
            color: 'text-danger-500 dark:text-danger-100',
          },
        },
      },
    },
  },
};
