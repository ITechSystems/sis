@extends("layouts.app")

@section("content")
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default mb-0">
                <div class="panel-heading" style="display: flex; align-items: center; justify-content: space-between">
                    <span>AIDA MAPS</span>
                    <a  href="/aida-maps/create" class="btn btn-xs btn-primary">Create</a>
                </div>
                <div class="panel-body">
                    <div class="alert alert-success" v-if="message" v-cloak>
                        @{{ message }}
                    </div>
                    <table class="table" v-cloak>
                        <thead>
                            <tr>
                                <th>Control #</th>
                                <th>Unit ID</th>
                                <th>Buyer</th>
                                <th>Agent</th>
                                <th>Financing Type</th>
                                <th>Date Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="aidaMap in aidaMaps">
                                <td>@{{ aidaMap.id }}</td>
                                <td>@{{ aidaMap.unit.block_lot }}</td>
                                <td>@{{ aidaMap.buyer.first_name }} @{{ aidaMap.buyer.last_name }}</td>
                                <td>@{{ aidaMap.user.first_name }} @{{ aidaMap.user.last_name }}</td>
                                <td>@{{ aidaMap.finance_type }}</td>
                                <td>@{{ aidaMap.created_at }}</td>
                                <td>
                                    <a :href="pdfLink(aidaMap.id)" target="_blank" class="btn btn-warning btn-xs">PDF</a>
                                    <form :action="pdfLink(aidaMap.id)" target="_blank" id="pdf-email" style="display:none">
                                        <input type="hidden" name="download" value="1">
                                    </form>
                                    <button type="button" class="btn btn-success btn-xs" @click="sendEmail(aidaMap.id)">Email</button>
                                    <delete-button resource="aida-maps" :primary-key="aidaMap.id" @deleted="processData"></delete-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@section("js")
    <script src="{{ asset('js/aida-map.js') }}"></script>
@endsection
