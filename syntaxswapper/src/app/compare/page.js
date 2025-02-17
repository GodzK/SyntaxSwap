"use client";
import "./styles.css";
import PixelCard from "../components/PixelCard";
function Compare() {
  return (
    <>
      <div className="compare-container">
        <div className="compare-dev">
        <PixelCard variant="pink" className="card-lang">
  // your card content (use position: absolute)
</PixelCard>
          <div className="converter">
            <button>Convert</button>
          </div>
          <PixelCard variant="pink" className="card-lang">
  // your card content (use position: absolute)
</PixelCard>
        </div>
      </div>
    </>
  );
}

export default Compare;
