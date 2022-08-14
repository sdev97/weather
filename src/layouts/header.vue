<template>
    <div class="wrapper">
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
                <div class="hour-predict bd-15 p-3">
                    <div class="hour-predict-title">Cloudy conditions will continue for the rest of the day.</div>
                    <hr />
                    <div class="predict-detail d-flex m-0 pt-2 row">
                        <div class="col-2 predict-detail-col">
                            <div class="predict-time">Now</div>
                            <div class="predict-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-cloud-drizzle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
                                    />
                                </svg>
                            </div>
                            <div class="predict-detail-temperature">27°</div>
                        </div>
                        <div class="col-2 predict-detail-col">
                            <div class="predict-time">Now</div>
                            <div class="predict-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-cloud-drizzle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
                                    />
                                </svg>
                            </div>
                            <div class="predict-detail-temperature">27°</div>
                        </div>
                        <div class="col-2 predict-detail-col">
                            <div class="predict-time">Now</div>
                            <div class="predict-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-cloud-drizzle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
                                    />
                                </svg>
                            </div>
                            <div class="predict-detail-temperature">27°</div>
                        </div>
                        <div class="col-2 predict-detail-col">
                            <div class="predict-time">Now</div>
                            <div class="predict-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-cloud-drizzle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
                                    />
                                </svg>
                            </div>
                            <div class="predict-detail-temperature">27°</div>
                        </div>
                        <div class="col-2 predict-detail-col">
                            <div class="predict-time">Now</div>
                            <div class="predict-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-cloud-drizzle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
                                    />
                                </svg>
                            </div>
                            <div class="predict-detail-temperature">27°</div>
                        </div>
                        <div class="col-2 predict-detail-col">
                            <div class="predict-time">Now</div>
                            <div class="predict-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-cloud-drizzle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
                                    />
                                </svg>
                            </div>
                            <div class="predict-detail-temperature">27°</div>
                        </div>
                    </div>
                </div>
                <div class="hour-predict bd-15 p-3">
                    <div class="day-predict-title d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        10 DAYS FORECAST
                    </div>
                    <div class="predict-detail-bottom align-items-center d-flex m-0 row">
                        <div class="col-5 p-0 d-flex align align-items-center">
                            <span style="font-size: 23px; margin-right: 40px;">Today</span>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    fill="currentColor"
                                    class="bi bi-cloud-drizzle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
                                    />
                                </svg>
                        </div>
                        <div class="col-7">
                            <span>24°</span>
                            <div class="progress" style="display: inline-block">
                                <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>28°</span>
                        </div>
                    </div>
                    <div class="predict-detail-bottom align-items-center d-flex m-0 row">
                        <div class="col-5 p-0 d-flex align align-items-center">
                            <span style="font-size: 23px; margin-right: 40px;">Today</span>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    fill="currentColor"
                                    class="bi bi-cloud-drizzle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
                                    />
                                </svg>
                        </div>
                        <div class="col-7">
                            <span>24°</span>
                            <div class="progress" style="display: inline-block">
                                <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>28°</span>
                        </div>
                    </div>
                    <div class="predict-detail-bottom align-items-center d-flex m-0 row">
                        <div class="col-5 p-0 d-flex align align-items-center">
                            <span style="font-size: 23px; margin-right: 40px;">Today</span>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    fill="currentColor"
                                    class="bi bi-cloud-drizzle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
                                    />
                                </svg>
                        </div>
                        <div class="col-7">
                            <span>24°</span>
                            <div class="progress" style="display: inline-block">
                                <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>28°</span>
                        </div>
                    </div>
                    <div class="predict-detail-bottom align-items-center d-flex m-0 row">
                        <div class="col-5 p-0 d-flex align align-items-center">
                            <span style="font-size: 23px; margin-right: 40px;">Today</span>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    fill="currentColor"
                                    class="bi bi-cloud-drizzle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
                                    />
                                </svg>
                        </div>
                        <div class="col-7">
                            <span>24°</span>
                            <div class="progress" style="display: inline-block">
                                <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>28°</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-control row m-0 p-2">
            <div class="col-2 bottom-control-children d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
                </svg>
            </div>
            <div class="col-8 bottom-control-children d-flex justify-content-center align-items-center">
                <svg data-v-1564bf6c="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-send-fill bi-send-fill-sm icon-locate">
                    <path data-v-1564bf6c="" d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                </svg>
            </div>
            <div class="col-2 bottom-control-children d-flex justify-content-center align-items-center m-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
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
.wrapper {
    background-image: url('@/assets/img/rain-bg.jpg');
    background-size: cover;
    height: 926px;
    position: relative;
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
    padding: 30px 0 0 0;
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
    margin-top: 20px;
    min-height: 200px;
    color: #fff;
    background-color: #456087;
    opacity: 0.9;
}

.predict-detail {
    height: 100px;
}

.predict-icon svg {
    width: 26px;
    height: 26px;
}

.predict-detail-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.progress {
    display: inline-block;
    width: 65%;
    margin: 0px 10px;
    height: 10px;
}

.predict-detail-bottom {
    padding-bottom: 7px;
    padding-top: 5px;
    border-bottom: 3px solid #93a2b7;
}

.day-predict-title {
    padding-bottom: 12px;
    border-bottom: 3px solid #93a2b7
}

.day-predict-title svg {
    margin-right: 5px
}

.bottom-control {
    height: 102px;
    position: absolute;
    background-color: #3c4d67;
    opacity: 0.95;
    width: 100%;
    bottom: 0;
    left: 0;
}

.bottom-control svg {
    color: #fff;
}

.bottom-control-children {
    height: 40px;
}

.bi-circle-fill {
    opacity: 0.5;
    margin: 0 5px;
}

.bi-send-fill-sm {
    transform: translateY(1px);
    margin: 0 5px;
}
</style>
