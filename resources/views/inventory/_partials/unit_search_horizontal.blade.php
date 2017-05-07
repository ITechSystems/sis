<div class="row">
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-heading">Unit Search</div>

            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="developer">Developer</label>
                            <input type="text" class="form-control" name="developer" id="developer">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="developer">Location</label>
                            <select name="location_horizontal" id="location_horizontal" class="form-control" @change="getProjectsByLocation(location)" v-model="location">
                                <option value="">From where</option>
                                @foreach($locations as $location)
                                    <option>{{ $location->location }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="project_name_horizontal">Project Name</label>
                            <select name="project_name_horizontal" id="project_name_horizontal" class="form-control" @change="getBlocksByProject(project)" v-model="project">
                                <option value="">Project</option>
                                <option v-for="project in projects" :value="project.project">@{{ project.project }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="block_horizontal">Block</label>
                                    <input type="text" class="form-control" name="block_horizontal" id="block_horizontal">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="lot_horizontal">Lot</label>
                                    <input type="text" class="form-control" name="lot_horizontal" id="lot_horizontal">
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
                                    <input class="form-control" name="price_minimum_horizontal" id="price_minimum_horizontal" placeholder="Min">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="price_maximum">&nbsp;</label>
                                    <input class="form-control" name="price_maximum_horizontal" id="price_maximum_horizontal" placeholder="Max">
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
                                    <input type="text" class="form-control" name="lot_area_min_horizontal" id="lot_area_min_horizontal" placeholder="Min">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="lot_area_max">&nbsp;</label>
                                    <input type="text" class="form-control" name="lot_area_max_horizontal" id="lot_area_max_horizontal" placeholder="Max">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="floor_area_min">Floor Area (sq. m)</label>
                                    <input type="text" class="form-control" name="floor_area_min_horizontal" id="floor_area_min_horizontal" placeholder="Min">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="floor_area_max">&nbsp;</label>
                                    <input type="text" class="form-control" name="floor_area_max_horizontal" id="floor_area_max_horizontal" placeholder="Max">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="lot_type_horizontal">Lot Type</label>
                            <input type="text" class="form-control" name="lot_type_horizontal" id="lot_type_horizontal">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="house_model_horizontal">House Model</label>
                            <input type="text" class="form-control" name="house_model_horizontal" id="house_model_horizontal">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
