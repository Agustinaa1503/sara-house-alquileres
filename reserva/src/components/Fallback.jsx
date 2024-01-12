

const Fallback = ({error, resetErrorBoundary}) => {
    return (
        <div>
            <p>Algo salió mal:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Reintentar</button>
        </div>
    )
};

export default Fallback;