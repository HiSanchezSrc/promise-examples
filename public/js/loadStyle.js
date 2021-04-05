const loadStyle = (src, callback) =>
{
    console.log(`attempting to load stylesheet ${src}`)
    setTimeout(() => {
        let style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', src);
        style.onload = () => callback(style);
        document.head.append(style);
    }, 1000);
}