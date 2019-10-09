<template>
    <div>
        <h1>Weather forecast</h1>

        <p>This component demonstrates fetching data from a service.</p>

        <table v-if="forecasts" class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="forecast in forecasts" v-bind:key="forecast.date">
                    <td>{{ forecast.date }}</td>
                    <td>{{ forecast.temperatureC }}</td>
                    <td>{{ forecast.temperatureF }}</td>
                    <td>{{ forecast.summary }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            forecasts: null
        }
    },
    async mounted() {
        const res = await axios.get('/WeatherForecast')
        //console.log(res)
        if (res && res.status == 200) {
            this.forecasts = res.data
        }
    }
}
</script>
