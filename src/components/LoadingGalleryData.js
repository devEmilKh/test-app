function LoadingGalleryData(Component) {
    return function LoadingGalleryData({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />

        else return (
            <div className="text">
                <h1>Подождите, данные загружаются!</h1>
            </div>
        )
    }
}

export default LoadingGalleryData