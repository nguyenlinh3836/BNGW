$.ajax(
    {
        url : "http://api.openweathermap.org/data/2.5/weather",
        method: "GET",
        data :{
            q:"hanoi,vietnam",
            appid: "e7609cf731b7aa63dad0dc9c2485545f",
            units:"metric"
        },
        success : function (result) {
            var city = result.name;
            var temp= result.main.temp;
            var weather = result.weather;
            var cloud;
            for(i=0; i< weather.length;i++) {
                cloud=weather[i].main;
            }
                var xyz = '<div class="weatherbox">\n' +
                    '        <div class="text">\n' +
                    '            <h2>'+city+'</h2>\n' +
                    '            <h1>'+temp+'ºC </h1>\n' +
                    '            <h2>'+cloud+'</h2>\n' +
                    '        </div>\n' +
                    '    <div class="img">\n' +
                    '        <img src="IMG/sun.png">\n' +
                    '    </div>\n' +
                    '</div>';
            var content=$(".weatherbox");
            content.append(xyz);
        }
    }
);
$("#city_select").bind("change",function () {
    var value = $(this).val();
    $.ajax(
        {
            url : "http://api.openweathermap.org/data/2.5/weather",
            method: "GET",
            data : {
                q:value ,
                appid: "e7609cf731b7aa63dad0dc9c2485545f",
                units:"metric"
            },
            success : function (result) {
                var city = result.name;
                var temp= result.main.temp;
                var weather = result.weather;
                var cloud;
                for(i=0; i< weather.length;i++) {
                    cloud=weather[i].main;
                }
                var xyz = '<div class="weatherbox">\n' +
                    '        <div class="text">\n' +
                    '            <h2>'+city+'</h2>\n' +
                    '            <h1>'+temp+'ºC </h1>\n' +
                    '            <h2>'+cloud+'</h2>\n' +
                    '        </div>\n' +
                    '    <div class="img">\n' +
                    '        <img src="IMG/sun.png">\n' +
                    '    </div>\n' +
                    '</div>';
                var content=$(".weatherbox");
                content.html(xyz);
            }
        }
    )
});