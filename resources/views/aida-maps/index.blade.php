@extends("layouts.app")

@section("content")
    <div class="container" v-cloak>
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="row">
                        <div class="col-md-10">
                            <search :searchables="searchables" @searched="addFilter"></search>
                        </div>
                        <div class="col-md-2">
                            <a href="/aida-maps/create" class="btn btn-md btn-primary btn-block">
                                <i class="fa fa-user-plus"></i> ADD AIDA MAP
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="alert alert-success" v-if="message" v-cloak>
                        @{{ message }}
                    </div>
                    <table class="table table-hover table-striped table-bordered mb-0" v-cloak>
                        <thead is="sortable-header" :headers="headers" @sorted="applyOrder"></thead>
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
