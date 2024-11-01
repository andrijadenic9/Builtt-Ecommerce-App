import Image from './Image';

function Button({
    onClick,
    type = 'button',
    variant = 'primary', // 'primary', 'secondary', 'icon-only'
    size = 'md', // 'sm', 'md', 'lg'
    className = '',
    icon,
    iconAlt = '',
    iconClass = '',
    children,
    ...props
}) {
    // Definisani stilovi na osnovu varijante i velicine
    const baseStyles = 'rounded-full flex items-center justify-center focus:outline-none transition-all';
    const variantStyles = {
        primary: 'bg-black text-white hover:bg-gray-800',
        secondary: 'text-gray-600 hover:text-black',
        'icon-only': 'p-1',
    };
    const sizeStyles = {
        sm: 'p-1 text-sm',
        md: 'p-2 text-base',
        lg: 'p-3 text-lg',
    };

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {icon && <Image src={icon} alt={iconAlt} className={iconClass} />}
            {children && <span className={`${icon ? 'ml-2' : ''}`}>{children}</span>}
        </button>
    );
}

export default Button;
