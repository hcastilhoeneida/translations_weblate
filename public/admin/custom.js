// Custom JavaScript for translation management

console.log("Translation CMS customizations loaded");

// Add helpful styling for the code editor
const style = document.createElement("style");
style.textContent = `
  .nc-field-hint {
    font-size: 0.8em;
    color: #666;
    margin-top: 4px;
  }
  
  .nc-controlPane-section {
    margin-bottom: 20px;
  }
  
  .cms-code-editor {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 14px;
  }
`;
document.head.appendChild(style);

// Add validation helper for JSON
function validateJSON(jsonString) {
  try {
    JSON.parse(jsonString);
    return { valid: true };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

// Auto-format JSON on blur (if CMS provides event hooks)
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, translation utilities ready");
});

// Add some custom styles for better UX
const style = document.createElement("style");
style.textContent = `
  .nc-field-hint {
    font-size: 0.8em;
    color: #666;
    margin-top: 4px;
  }
  
  .nc-listControl-item {
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 8px;
    padding: 12px;
  }
  
  .nc-listControl-item:hover {
    border-color: #007acc;
  }
`;
document.head.appendChild(style);
