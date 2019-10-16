$.ajax({
    url: "data/weather.json",
    method: "GET",
    success: function (result)  {
        var a = result.name;
        var b= result .sys .country;
        var c = result .main.temp;
        var d = result .main .pressure;
        var e = result .main .humidity;
        var f = result .wind .speed;
        var g= result.weather;
        var xyz = ' <div class="content">\n' +
            '</span> '+a+'</span> -  <span>'+b+'</span><br>' +
            '<span> '+c+' K </span><br>' +
            '<span> '+d+' Z </span><br>' +
            '<span>'+e+'%</span>' +
            ' <span>'+f+' km/h</span>' +
                '</div>\n' +
            '</div>';
            var abc = g[0];
            var content = $(".content");
            content.append(abc);
            content.append(xyz);
        }
    }
});



