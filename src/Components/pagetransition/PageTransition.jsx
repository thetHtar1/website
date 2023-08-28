import { useState } from 'react';
import './pagetransition.css'
export default function Pagetransition() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const nextPage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(2);
      setIsLoading(false);
    }, 1300);
  };

  const prevPage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(1);
      setIsLoading(false);
    }, 1300);
  };

  return (
    <div>
      <div id="loader" className={isLoading ? 'loading' : ''}></div>

      {currentPage === 1 && (
        <div id="page1" className="page">
          <div>
            <h1>Winterwind Inc.</h1>
            <button onClick={nextPage}>Next</button>
          </div>
        </div>
      )}

      {currentPage === 2 && (
        <div id="page2" className="page">
          <div>
            <h2>Software Development Agency</h2>
            <button onClick={prevPage}>Go Back</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .loading {
          animation: circleIn 1.5s;
        }
        .page {
          display: none;
        }
        .page.active {
          display: block;
        }
      `}</style>
    </div>
  );
}
