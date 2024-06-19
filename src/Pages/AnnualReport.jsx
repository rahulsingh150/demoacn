import React from "react";
import pdf1 from "../Assests/AnnualReport/Annual report- 17-18.pdf";
import "../Styles/Annual.css";
function AnnualReport() {
  return (
    <>
      <h1>pdf Annual Report</h1>

      <div className="pdf-par">
        <h1 className="pdf-text">Annual report- 17-18</h1>
        <div class="pdf-viewer-container">
          <embed src={pdf1} type="application/pdf" class="pdf-viewer" />
        </div>
      </div>
      <div className="pdf-par">
        <h1 className="pdf-text">Annual report- 17-18</h1>
        <div class="pdf-viewer-container">
          <embed src={pdf1} type="application/pdf" class="pdf-viewer" />
        </div>
      </div>
      <div className="pdf-par">
        <h1 className="pdf-text">Annual report- 17-18</h1>
        <div class="pdf-viewer-container">
          <embed src={pdf1} type="application/pdf" class="pdf-viewer" />
        </div>
      </div>
      <div className="pdf-par">
        <h1 className="pdf-text">Annual report- 17-18</h1>
        <div class="pdf-viewer-container">
          <embed src={pdf1} type="application/pdf" class="pdf-viewer" />
        </div>
      </div>
      <div className="pdf-par">
        <h1 className="pdf-text">Annual report- 17-18</h1>
        <div class="pdf-viewer-container">
          <embed src={pdf1} type="application/pdf" class="pdf-viewer" />
        </div>
      </div>
    </>
  );
}

export default AnnualReport;
