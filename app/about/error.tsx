"use client"
interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

const ErrorBoundary = ({ error, reset }: ErrorProps) => {
    console.log(error);
    return (
        <div>
            <h1>error : {error.message}</h1>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ErrorBoundary;