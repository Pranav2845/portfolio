import React, { useRef, useEffect, useState } from 'react';
import Icon from 'components/AppIcon';

const FilterBar = ({ options, selectedFilter, onFilterChange }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    checkScrollButtons();
  }, []);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Desktop Filter Bar */}
      <div className="hidden lg:flex items-center space-x-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onFilterChange(option.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg nav-transition ${
              selectedFilter === option.id
                ? 'bg-accent text-white' :'bg-surface text-text-secondary hover:text-accent hover:bg-accent/10 border border-border hover:border-accent'
            }`}
          >
            <span className="font-medium">{option.label}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              selectedFilter === option.id
                ? 'bg-white/20 text-white' :'bg-border text-text-secondary'
            }`}>
              {option.count}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile Filter Bar with Scroll */}
      <div className="lg:hidden relative">
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center shadow-medium hover:bg-surface nav-transition"
            aria-label="Scroll left"
          >
            <Icon name="ChevronLeft" size={16} strokeWidth={2} />
          </button>
        )}

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center shadow-medium hover:bg-surface nav-transition"
            aria-label="Scroll right"
          >
            <Icon name="ChevronRight" size={16} strokeWidth={2} />
          </button>
        )}

        {/* Scrollable Filter Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex items-center space-x-3 overflow-x-auto scrollbar-hide pb-2 px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => onFilterChange(option.id)}
              className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-lg nav-transition ${
                selectedFilter === option.id
                  ? 'bg-accent text-white' :'bg-surface text-text-secondary hover:text-accent hover:bg-accent/10 border border-border hover:border-accent'
              }`}
            >
              <span className="font-medium whitespace-nowrap">{option.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                selectedFilter === option.id
                  ? 'bg-white/20 text-white' :'bg-border text-text-secondary'
              }`}>
                {option.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;