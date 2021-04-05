const promiseScript = (src) =>
{
    console.log(`attempting to load script ${src}`);
    return new Promise((pass, fail) =>
    {
        setTimeout(() =>
        {
            let script = document.createElement('script');
            script.src = src;
            script.onload = () => pass(script);
            script.onerror = () => fail(new Error('Script would not load'));
            document.head.append(script);
        }, 1000)
    })
}