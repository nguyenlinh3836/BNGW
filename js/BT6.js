$.ajax(
    {
        url : "data/weather.json",
        method: "GET",
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
                    '            <h1>'+temp+'ºK </h1>\n' +
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