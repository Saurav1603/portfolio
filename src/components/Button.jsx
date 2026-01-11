import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  href,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
    secondary: 'border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
  };

  const baseClasses = `
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    inline-flex items-center justify-center space-x-2
    rounded-lg font-semibold
    transition-all shadow-lg hover:shadow-xl
    disabled:opacity-70 disabled:cursor-not-allowed
    ${className}
  `;

  const content = (
    <>
      {loading ? (
        <>
          <Loader2 size={20} className="animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={20} />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon size={20} />}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
