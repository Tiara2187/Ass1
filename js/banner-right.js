const bannerright = [
    {
        image: "../images/youtube-trump.jpg",
        title: "YouTube to lift Trump ban if violence threat falls, says CEO",
        conten: "YouTube's chief executive has said the platform may lift Donald Trump's suspension, if the threat of real-world violence decreases." ,
        link: "/article/youtube-to-lift-trump.html"  
    },
    {
        image: "../images/redit-chief.jpg",
        title: "Reddit chief: I was late to spot GameStop stock mania",
        conten: "\"I was actually a little late to the party,because I didn't realise that Reddit had leaked into the real world again,\" he said.",
        link: "/article/reddit-gamestop.html"
    },
    {
        image: "../images/apple.jpg",
        title: "Apple announces iphone 12 and Iphone 12 Mini With an updated design and 5G",
        conten: "Apple today unveiled iPhone 12 and iPhone 12 mini with 5G technology,ushering in a new era for the world’s best smartphone.",
        link: "/article/apple-iphone12-5g.html"

    },
    {
        image: "../images/vr.jpg",
        title: "Using VR Training to Boost Our Sense of Agency and Improve Motor Control",
        conten: "The two aspects of body awareness: The experience of one's visible hands as one's own (ownership) and the experience of authorship",
        link: "/article/ussing-vr-training.html"
    }
    
];

    $(document).ready(function(){

        for (let x = 0; x < bannerright.length; x++) {
        const postPreviewTemplate = `
                <div class = "hot-topic">
            <img src = "${bannerright[x].image}" alt = "img-topic">
            <div class = "hot-topic-content">
                <h2>${bannerright[x].title}</h2>
                <p>${bannerright[x].conten}</p>
                <a href = "${bannerright[x].link}">Read More</a>
            </div>
        </div>
        `
            $("#banner-right").append(postPreviewTemplate);   
        }    
})