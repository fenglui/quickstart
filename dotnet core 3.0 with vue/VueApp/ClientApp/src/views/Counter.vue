<template>
    <div class="counter">
        <h1>Counter</h1>

        <p>Current count: {{ currentCount }}</p>

        <button class="btn btn-primary" @click="IncrementCount">Click me</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentCount: 0
        }
    },
    methods: {
        IncrementCount() {
            this.currentCount ++
        }
    }
}
</script>
