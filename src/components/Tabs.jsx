import React from "react";

export default function Tabs({ active, setActive }) {
  return (
    <div style={{ display: "flex", marginBottom: "3rem" }}>
      <div className="pro-details-nav mb-40 m-auto">
        <ul className="nav nav-tabs pro-details-nav-btn" role="tablist">
          <li
            className="nav-item"
            role="presentation"
            onClick={() => setActive("all")}
          >
            <button
              className={`nav-links ${active === "all" ? "active" : ""}`}
              type="button"
              role="tab"
              tabIndex="-1"
            >
              <span>جميع المنتجات</span>
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            onClick={() => setActive("resin")}
          >
            <button
              className={`nav-links ${active === "resin" ? "active" : ""}`}
              type="button"
              role="tab"
              tabIndex="-1"
            >
              <span>رزنات</span>
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            onClick={() => setActive("printer")}
          >
            <button
              className={`nav-links ${active === "printer" ? "active" : ""}`}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <span>طابعات</span>
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            onClick={() => setActive("cleaner")}
          >
            <button
              className={`nav-links ${active === "cleaner" ? "active" : ""}`}
              type="button"
              role="tab"
              tabIndex="-1"
            >
              <span>التراسونك كلينر</span>
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            onClick={() => setActive("exocad")}
          >
            <button
              className={`nav-links ${active === "exocad" ? "active" : ""}`}
              type="button"
              role="tab"
              tabIndex="-1"
            >
              <span>برنامج الاكزوكاد</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
