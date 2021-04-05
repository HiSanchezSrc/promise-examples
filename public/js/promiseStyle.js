const promiseStyle = (src) =>
{
    console.log(`attempting to load stylesheet ${src}`);
    return new Promise((pass, fail) =>
    {
        setTimeout(() =>
        {
            let style = document.createElement('link');
            style.setAttribute('rel', 'stylesheet');
            style.setAttribute('href', src);
            style.onload = () => pass(style);
            style.onerror = () => fail(new Error('Stylesheet would not load'));
            document.head.append(style);
        }, 1000)
    })
}