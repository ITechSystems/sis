<template>
    <div :id="id" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button slot="header" type="button" class="close" data-dismiss="modal">&times;</button>
                    <slot name="header"></slot>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
    }
</script>
