function Input({ id, type = 'text', value, onChange, placeholder, className, ...props }) {
    return (
        <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            className={`peer w-full border-b-2 border-gray-300 focus:border-black 
                        focus:outline-none bg-transparent px-1 pt-6 pb-1 placeholder-transparent ${className}`}
            placeholder={placeholder}
            {...props}
        />
    );
}

export default Input;
