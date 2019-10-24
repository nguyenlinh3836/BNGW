
$("#btn-search").click(function () {
    var value =  $("#search").val();
    $.ajax(
        {
            url : "https://content.googleapis.com/youtube/v3/search",
            method: "GET",
            data: {
                q: value,
                type:"video",
                maxResult: 9,
                part: "snippet",
                key: "AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc"
            },
            success: function (result) {
                $(".content-main").html(" ");
                for (i=0; i<result.items.length;i++){
                    var html = '<div class="content-main">\n' +
                        '<div class="desc">\n' +
                        '                    <div class="desc-img">\n' +
                        '                        <img src="'+result.items[i].snippet.thumbnails.medium.url+'" alt width="246px">\n' +
                        '                    </div>\n' +
                        '                    <div class="desc-text">\n' +
                        '                        <div class="desc-info">\n' +
                        '                            <h3>'+result.items[i].snippet.title+'</h3>\n' +
                        '                            <span>lượt xem </span>\n' +
                        '                        </div>\n' +
                        '                        <div class="desc-content">\n' +
                        '                            <span>'+result.items[i].snippet.description+'</span>\n' +                        '\n' +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                </div>\n' +
                                    '</div>';

                    $(".content-main").append(html);
                }
            }
        });
});


