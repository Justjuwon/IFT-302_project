function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file.");
        return;
    }

    const fileList = document.getElementById("fileList");

    const li = document.createElement("li");

    const fileName = document.createElement("span");
    fileName.textContent = file.name;

    const downloadBtn = document.createElement("a");
    downloadBtn.textContent = "Download";
    downloadBtn.href = URL.createObjectURL(file);
    downloadBtn.download = file.name;

    li.appendChild(fileName);
    li.appendChild(downloadBtn);

    fileList.appendChild(li);

    fileInput.value = "";
}