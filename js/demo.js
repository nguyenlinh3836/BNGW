
$.ajax ({
    url: "data/data.json",
    method: "GET",
    success: function (result) {
        var arts =result.articles;
        for (i=0;i<arts.length;i++) {
            var xyz = ' <div class="article">\n' +
                '                <div class="art-title">\n' +
                '                <h2>'+arts[i].title+'</h2>\n' +
                '                </div>\n' +
                '                <div class="art-info">\n' +
                '                    <span> Posted by Admin at <span>'+arts[i].posted_at+'</span></span>\n' +
                '                </div>\n' +
                '                <div class="art-desc">\n' +
                '                    <div class="thumb">\n' +
                '                        <img src="'+art[i].image+'" width="250px"/>\n' +
                '                    </div>\n' +
                '                <div class="desc">\n' +
                '                    <span>'+arts[i].desc+'</span>\n' +
                '\n' +
                '                    </div>\n' +
                '                </div>';
            var content = $(".content");
            content.append(xyz)
        }
    }
});

