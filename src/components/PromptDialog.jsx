// components/PromptDialog.jsx
import React from "react";
import PropTypes from "prop-types";
import './../styles/App.css'; // Ensure to import the updated CSS file

const PromptDialog = ({
  isOpen,
  onClose,
  onCopy,
  textareaContent,
  setTextareaContent,
}) => {
  if (!isOpen) return null;

  const handleCopy = () => {
    onCopy();
    onClose();
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h2>Generate Prompt</h2>
        <textarea
          value={textareaContent}
          onChange={(e) => setTextareaContent(e.target.value)}
          placeholder="Enter job description here..."
        />
        <div>
          <button onClick={handleCopy}>Copy to Clipboard</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

PromptDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
  textareaContent: PropTypes.string.isRequired,
  setTextareaContent: PropTypes.func.isRequired,
};

export default PromptDialog;
