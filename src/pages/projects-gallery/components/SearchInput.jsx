import React, { useState, useRef } from 'react';
import Icon from 'components/AppIcon';

const SearchInput = ({ value, onChange, placeholder = "Search projects..." }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleClear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      inputRef.current?.blur();
    }
  };

  return (
    <div className="relative flex-1 max-w-md">
      <div className={`relative flex items-center border rounded-lg nav-transition ${
        isFocused 
          ? 'border-accent shadow-medium' 
          : 'border-border hover:border-accent/50'
      }`}>
        {/* Search Icon */}
        <div className="absolute left-3 flex items-center pointer-events-none">
          <Icon 
            name="Search" 
            size={18} 
            className={`nav-transition ${
              isFocused ? 'text-accent' : 'text-text-secondary'
            }`} 
            strokeWidth={2} 
          />
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-transparent text-text-primary placeholder-text-secondary focus:outline-none"
        />

        {/* Clear Button */}
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 flex items-center justify-center w-5 h-5 text-text-secondary hover:text-accent nav-transition"
            aria-label="Clear search"
          >
            <Icon name="X" size={16} strokeWidth={2} />
          </button>
        )}
      </div>

      {/* Search Suggestions/Results Count */}
      {value && (
        <div className="absolute top-full left-0 right-0 mt-1 text-xs text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Search" size={12} strokeWidth={2} />
            <span>Searching for "{value}"</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;