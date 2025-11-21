import React from 'react';

/**
 * Button variant types
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'linkSecondary';

/**
 * Button size options
 */
export type ButtonSize = 'sm' | 'md';

/**
 * Button component props interface
 * @interface ButtonProps
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Whether the button represents a destructive action
   * Changes the color scheme to indicate danger/warning
   * @default false
   */
  destructive?: boolean;

  /**
   * Loading state - shows a loading indicator and disables interaction
   * @default false
   */
  loading?: boolean;

  /**
   * Icon to display on the left side of the button text
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon to display on the right side of the button text
   */
  rightIcon?: React.ReactNode;

  /**
   * Button content (text or elements)
   */
  children?: React.ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * ARIA label for accessibility
   * Recommended when button contains only icons
   */
  'aria-label'?: string;
}

/**
 * Loading spinner component for button loading state
 */
const LoadingSpinner: React.FC<{ size?: ButtonSize }> = ({ size = 'md' }) => {
  const spinnerSize = size === 'sm' ? 'w-4 h-4' : 'w-4 h-4';

  return (
    <svg
      className={`animate-spin ${spinnerSize}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

/**
 * Button Component
 *
 * A versatile button component with multiple variants, sizes, and states.
 * Fully accessible (WCAG AA compliant) with proper ARIA attributes and keyboard support.
 *
 * @example
 * ```tsx
 * // Primary button
 * <Button variant="primary">Click me</Button>
 *
 * // Secondary button with icon
 * <Button variant="secondary" leftIcon={<PlusIcon />}>
 *   Add Item
 * </Button>
 *
 * // Destructive action
 * <Button variant="primary" destructive>
 *   Delete
 * </Button>
 *
 * // Loading state
 * <Button loading>Processing...</Button>
 *
 * // Link style button
 * <Button variant="link" rightIcon={<ArrowIcon />}>
 *   Learn more
 * </Button>
 * ```
 *
 * @param props - Button component props
 * @returns React button element
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      destructive = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      type = 'button',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    // Determine if button should be disabled
    const isDisabled = disabled || loading;

    /**
     * Get base styles that apply to all button variants
     */
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    /**
     * Size-specific styles
     */
    const sizeStyles: Record<ButtonSize, string> = {
      sm: size === 'sm' && (variant === 'link' || variant === 'linkSecondary')
        ? 'h-6 text-sm' // Link buttons have minimal padding
        : 'h-9 px-3 py-2 text-sm gap-1',
      md: variant === 'link' || variant === 'linkSecondary'
        ? 'h-6 text-sm' // Link buttons have minimal padding
        : 'h-10 px-3 py-2 text-sm gap-1',
    };

    /**
     * Variant-specific styles with destructive color variations
     */
    const variantStyles: Record<ButtonVariant, Record<'normal' | 'destructive', string>> = {
      primary: {
        normal: 'bg-slate-900 text-slate-50 hover:bg-slate-800 focus-visible:ring-slate-900',
        destructive: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
      },
      secondary: {
        normal: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-900',
        destructive: 'bg-red-100 text-red-900 hover:bg-red-200 focus-visible:ring-red-600',
      },
      outline: {
        normal: 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-900',
        destructive: 'border border-red-200 bg-white text-red-900 hover:bg-red-50 focus-visible:ring-red-600',
      },
      ghost: {
        normal: 'text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-900',
        destructive: 'text-red-900 hover:bg-red-100 focus-visible:ring-red-600',
      },
      link: {
        normal: 'text-slate-950 underline-offset-4 hover:underline focus-visible:ring-slate-900 gap-2',
        destructive: 'text-red-900 underline-offset-4 hover:underline focus-visible:ring-red-600 gap-2',
      },
      linkSecondary: {
        normal: 'text-slate-600 underline-offset-4 hover:underline focus-visible:ring-slate-900 gap-2',
        destructive: 'text-red-600 underline-offset-4 hover:underline focus-visible:ring-red-600 gap-2',
      },
    };

    /**
     * Border radius styles
     */
    const roundedStyles = variant === 'link' || variant === 'linkSecondary' ? '' : 'rounded-md';

    /**
     * Combine all styles
     */
    const buttonStyles = [
      baseStyles,
      sizeStyles[size],
      variantStyles[variant][destructive ? 'destructive' : 'normal'],
      roundedStyles,
      className,
    ].join(' ');

    /**
     * Icon container styles
     */
    const iconStyles = 'w-4 h-4 shrink-0';

    /**
     * Determine ARIA attributes for accessibility
     */
    const ariaAttributes = {
      'aria-label': ariaLabel,
      'aria-disabled': isDisabled,
      'aria-busy': loading,
    };

    return (
      <button
        ref={ref}
        type={type}
        className={buttonStyles}
        disabled={isDisabled}
        {...ariaAttributes}
        {...props}
      >
        {/* Left icon or loading spinner */}
        {loading && !rightIcon ? (
          <LoadingSpinner size={size} />
        ) : (
          leftIcon && <span className={iconStyles}>{leftIcon}</span>
        )}

        {/* Button text content */}
        {children && (
          <span className={variant === 'link' || variant === 'linkSecondary' ? '' : 'px-1'}>
            {children}
          </span>
        )}

        {/* Right icon or loading spinner */}
        {loading && rightIcon ? (
          <LoadingSpinner size={size} />
        ) : (
          rightIcon && <span className={iconStyles}>{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
