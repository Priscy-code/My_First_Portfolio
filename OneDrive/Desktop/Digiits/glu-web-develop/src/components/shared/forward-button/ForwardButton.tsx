export default function ForwardButton(){
    return (
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </button>
    )
};