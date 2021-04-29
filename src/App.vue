<template>
    <div class="app-container">
        <header-component v-show="showHeaderAndFooter" :key="key"></header-component>
        <main>
            <router-view :key="$route.fullPath"></router-view>
        </main>
        <footer-component v-show="showHeaderAndFooter"></footer-component>
    </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    name: "App",
    data () {
        return {
            key: 1
        };
    },
    components: {
        HeaderComponent,
        FooterComponent
    },
    computed: {
        showHeaderAndFooter() {
            return typeof this.$route.meta.mainOnly === 'undefined' || this.$route.meta.mainOnly === false;
        }
    }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
</style>

<style>
    html, body, .app-container {
        height: 100%;
    }

    .app-container {
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }

    .b-toaster.b-toaster-top-right .b-toaster-slot {
        margin-left: auto;
        margin-right: auto;
    }
</style>
