<script>
function valid() {
    $.get('', { name: $('#name').val() }, function(data) {
        $('#message').html(data.message);
    }, 'json')
}
</script>