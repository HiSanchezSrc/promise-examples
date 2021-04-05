const loadScript = (src, callback) =>
{
    console.log(`attempting to load script ${src}`);
    setTimeout(() => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => callback(script);
        document.head.append(script);
    }, 1000);
}