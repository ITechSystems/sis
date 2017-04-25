<template>
    <div>
        <p>Click on the map to place a marker
        </p>
        <canvas id="project-map" width="600" height="400" @mousemove="getCoordinates">
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

        mounted() {
            this.prepareCanvas();
        },

        methods: {
            prepareCanvas() {
                this.canvas = document.querySelector('#project-map');
                this.context = this.canvas.getContext('2d');

                this.drawMap();
                this.drawDivisions();
            },

            drawMap() {
                let map = new Image();

                map.onload = () => {
                    this.context.drawImage(map, 0, 0, this.canvas.width, this.canvas.height);
                }

                map.src = "/img/map.png";
            },

            drawDivisions() {
                window.onload = () => {
                    let rectangle = this.canvas.getBoundingClientRect();

                    this.context.fillStyle = '#FF0000';
                    this.context.fillRect(0, 0, rectangle.width / 4, rectangle.height / 4);
                }
            },

            getCoordinates(mouse) {
                let rectangle = this.canvas.getBoundingClientRect();

                this.mouseX = accounting.formatNumber((mouse.clientX - rectangle.left) / rectangle.width);
                this.mouseY = accounting.formatNumber((mouse.clientY - rectangle.top) / rectangle.height);
            },

            plotMarker() {
                let rectangle = this.canvas.getBoundingClientRect();

                this.context.fillStyle = "#FF0000";
                this.context.fillRect(
                    rectangle.width * this.mouseX,
                    rectangle.height * this.mouseY,
                    10,
                    10
                );
            }
        }
    }
</script>
