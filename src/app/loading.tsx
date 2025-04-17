const Loader = () => {
    return (
        <div className="flex w-full min-h-screen items-center justify-center">
            <div className={`loading-container visible`}>
                <div className="loading-bar"></div>
            </div>
        </div>
    );
};

export default Loader;