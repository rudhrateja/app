import React from "react";

function FileUpload() {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      fetch("/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => console.log("Uploaded successfully:", data))
        .catch((err) => console.error("File upload failed:", err));
    }
  };

  return (
    <div className="file-upload">
      <h3>Upload a Document or Image</h3>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}

export default FileUpload;

