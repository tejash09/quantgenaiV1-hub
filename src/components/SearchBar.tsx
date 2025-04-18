import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, FileText, Book, Tag } from 'lucide-react';
import { searchContent } from '../utils/mockData';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onClose?: () => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onClose, className }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any>({ topics: [], papers: [], resources: [] });
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults({ topics: [], papers: [], resources: [] });
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsLoading(true);
      // Simulate API fetch delay
      setTimeout(() => {
        const searchResults = searchContent(query);
        setResults(searchResults);
        setIsLoading(false);
      }, 300);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleClear = () => {
    setQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call the onSearch prop function if it exists
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex items-center px-4 py-4 border-b border-gray-200 dark:border-gray-700">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search topics, papers, resources..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-400 text-lg"
            />
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="max-h-[60vh] overflow-y-auto">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="inline-block w-8 h-8 border-2 border-quantum-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-2 text-gray-500">Searching...</p>
            </div>
          ) : (
            <>
              {query.trim().length > 0 && (
                <div className="p-4">
                  {results.topics.length === 0 && results.papers.length === 0 && results.resources.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No results found for "{query}"</p>
                    </div>
                  ) : (
                    <>
                      {results.topics.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Topics</h3>
                          <div className="space-y-2">
                            {results.topics.map((topic: any) => (
                              <Link
                                key={topic.id}
                                to={`/topic/${topic.slug}`}
                                onClick={onClose}
                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                              >
                                <div className="flex items-start">
                                  <Tag className="h-5 w-5 text-quantum-500 mt-0.5 mr-3 flex-shrink-0" />
                                  <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">{topic.title}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{topic.shortDescription}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {results.papers.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Papers</h3>
                          <div className="space-y-2">
                            {results.papers.map((paper: any) => (
                              <a
                                key={paper.id}
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                              >
                                <div className="flex items-start">
                                  <FileText className="h-5 w-5 text-quantum-500 mt-0.5 mr-3 flex-shrink-0" />
                                  <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">{paper.title}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{paper.authors} ({paper.year})</p>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {results.resources.length > 0 && (
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Resources</h3>
                          <div className="space-y-2">
                            {results.resources.map((resource: any) => (
                              <a
                                key={resource.id}
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                              >
                                <div className="flex items-start">
                                  <Book className="h-5 w-5 text-quantum-500 mt-0.5 mr-3 flex-shrink-0" />
                                  <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">{resource.title}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{resource.type}</p>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
