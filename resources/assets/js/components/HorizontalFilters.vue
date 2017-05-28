<template>
    <form action="/search/unit" method="POST">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">Unit Search</div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="developer">Developer</label>
                                        <select name="developer" class="form-control" v-model="form.developer" id="developer" @change="getLocationByDeveloper(form.developer)">
                                            <option v-for="developer in developers">{{ developer.developer }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="developer">Location</label>
                                        <select name="location_horizontal" id="location_horizontal" class="form-control" @change="getProjectsByLocation(form.location_horizontal)" v-model="form.location_horizontal">
                                            <option value="">From where</option>
                                            <option v-for="l in locations">{{ l.location }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="project_name_horizontal">Project Name</label>
                                        <select name="project_name_horizontal" id="project_name_horizontal" class="form-control" v-model="form.project_name_horizontal">
                                            <option value="">Project</option>
                                            <option v-for="project in projects" :value="project.project">@{{ project.project }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="block_horizontal">Block and Lot</label>
                                                <input type="text" class="form-control" name="block_horizontal" id="block_horizontal" v-model="form.block_horizontal">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="lot_horizontal">Zone</label>
                                                <input type="text" class="form-control" name="zone_horizontal" id="zone_horizontal" v-model="form.zone_horizontal">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="price_minimum">Price</label>
                                                <input class="form-control" name="price_minimum_horizontal" id="price_minimum_horizontal" placeholder="Min" v-model="form.price_minimum_horizontal" type="number">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="price_maximum">&nbsp;</label>
                                                <input class="form-control" name="price_maximum_horizontal" id="price_maximum_horizontal" placeholder="Max" v-model="form.price_maximum_horizontal" type="number">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="phase_horizontal">Phase</label>
                                                <input class="form-control" type="text" name="phase_horizontal" id="phase_horizontal" placeholder="Phase" v-model="form.phase_horizontal">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="lot_area_min">Lot Area (sq. m)</label>
                                                <input type="number" class="form-control" name="lot_area_min_horizontal" id="lot_area_min_horizontal" placeholder="Min" v-model="form.lot_area_min_horizontal">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="lot_area_max">&nbsp;</label>
                                                <input type="number" class="form-control" name="lot_area_max_horizontal" id="lot_area_max_horizontal" placeholder="Max" v-model="form.lot_area_max_horizontal">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="floor_area_min">Floor Area (sq. m)</label>
                                                <input type="number" class="form-control" name="floor_area_min_horizontal" id="floor_area_min_horizontal" placeholder="Min" v-model="form.floor_area_min_horizontal">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="floor_area_max">&nbsp;</label>
                                                <input type="number" class="form-control" name="floor_area_max_horizontal" id="floor_area_max_horizontal" placeholder="Max" v-model="form.floor_area_max_horizontal">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="lot_type_horizontal">Lot Type</label>
                                        <input type="text" class="form-control" name="lot_type_horizontal" id="lot_type_horizontal" v-model="form.lot_type_horizontal">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="house_model_horizontal">House Model</label>
                                        <input type="text" class="form-control" name="house_model_horizontal" id="house_model_horizontal" v-model="form.house_model_horizontal">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-20">
                <div class="col-md-12 text-center">
                    <button class="btn btn-primary" @click.prevent="searchUnits">SEARCH UNITS</button>
                    <button class="btn btn-default" @click.prevent="reset()">RESET SEARCH</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import Form from '../core/Form.js';

    export default {
        data() {
            return {
                form: new Form({
                    developer: '',
                    location_horizontal: '',
                    project_name_horizontal: '',
                    block_horizontal: '',
                    lot_horizontal: '',
                    price_minimum_horizontal: '',
                    price_maximum_horizontal: '',
                    lot_area_min_horizontal: '',
                    lot_area_max_horizontal: '',
                    floor_area_min_horizontal: '',
                    floor_area_max_horizontal: '',
                    lot_type_horizontal: '',
                    house_model_horizontal: '',
                    zone_horizontal: '',
                    phase_horizontal: ''
                }),
                projects: [],
                units: [],
                developers: [],
                locations: []
            }
        },

        mounted() {
            this.getDevelopers()
        },

        methods: {
            getDevelopers(){
                this.$http.get(`/search/getDevelopers`).then(res => {
                    this.developers = res.data
                })
            },

            getProjectsByLocation(location) {
                this.$http.get(`/search/getProjectsByLocation?location=${location}`).then(response => {
                    this.projects = response.data;
                });
            },

            getLocationByDeveloper(developer){
                this.$http.get(`/search/locations?developer=${developer}`).then(res => {
                    this.locations = res.data
                })
            },

            reset() {
                this.form.reset();

                this.$emit('reset');
            },

            searchUnits() {
                this.form.post(`/search/unit`).then(response => {
                    this.$emit('search', response);
                });
            }
        }
    }
</script>
