function Label({ htmlFor, children, className, ...props }) {
    return (
        <label
            htmlFor={htmlFor}
            className={`absolute left-1 top-1 text-gray-500 transition-all 
                        peer-placeholder-shown:top-6 peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-gray-400 peer-focus:top-1 
                        peer-focus:text-xs peer-focus:text-black ${className}`}
            {...props}
        >
            {children}
        </label>
    );
}

export default Label;
