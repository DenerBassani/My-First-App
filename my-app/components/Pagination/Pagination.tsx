interface PaginationProps {
    page: number;
    hasMore: boolean;
    setPage: React.Dispatch<React.SetStateAction<number>>;
  }
  
  const Pagination: React.FC<PaginationProps> = ({ page, hasMore, setPage }) => {
    return (
      <div className="flex justify-center mt-6 space-x-4">
        <button 
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          disabled={page === 1}
        >
          Anterior
        </button>
        <span className="text-lg font-semibold">Página {page}</span>
        <button 
          onClick={() => setPage((prev) => prev + 1)} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          disabled={!hasMore}
        >
          Próxima
        </button>
      </div>
    );
  };
  
  export default Pagination;
  