"use client"; // This is a client component
import { useState, useRef } from 'react';
export default function ExpandableButton(props) {
  const { title, children } = props; // Destructure props
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="expandable-section">
      <button
        className="expand-button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls="expandable-content"
      >
        {title}
        <span className={`chevron ${isExpanded ? 'expanded' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <div
        id="expandable-content"
        ref={contentRef}
        className={`content ${isExpanded ? 'open' : ''}`}
      >
        {children}
      </div>

      <style jsx>{`
        .expandable-section {
          border-bottom: 1px solid #eaeaea;
          padding: 1rem 0;
        }
        .expand-button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: none;
          border: none;
          padding: 0.5rem 0;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
        }
        .chevron {
          transition: transform 0.2s ease;
        }
        .chevron.expanded {
          transform: rotate(180deg);
        }
        .content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.2s ease;
          opacity: 0;
        }
        .content.open {
          max-height: 1000px;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}