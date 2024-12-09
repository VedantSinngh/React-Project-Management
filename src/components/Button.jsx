export default function Button({ children, ...props }) {
    return (
        <button className="px-3 py-3 text-xs md:text-base rounded-md text-stone-500 bg-stone-700 hover:bg-stone-600 hover:text-stone-100 "
        {...props}
        >
            {children}
        </button>
    );
}