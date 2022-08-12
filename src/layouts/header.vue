<template>
    <div class="container">
        <div class="header-wrapper row m-0 mb-4">
            <div class="time-container align-items-center col-6 p-0">
                <span> {{ time != '' ? time : '00:00' }} </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-send-fill icon-locate"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
                    />
                </svg>
            </div>
            <div class="battery-container col-6 p-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-wifi-2 icon-wifi"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bar-chart-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-battery-full icon-battery"
                    viewBox="0 0 16 16"
                >
                    <path d="M2 6h10v4H2V6z" />
                    <path
                        d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"
                    />
                </svg>
            </div>
        </div>
        <div class="weather">
            <div class="main-weather w-100">
                <div class="weather-location">{{ weather.name != undefined ? weather.name : '' }}</div>
                <div class="weather-temperature">
                    {{ weather.name != undefined ? Math.floor(weather.main.temp) : '' }}°
                </div>
                <div class="weather-description">{{ weather.name != undefined ? weather.weather[0].main : '' }}</div>
                <div class="weather-other">
                    H:{{ weather.name != undefined ? Math.ceil(weather.main.temp_max) : '' }}° L:{{
                        weather.name != undefined ? Math.floor(weather.main.temp_min) : ''
                    }}°
                </div>
            </div>
            <div class="hour-predict bd-15 p-2 blue">
                <div class="hour-predict-title">Cloudy conditions will continue for the rest of the day.</div>
                <hr />
                <div class="predict-detail m-0 row">
                    <div class="col-2 green">1</div>
                    <div class="col-2 red">2</div>
                    <div class="col-2 green">3</div>
                    <div class="col-2 red">4</div>
                    <div class="col-2 green">5</div>
                    <div class="col-2 red">6</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SystemHeader',
    data() {
        return {
            time: '',
            api_key: 'dedab2133d6ef1e8d375648220e1756a',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            query: '',
            weather: {},
            bg_img: '@/assets/img/winter-bg.jpg',
            initLocal: 'hanoi',
        };
    },
    methods: {
        getTime() {
            setInterval(() => {
                const d = new Date();
                let hour = d.getHours();
                let minutes = d.getMinutes();
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                this.time = hour + ':' + minutes;
            }, 15000);
        },
        fetchWeather(e) {
            if (e.key === 'Enter') {
                this.$axios
                    .get(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                    .then((res) => {
                        this.weather = res.data;
                    });
            }
        },
        initFetchWeather() {
            this.$axios
                .get(`${this.url_base}weather?q=${this.initLocal}&units=metric&APPID=${this.api_key}`)
                .then((initRes) => {
                    this.weather = initRes.data;
                    console.log('check init data: ', initRes.data);
                });
        },
    },
    mounted() {
        this.getTime();
        this.initFetchWeather();
    },
};
</script>

<style scoped>
.container {
    background-image: url('@/assets/img/rain-bg.jpg');
    background-size: cover;
    height: 926px;
    /* background-position: bottom; */
}

.header-wrapper {
    height: 40px;
    /* background: red; */
    padding: 0 10px;
    padding-bottom: 20px;
    color: #fff;
}

.time-container {
    line-height: 40px;
}

.battery-container {
    line-height: 40px;
    text-align: end;
}

.icon-battery {
    width: 30px;
    height: 30px;
    margin: 3px;
    margin-left: 9px;
}

.icon-wifi {
    width: 30px;
    height: 30px;
    margin: 3px;
    transform: translateY(-4px);
}

.icon-locate {
    transform: translateY(-2px);
    width: 12px;
    height: 12px;
    margin-left: 7px;
}

/* Weather */

.main-weather {
    height: 300px;
    color: white;
    text-align: center;
    padding: 30px 0;
}

.weather-location {
    font-size: 30px;
}

.weather-temperature {
    font-size: 80px;
    line-height: 80px;
    font-weight: 300;
}

.weather-description {
    font-size: 20px;
    line-height: 40px;
}

.weather-other {
    font-size: 24px;
    font-weight: 400;
}

.hour-predict {
    height: 250px;
    color: #fff;
}

.predict-detail {
    height: 200px;
}
</style>
