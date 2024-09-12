export default function ImageDownload(url, downloadElement, fileName = null) {
    if (!fileName) fileName = url.split('/').pop()
    fetch(url, {
        headers: new Headers({
            'Origin': location.origin
        }),
        mode: 'cors'
    })
    .then(response => response.blob())
    .then(blob => {
        let blobUrl = window.URL.createObjectURL(blob);
        var a = downloadElement;
        a.download = fileName
        a.href = blobUrl
        a.click()
    })
    .catch(e => console.error(e))   
}