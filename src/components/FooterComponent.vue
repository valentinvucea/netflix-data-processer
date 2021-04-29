<template>
    <footer class="bg-light">
        <div class="container">
            <p class="float-right">
                <a href="#">Back to top</a>
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
    created: function() {
        // console.log('Footer loaded');
    },
};
</script>

<style>
    footer {
        flex-shrink: 0;
        border-top: 1px solid #eeeeee;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    footer p {
        margin-bottom: .25rem;
    }
</style>