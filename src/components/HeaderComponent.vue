<template>
    <header class="bg-light fixed-top">
        <b-navbar toggleable="md" type="light">
            <b-container>
                <b-navbar-brand href="/">
                    <h4>Netflix Data Processor</h4>
                </b-navbar-brand>
                <b-navbar-toggle
                    target="navbar-toggle-collapse"
                ></b-navbar-toggle>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {}
    },
    methods: {
        // nothing yet
    },
    computed: {
        // nothing yet
    }
}
</script>

<style scoped>
.navbar-nav .nav-item.nav-last-item .nav-link {
    padding-right: 0;
}
</style>

<style>
header {
    border-bottom: 1px solid #eeeeee;
}

main {
    margin-top: 70px;
}
</style>
