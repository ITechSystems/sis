<template>
    <div>
        <p>Click on the map to place a marker</p>
        <canvas id="project-map" width="500" height="400" @mousemove="getCoordinates" @click="plotMarker">
            <img src="/img/map.png" id="map-image">
        </canvas>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                canvas: '',
                context: '',
                mouseX: 0,
                mouseY: 0,
            }
        },

        props: ['x', 'y'],

        mounted() {
            this.prepareCanvas();

            if (this.x && this.y) {
                this.plotMarker();
            }
        },

        methods: {
            prepareCanvas() {
                this.canvas = document.querySelector('#project-map');
                this.context = this.canvas.getContext('2d');

                this.drawMap();
            },

            drawMap() {
                let map = new Image();

                map.onload = () => {
                    this.context.drawImage(map, 0, 0, this.canvas.width, this.canvas.height);
                }

                map.src = '/img/map.png';
            },

            getCoordinates(mouse) {
                let rectangle = this.canvas.getBoundingClientRect();

                this.mouseX = accounting.formatNumber((mouse.clientX - rectangle.left) / rectangle.width, 4);
                this.mouseY = accounting.formatNumber((mouse.clientY - rectangle.top) / rectangle.height, 4);
            },

            plotMarker() {
                let rectangle = this.canvas.getBoundingClientRect();

                this.context.fillStyle = '#FF0000';
                this.context.fillRect(
                    rectangle.width * this.mouseX,
                    rectangle.height * this.mouseY,
                    10,
                    10
                );

                this.$emit('plotted', {
                    x: this.mouseX,
                    y: this.mouseY,
                });
            }
        },

        watch: {
            x() {
                this.plotMarker();
            },

            y() {
                this.plotMarker();
            },
        }
    }
</script>
