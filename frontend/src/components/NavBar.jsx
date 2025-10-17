import React, { useState } from "react";

function NavBar({ items, onItemClick }) {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <style>{`
        .nav-button:hover:not(.active) {
          background-color: rgba(0, 0, 0, 0.05) !important;
          color: #555555 !important;
        }
      `}</style>
      
      <div style={{ 
        position: 'fixed', 
        top: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 9999 
      }}>
        <div style={{
          display: 'flex',
          gap: '4px',
          backgroundColor: 'rgba(248, 249, 250, 0.95)',
          padding: '6px 12px',
          borderRadius: '9999px',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          minWidth: '400px',
          position: 'relative'
        }}>
          {/* Sliding background */}
          <div style={{
            position: 'absolute',
            top: '-8px',
            left: `calc(${items.findIndex(item => item.name === activeTab) * (100 / items.length)}% - 5px)`,
            width: `${100 / items.length}%`,
            height: '2px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            zIndex: 0
          }}>
            {/* Smaller black bar */}
            <div style={{
              width: '30px',
              height: '4px',
              backgroundColor: '#000000',
              borderRadius: '9999px',
            }} />
            {/* Bigger shadow effect */}
            <div style={{
              position: 'absolute',
              width: '80px',
              height: '24px',
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              borderRadius: '9999px',
              filter: 'blur(12px)',
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%)'
            }} />
          </div>

          {items.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <div key={item.name} style={{ position: 'relative' }}>
                <button
                  className={`nav-button ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(item.name);
                    if (onItemClick) {
                      onItemClick(item.name);
                    }
                  }}
                  style={{
                    padding: '10px 24px',
                    backgroundColor: 'transparent',
                    color: isActive ? '#333333' : '#888888',
                    border: 'none',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                    position: 'relative',
                    zIndex: 1,
                    outline: 'none'
                  }}
                >
                  <span>{item.name}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NavBar;
