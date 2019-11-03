<template>
    <div class="counter">
        <h1>Counter Sample</h1>

        <p>Current count: {{ currentCount }}</p>

        <button class="btn btn-primary" @click="IncrementCount">Click me</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentCount: localStorage.getItem('counter') || 0
        }
    },
    methods: {
        IncrementCount() {
            this.currentCount ++
            localStorage.setItem('counter', this.currentCount)
        }
    },
    mounted() {
    }
}
</script>
