<template>
    <div class="sidebar">
        <div class="top-row pl-4 navbar navbar-dark">
            <a class="navbar-brand" href>VueApp</a>
            <button class="navbar-toggler">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse">
            <ul class="nav flex-column">
                <li class="nav-item px-3">
                    <a href="/#/home" class="nav-link active">
                        <span class="oi oi-home" aria-hidden="true"></span> Home
                    </a>
                </li>
                <li class="nav-item px-3">
                    <a href="/#/counter" class="nav-link">
                        <span class="oi oi-plus" aria-hidden="true"></span> Counter
                    </a>
                </li>
                <li class="nav-item px-3">
                    <a href="/#/fetchdata" class="nav-link">
                        <span class="oi oi-list-rich" aria-hidden="true"></span> Fetch data
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
</style>
