$.ajax(
    {
        url: "http://api.openweathermap.org/data/2.5/forecast",
        method: "GET",
        data: {
            q:"hanoi,vietnam",
            appid :"09a71427c59d38d6a34f89b47d75975c",
            units: "metric"
        },
        success: function (result) {
            var city=result.city.name;
            var country=result.city.country;
            var list = result.list;
            for(i=0;i<list.length;i++) {
                var main = list[i].main;
            }
            var temp = main.temp;
           for ( i=0;i<list.length;i++){
               var weather = list[i].weather;
               var time = list [i].dt_txt;
           }
           for (i=0;i<weather.length;i++) {
               var cloud =weather[i].main;
           }

            var day = '<div class="weatherbox">\n' +
                '        <div class="day1">\n' +
                '            <h2>'+city+', '+country+'</h2>\n' +
                '            <h1>'+temp+' C </h1>\n' +
                '            <h2>'+cloud+'</h2>\n' +
                '        </div>' + '<div id="time2">\n' +
                '            <h1>'+time+'</h1>\n' +
                '            <h1> '+temp+' C</h1>\n' +
                '        </div>\n' +
                '        <div id="time3">\n' +
                '            <h1>time</h1>\n' +
                '            <h1>25 C</h1>\n' +
                '        </div>\n' +
                '        <div id="time3">\n' +
                '            <h1>time</h1>\n' +
                '            <h1>25 C</h1>\n' +
                '        </div>\n' +
                '            <div id="time4">\n' +
                '            <h1>time</h1>\n' +
                '            <h1>25 C</h1>\n' +
                '        </div>' +
                '</div>';
            var content = $(".weatherbox");
            content.html(day);
        }
    }
);

