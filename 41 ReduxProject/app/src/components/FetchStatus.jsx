import { useSelector } from 'react-redux'

function FetchStatus() {

    const loading = useSelector(state => state.weatherReducer.loading)
    const error = useSelector(state => state.weatherReducer.error)

    if (loading) {
        return (
            <div className="w-full flex justify-center py-6">
                <span className="loading loading-spinner loading-lg text-accent"></span>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full flex justify-center px-4">
                <div role="alert" className="alert alert-error max-w-2xl w-full">
                    <span>{error}</span>
                </div>
            </div>
        )
    }

    return null
}

export default FetchStatus
