<template>
    <div>
        <p>Click on the map to place a marker</p>
        <canvas id="project-map" width="600" height="400" @mousemove="getCoordinates" @click="plotMarker">
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

        computed: {
            divisions() {
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
                // this.drawDivisions();
            },

            drawMap() {
                let map = new Image();

                map.onload = () => {
                    this.context.drawImage(map, 0, 0, this.canvas.width, this.canvas.height);
                }

                map.src = '/img/map.png';
            },

            drawDivisions() {
                window.onload = () => {
                    let rectangle = this.canvas.getBoundingClientRect();
                    let divisionWidth = rectangle.width / 4;
                    let divisionHeight = rectangle.height / 3;

                    this.context.globalAlpha = 0.5;
                    this.context.fillStyle = '#FFFFFF';

                    this.context.fillRect(0, 0, divisionWidth, divisionHeight);
                    this.context.fillRect(divisionWidth, 0, divisionWidth, divisionHeight);
                    this.context.fillRect(divisionWidth * 2, 0, divisionWidth, divisionHeight);
                    this.context.fillRect(divisionWidth * 3, 0, divisionWidth, divisionHeight);

                    this.context.fillRect(0, divisionHeight, divisionWidth, divisionHeight);
                    this.context.fillRect(divisionWidth, divisionHeight, divisionWidth, divisionHeight);
                    this.context.fillRect(divisionWidth * 2, divisionHeight, divisionWidth, divisionHeight);
                    this.context.fillRect(divisionWidth * 3, divisionHeight, divisionWidth, divisionHeight);

                    this.context.fillRect(0, divisionHeight * 2, divisionWidth, divisionHeight);
                    this.context.fillRect(divisionWidth, divisionHeight * 2, divisionWidth, divisionHeight);
                    this.context.fillRect(divisionWidth * 2, divisionHeight * 2, divisionWidth, divisionHeight);
                    this.context.fillRect(divisionWidth * 3, divisionHeight * 2, divisionWidth, divisionHeight);
                }
            },

            getCoordinates(mouse) {
                let rectangle = this.canvas.getBoundingClientRect();

                this.mouseX = accounting.formatNumber((mouse.clientX - rectangle.left) / rectangle.width);
                this.mouseY = accounting.formatNumber((mouse.clientY - rectangle.top) / rectangle.height);

                this.highLightDivision();
            },

            highLightDivision() {

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
            }
        }
    }
</script>
