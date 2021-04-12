const topleft = [
    {
        image: "../images/clubhouse.jpg",
        title: "ByteDance to develop Clubhouse-like app for China",
        conten: "TikTok owner ByteDance is working on a Clubhouse-like app for China, as the global success of the US-based audio chat service inspires a rush of copycats in the country" ,
        link: "/article/bytedance-clubhouse.html"  
    }
    
];

    $(document).ready(function(){

        for (let x = 0; x < topleft.length; x++) {
        const postPreviewTemplate = `
        <article>
        <img src = "${topleft[x].image}">
        <div>
            <h3>${topleft[x].title}</h3>
            <p>
                ${topleft[x].conten}
            </p>
            <a href = "${topleft[x].link}">Read More <span>>></span></a>
        </div>
    </article>
    `
            $("#conten-top-left").append(postPreviewTemplate);   
        }    
})