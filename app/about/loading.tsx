const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col items-center gap-4">
                {/* วงกลมหมุน */}
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

                {/* ข้อความ */}
                <p className="text-lg font-medium text-gray-700 animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Loading;
