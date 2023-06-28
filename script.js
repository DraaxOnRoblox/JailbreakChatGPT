function copyToClipboard() {
    var text = document.getElementById("textToCopy").innerHTML;
    navigator.clipboard.writeText(text);
}