import React, { useState, useLayoutEffect } from "react";
import "./Filter.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { BsSliders } from "react-icons/bs";

const Filter = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(8499);
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSliderChange = ([newMin, newMax]) => {
    setMin(newMin);
    setMax(newMax);
  };

  // Detect mobile screen width before first render
  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    // Initial check
    setIsMobile(mediaQuery.matches);

    // Listen for screen size changes
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const renderFilters = () => (
    <>
      <div className="filter-section">
        <h4>Sort by</h4>
        <select defaultValue="">
          <option value="" disabled className="placeholder-option">
            Relevance
          </option>
          <option value="high">Featured</option>
          <option value="high">Best Selling</option>
          <option value="high">Alphabetically, A-Z</option>
          <option value="high">Alphabetically, Z-A</option>
          <option value="low">Price, Low to High</option>
          <option value="high">Price, High to Low</option>
          <option value="high">Date, Old to New</option>
          <option value="high">Date, New to Old</option>
        </select>

        <h4>Size</h4>
        <div className="filter-size-options">
          {["100", "110", "120", "130", "140", "155", "165"].map((size) => (
            <label key={size}>
              <input type="checkbox" />
              {` ${size}`}
            </label>
          ))}
        </div>
      </div>

      <div className="price-filter">
        <h3>Price</h3>
        <div className="price-inputs">
          <span>Rs</span>
          <div className="price-box">
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
            />
          </div>
          <span>Rs</span>
          <div className="price-box">
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="slider-container">
          <Slider
            range
            min={0}
            max={8499}
            value={[min, max]}
            onChange={handleSliderChange}
            trackStyle={[{ backgroundColor: "black", height: 4 }]}
            handleStyle={[
              {
                backgroundColor: "white",
                border: "1px solid black",
                height: 20,
                width: 20,
                marginTop: '-7px',
                
              },
              {
                backgroundColor: "white",
                border: "1px solid black",
                height: 20,
                width: 20,
                marginTop: '-7px'
              },
            ]}
            railStyle={{ backgroundColor: "#ddd", height: 4 }}
          />
        </div>
      </div>
    </>
  );

  return (
    // Inside return
<div className="filter-container">
  {isMobile ? (
    <>
      <button
        className="filter-toggle-btn"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <BsSliders style={{ marginRight: "7px", position: "relative", top: "2px" }} />
        FILTER
      </button>
      {showDropdown && (
        <div className="mobile-dropdown-filter">
          {renderFilters()}
        </div>
      )}
    </>
  ) : (
    <div className="desktop-filters">{renderFilters()}</div>
  )}
</div>
  );
};

export default Filter;
