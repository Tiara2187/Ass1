const faq = [
    {
        title: "What is IT News ?",
        conten: "IT News is a social tech news site where you can read and discuss all the latest tech news. The site is updated 24 hours a day, 7 days a week by the community. Our members search the net for the most interesting stories and hundreds get submitted by IT News contributors each day. The most interesting stories get featured on the IT News homepage where they are rated by a temperature score reflecting the popularity of each story."
    },
    {
        title: "Who writes the news ?",
        conten: "IT News is a community driven website, which means all news stories are posted by our members. Stories must have a valid source, which can be found via the Read Full Story link beneath each story. Instead of just having a handful of staff members, IT News has thousands which search the net for the most interesting stories. This way IT News is able to cover many more news stories each day than a traditional tech news site."
    },

    {
        title: "Who writes the news?",
        conten: "IT News is a community driven website, which means all news stories are posted by our members. Stories must have a valid source, which can be found via the Read Full Story link beneath each story. Instead of just having a handful of staff members, IT News has thousands which search the net for the most interesting stories. This way IT News is able to cover many more news stories each day than a traditional tech news site."
    },
    {
       
        title: "Can I post news ?",
        conten: "All members can submit news tips to the site but only IT News Contributors are allowed to submit actual news posts.To become an IT News contributor you must first take a short test to make sure you understand the basics behind news posting. If you pass the test you can start to submit news stories to the pending news area. However you will not become an official IT News contributor until 5 of your news stories have been approved by the community."
    }

];

    $(document).ready(function(){

        for (let i = 0; i < faq.length; i++) {
        const postPreviewTemplate = `
                <div class="accordion">
            <div class="icon"></div>
            <h5>${faq[i].title}</h5>
        </div>
        <div class="panel">
        <p>${faq[i].conten}</p>
        </div>
        ` 
            $("#faq-accordion").append(postPreviewTemplate);   
        }    
})